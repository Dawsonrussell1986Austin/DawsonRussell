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
                aspectRatio: "3 / 4",
                width: "100%",
                maxWidth: 380,
                marginLeft: "auto",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(10,10,10,0.08)",
                boxShadow:
                  "0 30px 60px -25px rgba(10,10,10,0.25), 0 0 0 1px rgba(10,10,10,0.04)",
                background: "#0A0A0A",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dawson.png"
                alt="Dawson Russell"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
