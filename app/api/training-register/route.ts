import { NextResponse } from "next/server";

// Server-side route — keeps GHL_API_KEY and friends out of the browser bundle.
// Posts the lead to GHL (if configured) AND to FormSubmit (always, as backup).

const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/dawson@dawsonrussell.com";
const GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/";
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

  const { firstName = "", email = "", phone = "", smsOptIn = "yes", source = "training" } = body;

  if (!email || !firstName) {
    return NextResponse.json(
      { ok: false, error: "firstName and email required" },
      { status: 400 },
    );
  }

  const ghlKey = process.env.GHL_API_KEY;
  const ghlLocation = process.env.GHL_LOCATION_ID;
  const ghlWebhook = process.env.GHL_WEBHOOK_URL || process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

  const requests: Promise<Response>[] = [];

  // 1) GHL — choose the path that's actually configured.
  if (ghlWebhook) {
    // Inbound Webhook trigger — no auth, no locationId required.
    requests.push(
      fetch(ghlWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, phone, smsOptIn, source }),
      }),
    );
  } else if (ghlKey && ghlLocation) {
    // GHL v2 Contacts API — requires both API key and location ID.
    const tags = [`source:${source}`];
    if (smsOptIn === "yes") tags.push("sms-opt-in");
    requests.push(
      fetch(GHL_CONTACTS_URL, {
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
          tags,
        }),
      }),
    );
  }
  // (If neither is configured, GHL silently no-ops; FormSubmit still runs.)

  // 2) FormSubmit — always-on safety net into Dawson's inbox.
  requests.push(
    fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        email,
        phone,
        smsOptIn,
        source,
        _subject: `Training Reg — ${firstName || "(no name)"} <${email}>`,
        _template: "table",
      }),
    }),
  );

  const results = await Promise.allSettled(requests);
  const okCount = results.filter(
    (r) => r.status === "fulfilled" && r.value.ok,
  ).length;

  if (okCount === 0) {
    // Surface the first error so we can debug from network logs.
    const firstFail = results.find(
      (r) => r.status === "rejected" || (r.status === "fulfilled" && !r.value.ok),
    );
    let detail = "All endpoints failed";
    if (firstFail?.status === "fulfilled") {
      detail = `Endpoint responded ${firstFail.value.status}`;
    } else if (firstFail?.status === "rejected") {
      detail =
        firstFail.reason instanceof Error
          ? firstFail.reason.message
          : String(firstFail.reason);
    }
    return NextResponse.json({ ok: false, error: detail }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
