import { COHORT_FAQ } from "@/lib/constants";

export function CohortFAQ() {
  return (
    <section className="faq">
      <div className="container">
        <div className="section-label">Frequently Asked</div>
        <h2 className="section-heading">Common questions</h2>
        <div className="faq-grid">
          {COHORT_FAQ.map(({ q, a }) => (
            <div key={q} className="faq-item">
              <h4>{q}</h4>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
