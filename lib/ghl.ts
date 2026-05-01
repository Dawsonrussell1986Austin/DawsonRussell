// Posts a form payload to the GoHighLevel webhook.
// Used by both <RegistrationForm /> and <ContactForm />.

export type GHLPayload = Record<string, string | number | boolean | undefined>;

export async function submitToGHL(payload: GHLPayload): Promise<void> {
  const url = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;
  if (!url) {
    throw new Error("NEXT_PUBLIC_GHL_WEBHOOK_URL is not set");
  }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`GHL webhook responded ${res.status}`);
  }
}
