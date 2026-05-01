import { COHORT } from "@/lib/constants";
import { CheckoutButton } from "@/components/CheckoutButton";

export function CohortHero() {
  const ctaLabel = `Join ${COHORT.number} — ${COHORT.priceLabel}`;
  return (
    <section className="hero">
      <div className="hero-badge">
        {COHORT.number} — Starts {COHORT.startDateLabel}
      </div>
      <h1>
        The 6-Week AI System for <br />
        <em>Capital Raise Marketing</em>
      </h1>
      <p className="hero-sub">
        Six weeks. The exact prompts, workflows, and templates I use to build
        decks, ads, and investor copy for live raises — in your hands.
      </p>
      <div className="hero-actions">
        <CheckoutButton label={ctaLabel} className="btn-primary" />
        <a href="#curriculum" className="btn-secondary">See the curriculum</a>
      </div>
      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "0.85rem",
          color: "#A09A93",
        }}
      >
        {COHORT.scarcityLine}
      </p>
    </section>
  );
}
