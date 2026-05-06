// Browser → server. Posts the lead to our same-origin /api/training-register,
// which forwards into GHL on the server (key + location ID stay server-side).
//
// We used to dual-fire to FormSubmit as a safety-net inbox, but FormSubmit's
// domain is on Malwarebytes / corporate-firewall blocklists (it's been heavily
// abused by phishers), and that third-party XHR was getting aborted in some
// users' browsers — losing leads. Now the only outbound request is same-
// origin, so endpoint-protection software has nothing to flag.

export type GHLPayload = Record<string, string | number | boolean | undefined>;

export async function submitToGHL(payload: GHLPayload): Promise<void> {
  const res = await fetch("/api/training-register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    let msg = `Server responded ${res.status}`;
    try {
      const data = (await res.json()) as { error?: string };
      if (data?.error) msg = data.error;
    } catch {
      // ignore
    }
    throw new Error(msg);
  }
}
