import { NextResponse } from "next/server";

// Server route for the homepage contact form. Browser already handles
// FormSubmit (Vercel data-center IPs are blocked by FormSubmit, so we
// have to keep that client-side). This route writes the lead into GHL.

// Use upsert so a duplicate email updates the existing contact
// instead of throwing a 400.
const GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/upsert";
const GHL_TAGS_URL = (id: string) =>
  `https://services.leadconnectorhq.com/contacts/${id}/tags`;
const GHL_NOTES_URL = (contactId: string) =>
  `https://services.leadconnectorhq.com/contacts/${contactId}/notes`;
const GHL_API_VERSION = "2021-07-28";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  project_type?: string;
  message?: string;
};

function splitName(name: string): { firstName: string; lastName: string } {
  const cleaned = (name ?? "").trim().replace(/\s+/g, " ");
  if (!cleaned) return { firstName: "", lastName: "" };
  const parts = cleaned.split(" ");
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export async function POST(req: Request) {
  let body: Payload = {};
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const {
    name = "",
    email = "",
    phone = "",
    company = "",
    project_type = "",
    message = "",
  } = body;

  if (!email || !name) {
    return NextResponse.json(
      { ok: false, error: "name and email required" },
      { status: 400 },
    );
  }

  const { firstName, lastName } = splitName(name);

  const ghlKey = process.env.GHL_API_KEY;
  const ghlLocation = process.env.GHL_LOCATION_ID;
  const ghlWebhook =
    process.env.GHL_CONTACT_WEBHOOK_URL || process.env.GHL_WEBHOOK_URL;

  // Path A — Inbound Webhook (preferred when configured).
  if (ghlWebhook) {
    const r = await fetch(ghlWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        company,
        projectType: project_type,
        message,
        source: "homepage-contact",
      }),
    });
    return NextResponse.json(
      { ok: r.ok, via: "webhook", status: r.status },
      { status: r.ok ? 200 : 502 },
    );
  }

  // Path B — GHL v2 Contacts API + (optional) Notes API for the message.
  if (ghlKey && ghlLocation) {
    const tags = ["source:homepage-contact"];
    if (project_type) tags.push(`project-type:${project_type}`);
    const assignedTo = process.env.GHL_ASSIGNED_USER_ID;

    // Upsert WITHOUT tags — additive tag write happens after.
    const contactRes = await fetch(GHL_CONTACTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ghlKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        companyName: company,
        locationId: ghlLocation,
        source: "Homepage Contact",
        ...(assignedTo ? { assignedTo } : {}),
      }),
    });

    let contactJson: any = null;
    try {
      contactJson = await contactRes.json();
    } catch {
      // ignore
    }

    if (!contactRes.ok) {
      console.error(
        "[contact] GHL upsert failed",
        contactRes.status,
        JSON.stringify(contactJson),
      );
      return NextResponse.json(
        { ok: false, via: "api", status: contactRes.status, detail: contactJson },
        { status: 502 },
      );
    }

    const contactId: string | undefined = contactJson?.contact?.id;

    // Add tags additively (preserves any tags from prior touchpoints).
    if (contactId && tags.length) {
      try {
        await fetch(GHL_TAGS_URL(contactId), {
          method: "POST",
          headers: {
            Authorization: `Bearer ${ghlKey}`,
            Version: GHL_API_VERSION,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ tags }),
        });
      } catch (err) {
        console.error("[contact] tag attach failed", err);
      }
    }

    // Best-effort: attach the project description as a note on the contact.
    if (contactId && (message || project_type)) {
      const noteBody = [
        project_type ? `Project type: ${project_type}` : null,
        message ? `Message:\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n\n");
      try {
        await fetch(GHL_NOTES_URL(contactId), {
          method: "POST",
          headers: {
            Authorization: `Bearer ${ghlKey}`,
            Version: GHL_API_VERSION,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ body: noteBody }),
        });
      } catch {
        // ignore — contact is already created, the note is a nicety
      }
    }

    return NextResponse.json({ ok: true, via: "api", contactId });
  }

  // Nothing configured — return 200 (FormSubmit handles the actual capture).
  return NextResponse.json({ ok: true, via: "noop", note: "GHL not configured" });
}
