import { COHORT } from "@/lib/constants";
import { CheckoutButton } from "@/components/CheckoutButton";

export function Pricing() {
  const ctaLabel = `Reserve my seat — ${COHORT.depositLabel} deposit`;
  return (
    <section className="paths">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div className="section-label">How payment works</div>
          <h2 className="section-heading">Pay once it&apos;s delivered.</h2>
        </div>
        <div
          className="path-card featured"
          style={{ maxWidth: 620, margin: "3rem auto 0", textAlign: "center" }}
        >
          <div className="path-label" style={{ color: "#00D26A" }}>
            {COHORT.sessionLabel} · 10 seats only
          </div>
          <h3 style={{ marginBottom: "1rem" }}>The 5-Day Sprint</h3>

          {/* Deposit headline */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              gap: "0.75rem",
              margin: "1.25rem 0 0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "4rem",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1,
              }}
            >
              {COHORT.depositLabel}
            </span>
            <span
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.6)",
                fontWeight: 500,
              }}
            >
              deposit
            </span>
          </div>
          <div
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "1.5rem",
            }}
          >
            Reserves your seat now.
          </div>

          {/* Two-row breakdown */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "0.6rem",
              padding: "1.25rem 1.5rem",
              borderRadius: "0.85rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              textAlign: "left",
              marginBottom: "1.5rem",
            }}
          >
            <Row
              label={`${COHORT.depositLabel} due to reserve your seat`}
              detail="Non-refundable. Holds 1 of 10 seats."
              accent
            />
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />
            <Row
              label={`${COHORT.remainderLabel} due Day 5 (May 15)`}
              detail="Charged after Demo Day. Refundable if you completed the work and it didn't deliver."
            />
          </div>

          <CheckoutButton label={ctaLabel} className="btn-light" />

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: 460,
              margin: "1.5rem auto 0",
              lineHeight: 1.55,
            }}
          >
            {COHORT.completionRequirement}
          </p>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  detail,
  accent = false,
  muted = false,
}: {
  label: string;
  detail: string;
  accent?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="pricing-row">
      <span
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: accent ? "#00D26A" : muted ? "rgba(255,255,255,0.55)" : "#fff",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "0.85rem",
          color: muted ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.7)",
          lineHeight: 1.45,
        }}
      >
        {detail}
      </span>
    </div>
  );
}
