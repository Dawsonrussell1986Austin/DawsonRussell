import { TRUST_STRIP } from "@/lib/constants";

export function TrustStrip() {
  return (
    <div
      style={{
        padding: "3.5rem 2rem",
        textAlign: "center",
        borderTop: "1px solid rgba(26,26,26,0.08)",
      }}
    >
      <p
        style={{
          fontSize: "0.85rem",
          color: "#4A4A4A",
          marginBottom: "1.75rem",
          maxWidth: 640,
          margin: "0 auto 1.75rem",
        }}
      >
        {TRUST_STRIP}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3.5rem",
          flexWrap: "wrap",
          opacity: 0.35,
        }}
      >
        {["Apex Ventures", "Ironclad Capital", "Novalith", "Stratos Group", "Meridian AI"].map(
          (name) => (
            <span
              key={name}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#0A0A0A",
                letterSpacing: "-0.01em",
              }}
            >
              {name}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
