import { TRUST_STRIP } from "@/lib/constants";

const STATS: { value: string; label: string }[] = [
  { value: "20+ years", label: "Experience" },
  { value: "200+", label: "Issuers" },
  { value: "$2B+", label: "AUM Impacted" },
];

export function TrustStrip() {
  return (
    <div
      style={{
        padding: "3.5rem 2rem",
        textAlign: "center",
        borderTop: "1px solid rgba(10,10,10,0.08)",
      }}
    >
      <p
        style={{
          fontSize: "0.85rem",
          color: "#4A4A4A",
          maxWidth: 640,
          margin: "0 auto 2.25rem",
        }}
      >
        {TRUST_STRIP}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          maxWidth: 880,
          margin: "0 auto",
          gap: "0",
          alignItems: "stretch",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.value}
            style={{
              padding: "1.25rem 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem",
              alignItems: "center",
              borderLeft:
                i > 0 ? "1px solid rgba(10,10,10,0.08)" : "none",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#0A0A0A",
                lineHeight: 1,
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#6B6B6B",
                fontWeight: 600,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
