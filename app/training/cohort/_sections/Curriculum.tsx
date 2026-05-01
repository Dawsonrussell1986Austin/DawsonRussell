import { MODULES } from "@/lib/constants";

export function Curriculum() {
  return (
    <section id="curriculum" className="services">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="section-label">Curriculum</div>
            <h2 className="section-heading">
              Six weeks.<br />Six modules.
            </h2>
          </div>
          <p className="section-subtext">
            Each week is a 1-hour live session. You build one asset live with
            me, then take the prompts, workflows, and templates home.
          </p>
        </div>
        <div className="services-grid">
          {MODULES.map((m) => (
            <div key={m.week} className="service-card">
              <div className="service-icon">
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 600 }}>
                  {String(m.week).padStart(2, "0")}
                </span>
              </div>
              <h3>{m.name}</h3>
              <p>{m.build}</p>
              <span className="service-tag">Week {m.week} deliverable</span>
              <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "#4A4A4A" }}>
                {m.deliverable}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
