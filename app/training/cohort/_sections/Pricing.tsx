import { COHORT } from "@/lib/constants";
import { CheckoutButton } from "@/components/CheckoutButton";

export function Pricing() {
  const ctaLabel = `Join the ${COHORT.sessionShortLabel} session — ${COHORT.priceLabel}`;
  return (
    <section className="paths">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div className="section-label">Founding session pricing</div>
          <h2 className="section-heading">Founding member rate</h2>
        </div>
        <div
          className="path-card featured"
          style={{ maxWidth: 560, margin: "3rem auto 0", textAlign: "center" }}
        >
          <div className="path-label" style={{ color: "#D4714E" }}>
            {COHORT.sessionLabel} session
          </div>
          <h3 style={{ marginBottom: "1.5rem" }}>The 5-Day Sprint</h3>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "1rem",
              margin: "1rem 0 0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "1.5rem",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "line-through",
              }}
            >
              {COHORT.anchorPriceLabel}
            </span>
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "3.75rem",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {COHORT.priceLabel}
            </span>
          </div>
          <div className="path-price-note" style={{ marginBottom: "2rem" }}>
            Founding member rate. Future sessions will be priced higher.
          </div>
          <CheckoutButton label={ctaLabel} className="btn-light" />
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
