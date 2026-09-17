"use client";

import { useId, useState } from "react";

// Public form endpoint supplied by Kit's HTML embed. No API key is needed.
const action = "https://app.kit.com/forms/9928078/subscriptions";

export function Signup() {
  const id = useId();
  const [submitting, setSubmitting] = useState(false);

  return (
    <form action={action} method="post" onSubmit={() => setSubmitting(true)}>
      <label className="sr-only" htmlFor={id}>
        Your email address
      </label>
      <input
        id={id}
        name="email_address"
        type="email"
        placeholder="Your email address"
        required
        autoComplete="email"
      />
      <button type="submit" disabled={submitting}>
        {submitting ? "Opening Kit…" : "Get the field notes"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="fine">
        One useful email a week. Free. Unsubscribe anytime.
      </p>
      <p className="fine">
        Powered by <a href="https://kit.com">Kit</a> ·{" "}
        <a href="/privacy">Privacy</a>
      </p>
    </form>
  );
}
