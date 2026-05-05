// Form submit fan-out, run from the browser:
//   1. POST to FormSubmit AJAX → guaranteed inbox capture (works from
//      browsers; pre-activated for dawson@dawsonrussell.com).
//   2. POST to /api/training-register (best-effort) → server route
//      forwards the lead to GHL if GHL_API_KEY + GHL_LOCATION_ID, or to
//      GHL_WEBHOOK_URL if that's the path. Failures here are tolerated
//      so we never block on GHL config.
//
// The lead is considered captured if at least the FormSubmit POST
// succeeds. The server route runs in parallel and does not gate the
// success state.

export type GHLPayload = Record<string, string | number | boolean | undefined>;

const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/dawson@dawsonrussell.com";

export async function submitToGHL(payload: GHLPayload): Promise<void> {
  // Fire the server route in the background — don't await its result.
  // It writes to GHL when configured; failures are silent.
  fetch("/api/training-register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {
    // ignore — FormSubmit is the source of truth for "did the lead land"
  });

  const res = await fetch(FORMSUBMIT_URL, {
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
  });
  if (!res.ok) {
    throw new Error(`FormSubmit responded ${res.status}`);
  }
}
