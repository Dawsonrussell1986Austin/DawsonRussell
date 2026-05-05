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
  const [phone, setPhone] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      await submitToGHL({
        firstName,
        email,
        phone,
        smsOptIn: smsOptIn ? "yes" : "no",
        source,
      });
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", { source });
      }
      // Hand off to the dedicated thanks page (bigger moment, plus the
      // bonus offer asking for a live-example link).
      if (typeof window !== "undefined") {
        const params = new URLSearchParams({
          n: firstName,
          e: email,
        });
        window.location.href = `/training/confirmed?${params.toString()}`;
        return;
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
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
      <div className="form-row">
        <div className="form-group" style={{ flex: 1 }}>
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="(555) 123-4567"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <label
        htmlFor="smsOptIn"
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0.65rem",
          marginTop: "0.25rem",
          fontSize: "0.78rem",
          lineHeight: 1.5,
          color: "#4A4A4A",
          cursor: "pointer",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "0",
          textTransform: "none",
          fontWeight: 400,
        }}
      >
        <input
          id="smsOptIn"
          type="checkbox"
          checked={smsOptIn}
          onChange={(e) => setSmsOptIn(e.target.checked)}
          style={{
            marginTop: 3,
            width: 16,
            height: 16,
            accentColor: "#00D26A",
            cursor: "pointer",
            flexShrink: 0,
          }}
        />
        <span>
          Yes — text me reminders and details about the training. Msg & data
          rates may apply. Reply STOP to opt out.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="form-submit-btn"
        style={{ marginTop: "1rem" }}
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
