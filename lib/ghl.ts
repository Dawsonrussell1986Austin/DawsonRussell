// Posts a registration payload to one or both endpoints:
//   1. GoHighLevel webhook (if NEXT_PUBLIC_GHL_WEBHOOK_URL is set)
//   2. FormSubmit (always — guaranteed inbox delivery so we never lose leads)
//
// As long as at least one endpoint succeeds, we treat the submission as
// captured.

export type GHLPayload = Record<string, string | number | boolean | undefined>;

const FORMSUBMIT_AJAX_URL =
  "https://formsubmit.co/ajax/dawson@dawsonrussell.com";

export async function submitToGHL(payload: GHLPayload): Promise<void> {
  const ghlUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

  const requests: Promise<Response>[] = [];

  if (ghlUrl) {
    requests.push(
      fetch(ghlUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
  }

  // FormSubmit fallback — this email is already activated (used by the
  // homepage contact form), so submissions go straight through.
  requests.push(
    fetch(FORMSUBMIT_AJAX_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        _subject: `Training Reg — ${payload.firstName ?? "(no name)"} <${payload.email ?? ""}>`,
        _template: "table",
      }),
    }),
  );

  const results = await Promise.allSettled(requests);
  const anySucceeded = results.some(
    (r) => r.status === "fulfilled" && r.value.ok,
  );
  if (!anySucceeded) {
    throw new Error("All submission endpoints failed");
  }
}
