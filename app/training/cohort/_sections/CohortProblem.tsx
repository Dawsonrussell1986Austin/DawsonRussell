export function CohortProblem() {
  return (
    <section className="one-person">
      <div className="container">
        <div className="one-person-content" style={{ maxWidth: 760 }}>
          <div className="section-label">The problem</div>
          <h2 className="section-heading">
            Capital raise marketing<br />
            <em className="serif" style={{ fontStyle: "italic" }}>
              is stuck in 2018.
            </em>
          </h2>
          <p className="body-text">
            The decks look the same as they did a decade ago. The investor emails
            read like form letters. The ad creative is outsourced and forgotten.
          </p>
          <p className="body-text">
            Decks take 6 weeks. Ads cost too much and underperform. Investor
            email is generic and the open rates show it. Founders end up hiring
            an agency for $40K, get a strategy doc, and still have to build the
            assets themselves.
          </p>
          <p className="body-text">
            AI changes all of it — but most founders don&apos;t know where to
            start. Which tools? Which prompts? What workflow? Five days from
            now — Friday, 4pm CT — you&apos;ll have answers, a deployed
            landing page, ads ready to launch, and outreach automation
            sending. That&apos;s what this sprint is.
          </p>
        </div>

        <BeforeAfter />
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <div
      style={{
        marginTop: "4rem",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: "1.5rem",
        alignItems: "stretch",
      }}
      className="before-after-grid"
    >
      <DeckMockup variant="before" />
      <Arrow />
      <DeckMockup variant="after" />
    </div>
  );
}

function Arrow() {
  return (
    <div
      className="before-after-arrow"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#D4714E",
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  );
}

function DeckMockup({ variant }: { variant: "before" | "after" }) {
  const isBefore = variant === "before";
  const labelText = isBefore ? "Before · 2018 way" : "After · Day 2 of the sprint";
  const labelColor = isBefore ? "rgba(26,26,26,0.5)" : "#D4714E";
  const slideTitle = isBefore
    ? "Investment Opportunity"
    : "We've returned 18% IRR on $42M deployed.";
  const slideSub = isBefore
    ? "Real estate fund overview"
    : "Reg D 506(c) · Sunbelt multifamily · 2026 vintage";

  // Stats lines (faked but realistic)
  const stats: { label: string; value: string }[] = isBefore
    ? [
        { label: "Build time", value: "6 weeks" },
        { label: "Cost", value: "$40,000 agency" },
        { label: "Email open rate", value: "9%" },
      ]
    : [
        { label: "Build time", value: "1 day" },
        { label: "Cost", value: "$2,499 sprint" },
        { label: "Email open rate", value: "38%" },
      ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        minWidth: 0,
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 600,
          color: labelColor,
          paddingLeft: "0.25rem",
        }}
      >
        {labelText}
      </div>

      <div
        style={{
          borderRadius: "0.85rem",
          overflow: "hidden",
          border: "1px solid rgba(26,26,26,0.08)",
          boxShadow: isBefore
            ? "0 10px 30px -15px rgba(26,26,26,0.15)"
            : "0 25px 60px -25px rgba(26,26,26,0.35), 0 0 0 1px rgba(212,113,78,0.1)",
          background: "#fff",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 0.85rem",
            background: "rgba(26,26,26,0.04)",
            borderBottom: "1px solid rgba(26,26,26,0.06)",
          }}
        >
          <Dot color="#FF5F57" />
          <Dot color="#FEBC2E" />
          <Dot color="#28C840" />
          <div
            style={{
              flex: 1,
              marginLeft: "0.5rem",
              height: 18,
              borderRadius: 6,
              background: "rgba(26,26,26,0.06)",
              fontSize: "0.65rem",
              color: "rgba(26,26,26,0.4)",
              display: "flex",
              alignItems: "center",
              padding: "0 0.6rem",
            }}
          >
            {isBefore ? "investordeck.pdf" : "sunbeltfundiii.com"}
          </div>
        </div>

        {/* Slide / page content */}
        <div
          style={{
            flex: 1,
            padding: "1.5rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            background: isBefore
              ? "linear-gradient(180deg, #FAFAF7 0%, #F0EDE6 100%)"
              : "linear-gradient(180deg, #1A1A1A 0%, #2A2A2A 100%)",
            color: isBefore ? "#1A1A1A" : "#fff",
            minHeight: 220,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: isBefore ? "rgba(26,26,26,0.4)" : "#D4714E",
            }}
          >
            {isBefore ? "Slide 1 / 22" : "Hero · Above the fold"}
          </div>

          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isBefore ? "1.05rem" : "1.2rem",
              fontWeight: isBefore ? 500 : 600,
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: isBefore ? "rgba(26,26,26,0.85)" : "#fff",
            }}
          >
            {slideTitle}
          </div>
          <div
            style={{
              fontSize: "0.78rem",
              lineHeight: 1.5,
              color: isBefore ? "rgba(26,26,26,0.5)" : "rgba(255,255,255,0.7)",
              fontStyle: isBefore ? "italic" : "normal",
            }}
          >
            {slideSub}
          </div>

          {/* Fake content bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: "auto" }}>
            <Bar dim={isBefore} width="92%" />
            <Bar dim={isBefore} width="78%" />
            <Bar dim={isBefore} width="64%" />
          </div>
        </div>
      </div>

      {/* Stats footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.45rem",
          padding: "1rem 1rem 0",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.85rem",
            }}
          >
            <span style={{ color: "#6B6B6B" }}>{s.label}</span>
            <span
              style={{
                fontWeight: 600,
                color: isBefore ? "rgba(26,26,26,0.55)" : "#D4714E",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      style={{
        width: 11,
        height: 11,
        borderRadius: "50%",
        background: color,
        display: "inline-block",
      }}
    />
  );
}

function Bar({ dim, width }: { dim: boolean; width: string }) {
  return (
    <span
      style={{
        height: 8,
        width,
        borderRadius: 4,
        background: dim ? "rgba(26,26,26,0.12)" : "rgba(255,255,255,0.18)",
        display: "block",
      }}
    />
  );
}
