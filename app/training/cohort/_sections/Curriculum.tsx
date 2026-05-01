import { MODULES } from "@/lib/constants";

export function Curriculum() {
  return (
    <section id="curriculum" className="services">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="section-label">Curriculum</div>
            <h2 className="section-heading">
              Seven days.<br />Seven builds.
            </h2>
          </div>
          <p className="section-subtext">
            One hour per day, business days only, live with me. You build one
            asset on screen each session, then take the prompts, workflows, and
            templates home as homework.
          </p>
        </div>
        <div className="services-grid">
          {MODULES.map((m) => (
            <div key={m.day} className="service-card">
              <div className="service-icon">
                <span style={{ fontFamily: "Playfair Display, serif", fontSize: "1.4rem", fontWeight: 600 }}>
                  {String(m.day).padStart(2, "0")}
                </span>
              </div>
              <h3>{m.name}</h3>
              <p>{m.build}</p>
              <span className="service-tag">Day {m.day} deliverable</span>
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
