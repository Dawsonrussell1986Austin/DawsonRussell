import { WHO_FOR, WHO_NOT_FOR } from "@/lib/constants";

export function WhoFor() {
  return (
    <section className="paths">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div className="section-label">Fit check</div>
          <h2 className="section-heading">Who this is for</h2>
        </div>
        <div className="paths-grid">
          <div className="path-card">
            <div className="path-label">You&apos;re a fit if…</div>
            <h3>Right for you</h3>
            <ul className="path-features">
              {WHO_FOR.map((line) => (
                <li key={line}>
                  <span className="check">
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 5.5l2 2 4-4.5" />
                    </svg>
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="path-card">
            <div className="path-label">Skip this if…</div>
            <h3>Not for you</h3>
            <ul className="path-features">
              {WHO_NOT_FOR.map((line) => (
                <li key={line}>
                  <span className="check" style={{ background: "rgba(26,26,26,0.05)", color: "#A09A93" }}>
                    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3l4 4M7 3l-4 4" />
                    </svg>
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
