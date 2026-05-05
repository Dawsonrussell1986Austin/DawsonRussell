"use client";

import { useState } from "react";

type Props = {
  email: string;
  firstName: string;
};

export function TrainingBonusForm({ email, firstName }: Props) {
  const [topic, setTopic] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim() && !link.trim()) {
      setError("Drop a topic OR a link — one of them.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/training-bonus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          topic: topic.trim(),
          link: link.trim(),
        }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error || `Server responded ${res.status}`);
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
        <h4>Got it.</h4>
        <p>I&apos;ll text you within the hour. Talk Friday.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="custom-form">
      <div className="form-row">
        <div className="form-group" style={{ flex: 1 }}>
          <label htmlFor="bonusTopic">What do you want me to cover?</label>
          <textarea
            id="bonusTopic"
            placeholder="e.g. how to write investor cold emails that don&apos;t sound like AI wrote them"
            rows={3}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={{ resize: "vertical", minHeight: 90 }}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group" style={{ flex: 1 }}>
          <label htmlFor="bonusLink">Or — your raise URL or pitch deck link</label>
          <input
            id="bonusLink"
            type="url"
            placeholder="https://..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="form-submit-btn"
      >
        {status === "submitting" ? "Sending…" : "Send to Dawson"}
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </button>
      {status === "error" ? (
        <p className="form-note" style={{ color: "#C0392B" }}>
          {error}
        </p>
      ) : null}
    </form>
  );
}
