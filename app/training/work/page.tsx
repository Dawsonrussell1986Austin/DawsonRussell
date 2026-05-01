import type { Metadata } from "next";
import Link from "next/link";
import {
  WORK_ITEMS,
  WORK_ITEMS_DISCLAIMER,
  WORK_CATEGORIES,
  COHORT,
  type WorkItem,
} from "@/lib/constants";
import { AssetMockup, type AssetType } from "@/components/AssetMockup";

const TYPE_TO_MOCKUP: Record<WorkItem["type"], AssetType> = {
  "Landing Page": "landing-page",
  "Pitch Deck": "deck-slide",
  "Ad Campaign": "ad-variations",
  "Email Sequence": "email",
  "Outreach System": "outreach-flow",
  "Visual Pack": "visual-pack",
};

export const metadata: Metadata = {
  title: "What's Been Built — Recent Member Work",
  description:
    "Real assets shipped by members during 5-day AI sprints — pitch decks, landing pages, ad campaigns, email sequences, outreach automation, and visual asset packs.",
};

export default function WorkPage() {
  const hasItems = WORK_ITEMS.length > 0;
  return (
    <>
      <section className="hero" style={{ paddingBottom: "2.5rem" }}>
        <div className="hero-badge">Recent Member Work</div>
        <h1>
          What&apos;s been<br />
          <em>built.</em>
        </h1>
        <p className="hero-sub">
          Real assets shipped by members during 5-day AI sprints. Decks,
          landing pages, ad campaigns, outreach systems — all built in 90
          minutes a day.
        </p>
      </section>

      <section className="services" style={{ paddingTop: "1rem" }}>
        <div className="container">
          {hasItems ? (
            <>
              <div className="services-header">
                <div>
                  <div className="section-label">The gallery</div>
                  <h2 className="section-heading">Member-built, session-shipped.</h2>
                </div>
                <p className="section-subtext">
                  What members shipped during their 5-day sessions. Real
                  founders, real raises, real assets in market.
                </p>
              </div>
              {WORK_ITEMS_DISCLAIMER ? (
                <p
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    color: "#A09A93",
                    letterSpacing: "0.02em",
                  }}
                >
                  {WORK_ITEMS_DISCLAIMER}
                </p>
              ) : null}
              <div
                style={{
                  marginTop: "2.5rem",
                  display: "grid",
                  gap: "1.75rem",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
                }}
              >
                {WORK_ITEMS.map((item) => (
                  <WorkCard key={item.id} item={item} />
                ))}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      <section className="cta">
        <div className="cta-layout" style={{ gridTemplateColumns: "1fr", textAlign: "center" }}>
          <div className="cta-copy">
            <div
              className="section-label"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {COHORT.startDayShortLabel} Session — {COHORT.startDateLabel}
            </div>
            <h2 className="section-heading">
              Want your work<br />
              <em className="serif" style={{ fontStyle: "italic" }}>
                on this page?
              </em>
            </h2>
            <p
              className="cta-description"
              style={{ margin: "1.5rem auto 2rem", maxWidth: 540 }}
            >
              {COHORT.scarcityLine}
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link href="/training/cohort" className="btn-light">
                Join the {COHORT.startDayShortLabel} Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function EmptyState() {
  return (
    <>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto 3rem",
          textAlign: "center",
        }}
      >
        <div className="section-label">Coming after Demo Day</div>
        <h2
          className="section-heading"
          style={{ marginBottom: "1.5rem" }}
        >
          The first session ships <em className="serif" style={{ fontStyle: "italic" }}>May 15, 2026.</em>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.6,
            color: "#4A4A4A",
            margin: "0 auto",
            maxWidth: 600,
          }}
        >
          When the {COHORT.startDayShortLabel} session wraps, this page fills
          with what 10 founders shipped in five days. Until then, here&apos;s
          the kind of work that gets built.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gap: "1.75rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
        }}
      >
        {WORK_CATEGORIES.map((cat) => (
          <CategoryCard key={cat.type} type={cat.type} blurb={cat.blurb} />
        ))}
      </div>
    </>
  );
}

function CategoryCard({
  type,
  blurb,
}: {
  type: WorkItem["type"];
  blurb: string;
}) {
  return (
    <article
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
    >
      <AssetMockup type={TYPE_TO_MOCKUP[type]} />
      <div>
        <span className="service-tag" style={{ marginBottom: "0.5rem", display: "inline-flex" }}>
          {type}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.35rem",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            margin: "0.4rem 0 0.5rem",
            color: "#1A1A1A",
          }}
        >
          {type}
        </h3>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.55, color: "#4A4A4A" }}>
          {blurb}
        </p>
      </div>
    </article>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const Wrapper = item.url ? "a" : "div";
  const wrapperProps = item.url
    ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      style={{
        textDecoration: "none",
        color: "inherit",
        cursor: item.url ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <AssetMockup type={TYPE_TO_MOCKUP[item.type]} />
      <div>
        <span className="service-tag" style={{ marginBottom: "0.5rem", display: "inline-flex" }}>
          {item.type}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            margin: "0.4rem 0 0.5rem",
            color: "#1A1A1A",
          }}
        >
          {item.title}
        </h3>
        <p style={{ fontSize: "0.92rem", lineHeight: 1.55, color: "#4A4A4A" }}>
          {item.blurb}
        </p>
        <div
          style={{
            marginTop: "1.25rem",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(26,26,26,0.08)",
            fontSize: "0.85rem",
            color: "#6B6B6B",
          }}
        >
          <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>{item.member}</strong>
          {" · "}
          {item.raise}
          <br />
          {item.sessionLabel}
        </div>
      </div>
    </Wrapper>
  );
}

