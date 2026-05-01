import { ABOUT_LONG } from "@/lib/constants";

export function AboutLong() {
  return (
    <section className="one-person">
      <div className="container">
        <div className="one-person-content" style={{ maxWidth: 760 }}>
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
      </div>
    </section>
  );
}
