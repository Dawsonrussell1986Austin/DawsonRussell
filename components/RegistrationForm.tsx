"use client";

import { useState } from "react";
import { submitToGHL } from "@/lib/ghl";

type Props = {
  ctaLabel?: string;
  source?: string;
};

export function RegistrationForm({ ctaLabel = "Reserve My Seat", source = "training" }: Props) {
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
      // Fire Meta Pixel Lead event if present
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
      <div className="rounded-2xl border border-ink/10 bg-white p-6 text-center">
        <p className="font-serif text-2xl text-ink">You're in.</p>
        <p className="mt-2 text-sm text-text-secondary">
          Check your inbox for the calendar invite and Zoom link.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        required
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="flex-1 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm text-ink placeholder:text-text-muted focus:border-ink/40 focus:outline-none"
      />
      <input
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm text-ink placeholder:text-text-muted focus:border-ink/40 focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary disabled:opacity-60"
      >
        {status === "submitting" ? "Reserving…" : ctaLabel}
      </button>
      {status === "error" ? (
        <p className="basis-full text-sm text-red-600">{error}</p>
      ) : null}
    </form>
  );
}
