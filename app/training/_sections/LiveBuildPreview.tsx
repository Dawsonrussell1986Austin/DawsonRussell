import { AssetMockup, type AssetType } from "@/components/AssetMockup";

const ITEMS: { type: AssetType; eyebrow: string; title: string; blurb: string }[] = [
  {
    type: "landing-page",
    eyebrow: "Minute 1–8",
    title: "Investor landing page",
    blurb:
      "Hero, stats, accredited form — copy, design, and code top to bottom. Live URL by minute 8.",
  },
  {
    type: "ad",
    eyebrow: "Minute 9–16",
    title: "Meta ad creative",
    blurb:
      "Headline, image, CTA — generated and rewritten on the fly. The same workflow you'd use for 30 variations.",
  },
  {
    type: "email",
    eyebrow: "Minute 17–25",
    title: "Investor email",
    blurb:
      "First email of an 8-step sequence — written from the framework, formatted, and ready to send.",
  },
];

export function LiveBuildPreview() {
  return (
    <section className="services" style={{ background: "transparent" }}>
      <div className="container">
        <div className="services-header">
          <div>
            <div className="section-label">Live, on screen</div>
            <h2 className="section-heading">
              Here&apos;s what gets built<br />
              <em className="serif" style={{ fontStyle: "italic" }}>
                in 25 minutes.
              </em>
            </h2>
          </div>
          <p className="section-subtext">
            Three real assets — landing page, ad creative, investor email —
            built start to finish on screen during the training. You watch
            every keystroke, every prompt, every paste.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            marginTop: "3rem",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          }}
        >
          {ITEMS.map((item) => (
            <article
              key={item.type}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <AssetMockup type={item.type} />
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#D4714E",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.eyebrow}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    marginBottom: "0.5rem",
                    color: "#1A1A1A",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.55,
                    color: "#4A4A4A",
                  }}
                >
                  {item.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
