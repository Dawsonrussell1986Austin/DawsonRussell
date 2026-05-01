"use client";

import { useState } from "react";
import { submitToGHL } from "@/lib/ghl";

type Props = {
  ctaLabel?: string;
  source?: string;
};

export function LegacyRegistrationForm({
  ctaLabel = "Reserve My Seat",
  source = "training",
}: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      await submitToGHL({ firstName, email, source });
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", { source });
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success show" style={{ display: "block" }}>
        <div className="form-success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h4>You&apos;re in</h4>
        <p>Check your inbox for the calendar invite and Zoom link.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="custom-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First name *</label>
          <input
            id="firstName"
            type="text"
            required
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="form-submit-btn"
      >
        {status === "submitting" ? "Reserving…" : ctaLabel}
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </button>
      {status === "error" ? (
        <p className="form-note" style={{ color: "#C0392B" }}>
          {error}. Email <a href="mailto:dawson@dawsonrussell.com">dawson@dawsonrussell.com</a> directly.
        </p>
      ) : null}
    </form>
  );
}
