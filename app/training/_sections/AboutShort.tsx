import { ABOUT_SHORT } from "@/lib/constants";

export function AboutShort() {
  return (
    <section className="one-person">
      <div className="container">
        <div className="one-person-layout">
          <div className="one-person-content">
            <div className="section-label">About Dawson</div>
            <h2 className="section-heading">
              The person<br />teaching this
            </h2>
            <p className="body-text">{ABOUT_SHORT}</p>
            <div className="advantage-pills">
              <span className="advantage-pill">
                <span className="pill-icon">◆</span> Built marketing for 200+ raises
              </span>
              <span className="advantage-pill">
                <span className="pill-icon">◆</span> Reg D, Reg A, Reg CF
              </span>
              <span className="advantage-pill">
                <span className="pill-icon">◆</span> Working software, not theory
              </span>
            </div>
          </div>
          <div>
            <div
              style={{
                aspectRatio: "1 / 1",
                width: "100%",
                maxWidth: 380,
                marginLeft: "auto",
                borderRadius: "1rem",
                background: "rgba(26,26,26,0.05)",
                border: "1px solid rgba(26,26,26,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#A09A93",
                fontSize: "0.9rem",
              }}
            >
              Headshot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
