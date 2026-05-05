import { COHORT, MODULES } from "@/lib/constants";
import { CheckoutButton } from "@/components/CheckoutButton";
import { HeroVideo } from "@/components/HeroVideo";

export function CohortHero() {
  const ctaLabel = `Join the ${COHORT.startDayShortLabel} Session`;
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
                background: "#00D26A",
                display: "inline-block",
                marginRight: 8,
              }}
            />
            Live Session · Starts {COHORT.startDateLabel}
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 5vw, 4.25rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#0A0A0A",
              marginBottom: "1.5rem",
            }}
          >
            The 5-day AI sprint{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "underline",
                textDecorationColor: "#00D26A",
                textDecorationThickness: "3px",
                textUnderlineOffset: "0.18em",
                textDecorationSkipInk: "none",
              }}
            >
              for capital raise marketing.
            </em>
          </h1>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.15rem",
              lineHeight: 1.55,
              color: "#0A0A0A",
              maxWidth: 560,
              marginBottom: "2rem",
              fontWeight: 500,
            }}
          >
            5 days. 90 minutes a day —{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "underline",
                textDecorationColor: "#00D26A",
                textDecorationThickness: "2px",
                textUnderlineOffset: "0.18em",
                textDecorationSkipInk: "none",
              }}
            >
              less than your happy hour, less than an extended lunch.
            </em>{" "}
            Listen in the car. Hit it at the gym. Trade one Netflix night for
            the homework. By Friday afternoon, you&apos;ve shipped a complete
            AI-powered raise marketing system.
          </p>

          {/* Scarcity line */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.5,
              color: "#1A1A1A",
              maxWidth: 560,
              marginBottom: "2rem",
              padding: "0.85rem 1.1rem",
              background: "rgba(0,210,106,0.08)",
              border: "1px solid rgba(0,210,106,0.25)",
              borderRadius: "0.65rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: "#00D26A",
                flexShrink: 0,
                boxShadow: "0 0 0 0 rgba(0,210,106,0.6)",
                animation: "pulse 1.8s ease-in-out infinite",
              }}
            />
            <span>
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "underline",
                  textDecorationColor: "#00D26A",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "0.18em",
                  textDecorationSkipInk: "none",
                }}
              >
                Only 10 founders per month.
              </em>{" "}
              Once the seats are gone, the next session is a month away.
            </span>
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
                  color: "#00D26A",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                }}
              >
                ✓
              </span>
              $500 to reserve
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: "rgba(212,113,78,0.12)",
                  color: "#00D26A",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                }}
              >
                ✓
              </span>
              Pay rest only if it delivers
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: "rgba(212,113,78,0.12)",
                  color: "#00D26A",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                }}
              >
                ✓
              </span>
              10 founders / month
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
        background: "linear-gradient(135deg, #0A0A0A 0%, #2A2A2A 100%)",
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
        Mon–Fri. <em style={{ fontStyle: "italic", color: "#00D26A" }}>One workweek.</em>
      </h3>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.95rem",
        }}
      >
        {MODULES.map((m) => (
          <li
            key={m.day}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <span
              style={{
                minWidth: 86,
                paddingTop: 2,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#00D26A",
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {m.dayLabel.split(" — ")[0]}
            </span>
            <span style={{ fontWeight: 500, color: "#fff", lineHeight: 1.35 }}>
              {m.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
