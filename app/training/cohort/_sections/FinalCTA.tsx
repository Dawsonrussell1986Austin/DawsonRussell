import { COHORT } from "@/lib/constants";
import { CheckoutButton } from "@/components/CheckoutButton";

export function FinalCTA() {
  const ctaLabel = `Join the ${COHORT.sessionShortLabel} session — ${COHORT.priceLabel}`;
  return (
    <section className="cta">
      <div className="cta-layout" style={{ gridTemplateColumns: "1fr", textAlign: "center" }}>
        <div className="cta-copy">
          <div className="section-label" style={{ color: "rgba(255,255,255,0.5)" }}>
            Starts {COHORT.startDateLabel}
          </div>
          <h2 className="section-heading">
            Five days from now,<br />
            <em className="serif" style={{ fontStyle: "italic" }}>
              your raise marketing looks different.
            </em>
          </h2>
          <p className="cta-description" style={{ margin: "1.5rem auto 2rem", maxWidth: 540 }}>
            {COHORT.scarcityLine}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CheckoutButton label={ctaLabel} className="btn-light" />
          </div>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {COHORT.refundLine}
          </p>
        </div>
      </div>
    </section>
  );
}
