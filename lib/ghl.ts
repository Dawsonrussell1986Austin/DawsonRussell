// Browser → server. The form posts here; the server route handles GHL + FormSubmit
// fan-out so the API key never touches the browser bundle.

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
      // ignore parse errors
    }
    throw new Error(msg);
  }
}
