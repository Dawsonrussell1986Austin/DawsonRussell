import { NextResponse } from "next/server";

// Server-side route — keeps GHL_API_KEY out of the browser bundle.
// The browser already handles FormSubmit (Vercel data-center IPs are
// blocked by FormSubmit, so it has to run client-side). This route is
// dedicated to GHL.

// Use upsert so a duplicate email updates the existing contact
// instead of throwing a 400.
const GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/upsert";
const GHL_TAGS_URL = (id: string) =>
  `https://services.leadconnectorhq.com/contacts/${id}/tags`;
const GHL_API_VERSION = "2021-07-28";

type Payload = {
  firstName?: string;
  email?: string;
  phone?: string;
  smsOptIn?: string;
  source?: string;
};

export async function POST(req: Request) {
  let body: Payload = {};
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const {
    firstName = "",
    email = "",
    phone = "",
    smsOptIn = "yes",
    source = "training",
  } = body;

  if (!email || !firstName) {
    return NextResponse.json(
      { ok: false, error: "firstName and email required" },
      { status: 400 },
    );
  }

  const ghlKey = process.env.GHL_API_KEY;
  const ghlLocation = process.env.GHL_LOCATION_ID;
  const ghlWebhook =
    process.env.GHL_WEBHOOK_URL || process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

  // Path A — Inbound Webhook (preferred when configured; no auth needed).
  if (ghlWebhook) {
    const r = await fetch(ghlWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, email, phone, smsOptIn, source }),
    });
    return NextResponse.json(
      { ok: r.ok, via: "webhook", status: r.status },
      { status: r.ok ? 200 : 502 },
    );
  }

  // Path B — GHL v2 Contacts API. Needs API key + location ID.
  if (ghlKey && ghlLocation) {
    const tags = [`source:${source}`];
    if (smsOptIn === "yes") tags.push("sms-opt-in");
    const assignedTo = process.env.GHL_ASSIGNED_USER_ID;

    // Upsert the contact WITHOUT tags — passing tags here would overwrite
    // any tags the contact already has. Tags get added via the additive
    // /contacts/{id}/tags endpoint below.
    const r = await fetch(GHL_CONTACTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ghlKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        email,
        phone,
        locationId: ghlLocation,
        source: "Training Registration",
        ...(assignedTo ? { assignedTo } : {}),
      }),
    });
    let detail: any = null;
    try {
      detail = await r.json();
    } catch {
      // ignore
    }
    if (!r.ok) {
      console.error(
        "[training-register] GHL upsert failed",
        r.status,
        JSON.stringify(detail),
      );
      return NextResponse.json(
        { ok: false, via: "api", status: r.status, detail },
        { status: 502 },
      );
    }

    const contactId: string | undefined = detail?.contact?.id;
    if (contactId && tags.length) {
      // Force a fresh "Tag Added" event for the source tag on EVERY opt-in
      // (new contact OR existing). This guarantees any GHL workflow whose
      // trigger is "Contact Tag Added: source:training-hero" fires every
      // time someone re-opts-in — not just the first time.
      const triggerTag = `source:${source}`;
      try {
        await fetch(GHL_TAGS_URL(contactId), {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${ghlKey}`,
            Version: GHL_API_VERSION,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ tags: [triggerTag] }),
        });
      } catch (err) {
        console.error("[training-register] tag pre-remove failed", err);
        // Non-fatal — the add below will still attempt.
      }

      try {
        const tagRes = await fetch(GHL_TAGS_URL(contactId), {
          method: "POST",
          headers: {
            Authorization: `Bearer ${ghlKey}`,
            Version: GHL_API_VERSION,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ tags }),
        });
        if (!tagRes.ok) {
          const tagErr = await tagRes.text();
          console.error(
            "[training-register] tag attach failed",
            tagRes.status,
            tagErr,
          );
        }
      } catch (err) {
        console.error("[training-register] tag attach exception", err);
      }
    }

    return NextResponse.json({ ok: true, via: "api", contactId });
  }

  // Nothing configured — return 200 (FormSubmit handles the capture).
  return NextResponse.json({ ok: true, via: "noop", note: "GHL not configured" });
}
