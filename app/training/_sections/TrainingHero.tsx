import { TRAINING } from "@/lib/constants";
import { LegacyRegistrationForm } from "@/components/LegacyRegistrationForm";

export function TrainingHero() {
  return (
    <section className="hero">
      <div className="hero-badge">{TRAINING.eyebrow}</div>
      <h1>
        How to Run a Capital Raise <br />
        <em>with AI in 2026</em>
      </h1>
      <p className="hero-sub">{TRAINING.subhead}</p>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "1.25rem",
          padding: "0.7rem 1.4rem",
          borderRadius: "999px",
          background: "#fff",
          border: "1px solid rgba(26,26,26,0.08)",
          margin: "0 auto 2rem",
          fontSize: "0.9rem",
        }}
      >
        <span style={{ fontWeight: 600, color: "#1A1A1A" }}>
          {TRAINING.dateLabel}
        </span>
        <span style={{ color: "#A09A93" }}>·</span>
        <span style={{ color: "#4A4A4A" }}>{TRAINING.timeLabel}</span>
        <span style={{ color: "#A09A93" }}>·</span>
        <span style={{ color: "#4A4A4A" }}>{TRAINING.durationLabel}</span>
      </div>

      <div style={{ maxWidth: 540, margin: "0 auto" }}>
        <LegacyRegistrationForm
          ctaLabel={TRAINING.ctaLabel}
          source="training-hero"
        />
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
            color: "#A09A93",
            textAlign: "center",
          }}
        >
          {TRAINING.noReplayNote}
        </p>
      </div>
    </section>
  );
}
