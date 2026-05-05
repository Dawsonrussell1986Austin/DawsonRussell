import { NextResponse } from "next/server";

// Server-side route — keeps GHL_API_KEY out of the browser bundle.
// The browser already handles FormSubmit (Vercel data-center IPs are
// blocked by FormSubmit, so it has to run client-side). This route is
// dedicated to GHL.

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
        tags,
      }),
    });
    let detail: unknown = null;
    try {
      detail = await r.json();
    } catch {
      // ignore
    }
    return NextResponse.json(
      { ok: r.ok, via: "api", status: r.status, detail },
      { status: r.ok ? 200 : 502 },
    );
  }

  // Nothing configured — return 200 (FormSubmit handles the capture).
  return NextResponse.json({ ok: true, via: "noop", note: "GHL not configured" });
}
