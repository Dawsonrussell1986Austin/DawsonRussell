import { INCLUDED } from "@/lib/constants";

export function Included() {
  return (
    <section className="results">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <div className="section-label">What&apos;s included</div>
          <h2 className="section-heading">Everything you need to run the system</h2>
        </div>
        <div
          className="path-card"
          style={{
            maxWidth: 720,
            margin: "3rem auto 0",
            padding: "2.25rem 2rem",
          }}
        >
          <ul className="path-features" style={{ marginBottom: 0 }}>
            {INCLUDED.map((item) => (
              <li key={item}>
                <span className="check">
                  <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 5.5l2 2 4-4.5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
