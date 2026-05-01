import { VALUE_PROPS } from "@/lib/constants";

const ICONS = [
  // workflow
  <svg key="w" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  // prompts / book
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>,
  // live build / monitor
  <svg key="m" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
];

const TAGS = ["Workflow", "Prompts", "Live build"];

export function ValueProps() {
  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="section-label">What you&apos;ll walk away with</div>
            <h2 className="section-heading">
              One hour.<br />Real assets.
            </h2>
          </div>
          <p className="section-subtext">
            No theory. No tool reviews. The exact AI workflow I use to ship investor
            assets — taught at the speed of one live build.
          </p>
        </div>
        <div className="services-grid">
          {VALUE_PROPS.map((vp, i) => (
            <div key={vp.title} className="service-card">
              <div className="service-icon">{ICONS[i]}</div>
              <h3>{vp.title}</h3>
              <p>{vp.body}</p>
              <span className="service-tag">{TAGS[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
