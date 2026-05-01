import { AssetMockup, type AssetType } from "@/components/AssetMockup";

const ITEMS: { type: AssetType; eyebrow: string; title: string; blurb: string }[] = [
  {
    type: "landing-page",
    eyebrow: "Day 2 deliverable",
    title: "Investor landing page",
    blurb:
      "Hero, stats, accredited verification form — built and deployed inside the live session, on a real domain.",
  },
  {
    type: "deck-slide",
    eyebrow: "Day 2 deliverable",
    title: "Investor pitch deck",
    blurb:
      "16-slide deck rebuilt around a sharp narrative, on-brand AI visuals, and live-cohort metrics. Ready to send Tuesday afternoon.",
  },
  {
    type: "ad-variations",
    eyebrow: "Day 3 deliverable",
    title: "30-variation ad set",
    blurb:
      "Compliance-checked Meta ads at scale. The 4 winners surface fast — the other 26 give you a creative reservoir.",
  },
  {
    type: "email",
    eyebrow: "Day 1 deliverable",
    title: "8-email investor sequence",
    blurb:
      "Drafted from the 5-prompt copywriting framework. First email is editing-ready by Monday EOD.",
  },
  {
    type: "outreach-flow",
    eyebrow: "Day 4 deliverable",
    title: "n8n outreach automation",
    blurb:
      "Apollo + EDGAR feed Claude, Claude writes the brief, GHL sends the email. The whole thing runs while you sleep.",
  },
  {
    type: "visual-pack",
    eyebrow: "Day 1 deliverable",
    title: "Investor-grade visual pack",
    blurb:
      "50+ on-brand images: hero shots, deck visuals, ad creative, founder portraits. All Midjourney, all yours.",
  },
];

export function WhatMembersShip() {
  return (
    <section className="services" style={{ background: "transparent" }}>
      <div className="container">
        <div className="services-header">
          <div>
            <div className="section-label">What members ship</div>
            <h2 className="section-heading">
              Six finished assets,<br />
              <em className="serif" style={{ fontStyle: "italic" }}>
                in five days.
              </em>
            </h2>
          </div>
          <p className="section-subtext">
            Not deliverables in a folder — deployed pages, sent emails, running
            campaigns. Here&apos;s the kind of work that comes out of one
            session.
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
                    fontSize: "1.35rem",
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
                    fontSize: "0.92rem",
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
