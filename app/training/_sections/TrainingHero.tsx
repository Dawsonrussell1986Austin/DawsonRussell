import { TRAINING } from "@/lib/constants";
import { LegacyRegistrationForm } from "@/components/LegacyRegistrationForm";
import { HeroVideo } from "@/components/HeroVideo";

export function TrainingHero() {
  return (
    <section className="training-hero">
      <div className="training-hero-grid">
        <div className="training-hero-copy">
          <div className="hero-badge" style={{ marginBottom: "1.75rem" }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "#D4714E",
                display: "inline-block",
                marginRight: 8,
              }}
            />
            {TRAINING.eyebrow}
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 5vw, 4.25rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#1A1A1A",
              marginBottom: "1.5rem",
            }}
          >
            Watch me build a{" "}
            <span style={{ color: "#D4714E" }}>$25K</span>{" "}
            capital raise marketing package in 20 minutes —{" "}
            <em style={{ fontStyle: "italic", color: "#D4714E" }}>
              live, on screen.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.15rem",
              lineHeight: 1.55,
              color: "#4A4A4A",
              maxWidth: 520,
              marginBottom: "2rem",
            }}
          >
            {TRAINING.subhead}
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.65rem 1.2rem",
              borderRadius: 999,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(26,26,26,0.08)",
              fontSize: "0.85rem",
              marginBottom: "2rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              <span style={{ fontWeight: 600, color: "#1A1A1A" }}>
                {TRAINING.dateLabel}
              </span>
            </span>
            <span style={{ color: "rgba(26,26,26,0.2)" }}>·</span>
            <span style={{ color: "#4A4A4A" }}>{TRAINING.timeLabel}</span>
            <span style={{ color: "rgba(26,26,26,0.2)" }}>·</span>
            <span style={{ color: "#4A4A4A" }}>{TRAINING.durationLabel}</span>
          </div>

          <div className="form-light" style={{ maxWidth: 520 }}>
            <LegacyRegistrationForm
              ctaLabel={TRAINING.ctaLabel}
              source="training-hero"
            />
            <p
              style={{
                marginTop: "0.85rem",
                fontSize: "0.78rem",
                color: "#6B6B6B",
                letterSpacing: "0.02em",
              }}
            >
              {TRAINING.noReplayNote} · No spam, ever.
            </p>
          </div>
        </div>

        <div className="training-hero-video">
          <HeroVideo
            videoUrl={TRAINING.videoUrl}
            videoEmbed={TRAINING.videoEmbed}
            videoPoster={TRAINING.videoPoster}
          />
        </div>
      </div>
    </section>
  );
}
