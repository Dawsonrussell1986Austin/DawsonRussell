import { ABOUT_LONG } from "@/lib/constants";

export function AboutLong() {
  return (
    <section className="one-person">
      <div className="container">
        <div className="one-person-layout">
          <div className="one-person-content">
            <div className="section-label">About Dawson</div>
            <h2 className="section-heading">
              The person<br />
              <em className="serif" style={{ fontStyle: "italic" }}>teaching this</em>
            </h2>
            {ABOUT_LONG.split("\n\n").map((para, i) => (
              <p key={i} className="body-text">
                {para}
              </p>
            ))}
          </div>
          <div>
            <div
              style={{
                aspectRatio: "3 / 4",
                width: "100%",
                maxWidth: 420,
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
