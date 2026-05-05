export function MetaDemo() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        background: "#0A0A0A",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#00D26A",
            fontWeight: 700,
            marginBottom: "1.25rem",
          }}
        >
          P.P.S.
        </div>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.4rem, 2.6vw, 1.85rem)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.92)",
            marginBottom: "1.5rem",
          }}
        >
          Everything you&apos;re seeing from me right now — this brand, this
          email, the website, the landing page, the follow-up sequence — was{" "}
          <strong style={{ fontStyle: "italic", fontWeight: 700, color: "#fff" }}>
            100% built with AI.
          </strong>
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1rem",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1rem",
          }}
        >
          (Yes, the video of me on the landing page is real — that part&apos;s
          actually me.) But the messaging, the copy, the design, the
          sequences? Yep, all AI.
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginTop: "1.75rem",
          }}
        >
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
            You&apos;re inside the demo already.
          </em>
        </p>
      </div>
    </section>
  );
}
