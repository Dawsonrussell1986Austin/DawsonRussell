// CSS-rendered "screenshots" for the training/cohort/work pages. No images
// needed — each mockup is styled HTML that looks like a designed asset.

export type AssetType =
  | "landing-page"
  | "email"
  | "ad"
  | "ad-variations"
  | "deck-slide"
  | "outreach-flow"
  | "visual-pack";

export function AssetMockup({ type }: { type: AssetType }) {
  switch (type) {
    case "landing-page":
      return <LandingPage />;
    case "email":
      return <Email />;
    case "ad":
      return <Ad />;
    case "ad-variations":
      return <AdVariations />;
    case "deck-slide":
      return <DeckSlide />;
    case "outreach-flow":
      return <OutreachFlow />;
    case "visual-pack":
      return <VisualPack />;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function Frame({
  children,
  aspect = "16 / 10",
  background = "#fff",
  shadow = true,
}: {
  children: React.ReactNode;
  aspect?: string;
  background?: string;
  shadow?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspect,
        borderRadius: "0.75rem",
        overflow: "hidden",
        background,
        border: "1px solid rgba(26,26,26,0.08)",
        boxShadow: shadow
          ? "0 20px 50px -25px rgba(26,26,26,0.25), 0 0 0 1px rgba(26,26,26,0.04)"
          : undefined,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {children}
    </div>
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.45rem 0.65rem",
        background: "rgba(26,26,26,0.04)",
        borderBottom: "1px solid rgba(26,26,26,0.06)",
        fontSize: "0.6rem",
      }}
    >
      <Dot color="#FF5F57" />
      <Dot color="#FEBC2E" />
      <Dot color="#28C840" />
      <div
        style={{
          flex: 1,
          marginLeft: "0.4rem",
          height: 16,
          borderRadius: 4,
          background: "rgba(26,26,26,0.06)",
          color: "rgba(26,26,26,0.4)",
          display: "flex",
          alignItems: "center",
          padding: "0 0.5rem",
          fontSize: "0.6rem",
        }}
      >
        {url}
      </div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      style={{
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: color,
        display: "inline-block",
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Landing page
// ─────────────────────────────────────────────────────────────────────────────

function LandingPage() {
  return (
    <Frame aspect="4 / 3">
      <BrowserChrome url="sunbeltfundiii.com" />
      <div
        style={{
          padding: "1.25rem 1rem 0",
          background: "linear-gradient(180deg, #FAFAF7 0%, #F0EDE6 100%)",
          height: "calc(100% - 28px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top nav bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
            fontSize: "0.55rem",
          }}
        >
          <span style={{ fontWeight: 700, letterSpacing: "0.05em", color: "#1A1A1A" }}>
            SUNBELT
          </span>
          <span
            style={{
              padding: "3px 8px",
              borderRadius: 999,
              background: "#1A1A1A",
              color: "#fff",
              fontWeight: 500,
            }}
          >
            Request access
          </span>
        </div>

        <div
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#D4714E",
            fontWeight: 600,
            marginBottom: "0.4rem",
          }}
        >
          Reg D 506(c) · Multifamily
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.95rem",
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#1A1A1A",
            marginBottom: "0.4rem",
          }}
        >
          18% IRR on $42M deployed
          <br />
          across 11 Sunbelt assets.
        </div>
        <div
          style={{
            fontSize: "0.6rem",
            color: "rgba(26,26,26,0.55)",
            marginBottom: "0.7rem",
            lineHeight: 1.4,
          }}
        >
          Fund III is open to 32 accredited investors. $40M target raise.
        </div>

        {/* Stat row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          {[
            { v: "18%", l: "IRR" },
            { v: "$42M", l: "Deployed" },
            { v: "11", l: "Assets" },
          ].map((s) => (
            <div
              key={s.l}
              style={{
                background: "#fff",
                border: "1px solid rgba(26,26,26,0.08)",
                borderRadius: 6,
                padding: "0.45rem 0.55rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  lineHeight: 1,
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontSize: "0.5rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.5)",
                  marginTop: 3,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Form preview */}
        <div
          style={{
            marginTop: "auto",
            background: "#fff",
            borderRadius: 6,
            border: "1px solid rgba(26,26,26,0.08)",
            padding: "0.5rem",
            display: "flex",
            gap: "0.3rem",
          }}
        >
          <div
            style={{
              flex: 1,
              height: 18,
              borderRadius: 4,
              background: "rgba(26,26,26,0.04)",
            }}
          />
          <span
            style={{
              padding: "0 0.6rem",
              borderRadius: 4,
              background: "#D4714E",
              color: "#fff",
              fontSize: "0.55rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
            }}
          >
            Request access
          </span>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Email
// ─────────────────────────────────────────────────────────────────────────────

function Email() {
  return (
    <Frame aspect="4 / 3">
      {/* Mail header */}
      <div
        style={{
          padding: "0.6rem 0.85rem",
          borderBottom: "1px solid rgba(26,26,26,0.06)",
          background: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.55rem",
            color: "rgba(26,26,26,0.5)",
            marginBottom: 4,
          }}
        >
          <span>Dawson Russell &lt;dawson@halocene.co&gt;</span>
          <span>Tue 10:42</span>
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#1A1A1A",
            lineHeight: 1.25,
          }}
        >
          Quick note — we just hit $42M deployed with 18% IRR.
        </div>
      </div>

      <div
        style={{
          padding: "0.85rem",
          fontSize: "0.6rem",
          lineHeight: 1.6,
          color: "#3A3A3A",
          background: "#fff",
          height: "calc(100% - 50px)",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <div>Hi {`{First Name}`},</div>
        <div>
          Quick update before our call. The fund just crossed{" "}
          <strong>$42M deployed</strong> across 11 Sunbelt assets, and we&apos;re
          tracking <strong>18% IRR</strong> on the first 9 dispositions.
        </div>
        <div>
          Fund III opens to 32 LPs on June 1. You said you wanted a heads-up
          before that — this is it.
        </div>
        <div style={{ display: "flex", gap: "0.4rem", marginTop: "auto" }}>
          <span
            style={{
              padding: "0.3rem 0.7rem",
              borderRadius: 4,
              background: "#1A1A1A",
              color: "#fff",
              fontSize: "0.55rem",
              fontWeight: 600,
            }}
          >
            Book a 15-min call
          </span>
          <span
            style={{
              padding: "0.3rem 0.7rem",
              borderRadius: 4,
              border: "1px solid rgba(26,26,26,0.15)",
              color: "#1A1A1A",
              fontSize: "0.55rem",
              fontWeight: 500,
            }}
          >
            See the deck
          </span>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Ad (single)
// ─────────────────────────────────────────────────────────────────────────────

function Ad() {
  return (
    <Frame aspect="1 / 1">
      <div
        style={{
          height: "100%",
          background:
            "linear-gradient(135deg, #1A1A1A 0%, #3A2E25 60%, #5A3525 100%)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "0.85rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.85rem",
          }}
        >
          <span
            style={{
              padding: "3px 8px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.18)",
              fontSize: "0.5rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            SPONSORED
          </span>
          <span
            style={{
              fontSize: "0.55rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            SUNBELT
          </span>
        </div>

        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.95rem",
            lineHeight: 1.15,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "#fff",
            marginBottom: "0.4rem",
          }}
        >
          18% IRR. <em style={{ fontStyle: "italic", color: "#D4714E" }}>32 LP seats.</em>
        </div>
        <div
          style={{
            fontSize: "0.6rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.4,
            marginBottom: "auto",
          }}
        >
          Reg D 506(c) Sunbelt multifamily fund. Accredited only.
        </div>

        <div
          style={{
            marginTop: "0.85rem",
            padding: "0.5rem 0.7rem",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 6,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.55rem",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.5)" }}>sunbeltfundiii.com</span>
          <span
            style={{
              padding: "3px 9px",
              borderRadius: 4,
              background: "#D4714E",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Learn more
          </span>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Ad variations grid
// ─────────────────────────────────────────────────────────────────────────────

function AdVariations() {
  const ads: { hook: string; bg: string; accent: string }[] = [
    { hook: "18% IRR.\n32 LP seats.", bg: "linear-gradient(135deg,#1A1A1A,#5A3525)", accent: "#D4714E" },
    { hook: "$42M deployed.\nFund III opens June 1.", bg: "linear-gradient(135deg,#0F1F2E,#1B3A5C)", accent: "#5BB3D9" },
    { hook: "Sunbelt rents are\nstill outpacing CPI.", bg: "linear-gradient(135deg,#1A2E1F,#2D5439)", accent: "#7FBD8E" },
    { hook: "11 assets.\nZero missed distributions.", bg: "linear-gradient(135deg,#2E1F2E,#5A2E5A)", accent: "#D87FB6" },
  ];
  return (
    <Frame aspect="1 / 1" background="#1A1A1A">
      <div
        style={{
          height: "100%",
          padding: "0.65rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
          background: "#1A1A1A",
        }}
      >
        {ads.map((a, i) => (
          <div
            key={i}
            style={{
              background: a.bg,
              borderRadius: 6,
              padding: "0.45rem 0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "0.45rem",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.5)",
                fontWeight: 600,
              }}
            >
              SPONSORED
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.6rem",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.2,
                whiteSpace: "pre-line",
              }}
            >
              {a.hook}
            </div>
            <div
              style={{
                alignSelf: "flex-start",
                padding: "2px 6px",
                background: a.accent,
                color: "#fff",
                borderRadius: 3,
                fontSize: "0.45rem",
                fontWeight: 700,
              }}
            >
              Learn more
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Deck slide
// ─────────────────────────────────────────────────────────────────────────────

function DeckSlide() {
  return (
    <Frame aspect="16 / 9" background="#1A1A1A">
      <div
        style={{
          height: "100%",
          background: "linear-gradient(180deg, #1A1A1A 0%, #2A2A2A 100%)",
          color: "#fff",
          padding: "1rem 1.1rem",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.5rem",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 600,
          }}
        >
          <span>HALOCENE COFFEE · SERIES A</span>
          <span>04 / 16</span>
        </div>

        <div
          style={{
            marginTop: "0.65rem",
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.95rem",
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Subscriber growth is{" "}
          <em style={{ fontStyle: "italic", color: "#D4714E" }}>
            compounding 14% MoM.
          </em>
        </div>

        {/* Bar chart */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "flex-end",
            gap: "0.35rem",
            height: "55%",
          }}
        >
          {[18, 24, 30, 39, 51, 64, 81, 97].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: "3px 3px 0 0",
                background:
                  i === 7
                    ? "#D4714E"
                    : "rgba(212,113,78,0.35)",
              }}
            />
          ))}
        </div>
        <div
          style={{
            marginTop: "0.4rem",
            fontSize: "0.5rem",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          MAR ─ APR ─ MAY ─ JUN ─ JUL ─ AUG ─ SEP ─ OCT
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Outreach flow (n8n-style)
// ─────────────────────────────────────────────────────────────────────────────

function OutreachFlow() {
  const nodes: { x: number; y: number; label: string; sub?: string; accent?: boolean }[] = [
    { x: 8, y: 30, label: "Apollo", sub: "Search" },
    { x: 38, y: 14, label: "EDGAR", sub: "Filings" },
    { x: 38, y: 50, label: "Claude", sub: "Brief", accent: true },
    { x: 70, y: 30, label: "Send", sub: "GHL" },
  ];
  const links: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ];

  return (
    <Frame aspect="4 / 3" background="#FAFAF7">
      <BrowserChrome url="n8n.dawson.tools/workflow/investor-outreach" />
      <div
        style={{
          height: "calc(100% - 28px)",
          position: "relative",
          background:
            "radial-gradient(circle at 30% 30%, #fff, #F0EDE6 70%)",
        }}
      >
        <svg
          viewBox="0 0 100 60"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          {links.map(([a, b], i) => {
            const A = nodes[a];
            const B = nodes[b];
            const cx = (A.x + B.x) / 2;
            return (
              <path
                key={i}
                d={`M ${A.x + 8} ${A.y + 4} Q ${cx} ${(A.y + B.y) / 2 + 4} ${B.x} ${B.y + 4}`}
                fill="none"
                stroke="rgba(212,113,78,0.6)"
                strokeWidth="0.4"
              />
            );
          })}
        </svg>

        {nodes.map((n, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${n.x}%`,
              top: `${n.y}%`,
              padding: "0.3rem 0.55rem",
              borderRadius: 6,
              background: n.accent ? "#1A1A1A" : "#fff",
              color: n.accent ? "#fff" : "#1A1A1A",
              border: `1px solid ${n.accent ? "#1A1A1A" : "rgba(26,26,26,0.12)"}`,
              boxShadow: "0 4px 10px -4px rgba(26,26,26,0.18)",
              fontSize: "0.55rem",
              fontWeight: 600,
              minWidth: 50,
              textAlign: "center",
            }}
          >
            <div>{n.label}</div>
            {n.sub ? (
              <div
                style={{
                  fontSize: "0.45rem",
                  fontWeight: 500,
                  color: n.accent ? "rgba(255,255,255,0.6)" : "rgba(26,26,26,0.5)",
                  marginTop: 1,
                }}
              >
                {n.sub}
              </div>
            ) : null}
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: 12,
            right: 12,
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.5rem",
            color: "rgba(26,26,26,0.45)",
          }}
        >
          <span>Trigger: New Apollo match</span>
          <span style={{ color: "#D4714E", fontWeight: 600 }}>● Active</span>
        </div>
      </div>
    </Frame>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Visual pack (image grid)
// ─────────────────────────────────────────────────────────────────────────────

function VisualPack() {
  // Simulated investor-grade imagery via gradient panels with subtle "scene" hints.
  const scenes: { bg: string; label: string }[] = [
    { bg: "linear-gradient(135deg, #C7A87E, #6B4F30)", label: "Hero" },
    { bg: "linear-gradient(160deg, #2A3A4F, #6B7E94)", label: "Skyline" },
    { bg: "linear-gradient(135deg, #D4714E, #8E3F23)", label: "Founder" },
    { bg: "linear-gradient(180deg, #F0EDE6, #C7BFAE)", label: "Product" },
    { bg: "linear-gradient(135deg, #4A5240, #232A1E)", label: "Asset" },
    { bg: "linear-gradient(135deg, #5A3525, #2A1810)", label: "Lifestyle" },
  ];
  return (
    <Frame aspect="4 / 3">
      <div
        style={{
          height: "100%",
          padding: "0.55rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "0.4rem",
          background: "#fff",
        }}
      >
        {scenes.map((s, i) => (
          <div
            key={i}
            style={{
              background: s.bg,
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: 4,
                left: 5,
                fontSize: "0.45rem",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}
