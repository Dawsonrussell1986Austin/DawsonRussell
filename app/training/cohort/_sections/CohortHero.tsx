import { COHORT, MODULES } from "@/lib/constants";
import { CheckoutButton } from "@/components/CheckoutButton";
import { HeroVideo } from "@/components/HeroVideo";

export function CohortHero() {
  const ctaLabel = `Join ${COHORT.number} — ${COHORT.priceLabel}`;
  const hasVideo = Boolean(COHORT.videoUrl || COHORT.videoEmbed);

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
            {COHORT.number} — Starts {COHORT.startDateLabel}
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
            The 7-day AI sprint{" "}
            <em style={{ fontStyle: "italic", color: "#D4714E" }}>
              for capital raise marketing.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.15rem",
              lineHeight: 1.55,
              color: "#4A4A4A",
              maxWidth: 540,
              marginBottom: "2rem",
            }}
          >
            Seven business days. One hour each, live with me. Plus 21 days of
            private Slack and office hours after — so the system actually
            ships, not bookmarks.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <CheckoutButton label={ctaLabel} className="btn-primary" />
            <a href="#curriculum" className="btn-secondary">
              See the curriculum
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center",
              fontSize: "0.85rem",
              color: "#4A4A4A",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: "rgba(212,113,78,0.12)",
                  color: "#D4714E",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                }}
              >
                ✓
              </span>
              14-day refund
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: "rgba(212,113,78,0.12)",
                  color: "#D4714E",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                }}
              >
                ✓
              </span>
              Founding rate
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: "rgba(212,113,78,0.12)",
                  color: "#D4714E",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                }}
              >
                ✓
              </span>
              Limited seats
            </span>
          </div>
        </div>

        <div className="training-hero-video">
          {hasVideo ? (
            <HeroVideo
              videoUrl={COHORT.videoUrl}
              videoEmbed={COHORT.videoEmbed}
              videoPoster={COHORT.videoPoster}
              aspectRatio="9 / 16"
              placeholderLabel="Watch the sprint intro"
            />
          ) : (
            <CurriculumPreview />
          )}
        </div>
      </div>
    </section>
  );
}

function CurriculumPreview() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)",
        borderRadius: "1.25rem",
        padding: "2rem",
        color: "#fff",
        boxShadow:
          "0 30px 60px -20px rgba(26,26,26,0.35), 0 0 0 1px rgba(26,26,26,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(212,113,78,0.5), transparent)",
        }}
      />
      <div
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          marginBottom: "0.75rem",
        }}
      >
        Curriculum
      </div>
      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.5rem",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          marginBottom: "1.5rem",
          color: "#fff",
        }}
      >
        Seven days. <em style={{ fontStyle: "italic", color: "#D4714E" }}>Seven builds.</em>
      </h3>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
        }}
      >
        {MODULES.map((m) => (
          <li
            key={m.day}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#D4714E",
                flexShrink: 0,
              }}
            >
              {String(m.day).padStart(2, "0")}
            </span>
            <span style={{ fontWeight: 500, color: "#fff" }}>{m.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
