import { TRAINING_FAQ } from "@/lib/constants";

export function TrainingFAQ() {
  return (
    <section className="faq">
      <div className="container">
        <div className="section-label">Frequently Asked</div>
        <h2 className="section-heading">Common questions</h2>
        <div className="faq-grid">
          {TRAINING_FAQ.map(({ q, a }) => (
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
