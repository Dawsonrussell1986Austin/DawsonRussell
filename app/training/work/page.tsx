import type { Metadata } from "next";
import Link from "next/link";
import {
  WORK_ITEMS,
  WORK_CATEGORIES,
  COHORT,
  type WorkItem,
} from "@/lib/constants";

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
                  Click any card to see what each member built during their
                  session. Real founders, real raises, real assets in market.
                </p>
              </div>
              <div className="services-grid">
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
      <div className="services-grid">
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
    <div className="service-card" style={{ position: "relative" }}>
      <div className="service-icon">
        <CategoryIcon type={type} />
      </div>
      <h3>{type}</h3>
      <p>{blurb}</p>
      <span className="service-tag">Sample after May 15</span>
    </div>
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
      className="service-card"
      style={{ textDecoration: "none", color: "inherit", cursor: item.url ? "pointer" : "default" }}
    >
      {item.imageUrl ? (
        <div
          style={{
            width: "calc(100% + 3rem)",
            margin: "-2rem -1.5rem 1.5rem",
            aspectRatio: "16 / 9",
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        />
      ) : (
        <div className="service-icon">
          <CategoryIcon type={item.type} />
        </div>
      )}
      <span className="service-tag">{item.type}</span>
      <h3 style={{ marginTop: "0.5rem" }}>{item.title}</h3>
      <p>{item.blurb}</p>
      <div
        style={{
          marginTop: "1.25rem",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(26,26,26,0.06)",
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
    </Wrapper>
  );
}

function CategoryIcon({ type }: { type: WorkItem["type"] }) {
  const common = {
    width: 22,
    height: 22,
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "Landing Page":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M7 13h6M7 16h10" />
        </svg>
      );
    case "Pitch Deck":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="3" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "Ad Campaign":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 11l18-7v16l-18-7z" />
          <path d="M11 11v8" />
        </svg>
      );
    case "Email Sequence":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "Outreach System":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="M6 8.5l5 7M18 8.5l-5 7M6 6h12" />
        </svg>
      );
    case "Visual Pack":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="M21 17l-5-5-9 9" />
        </svg>
      );
  }
}
