import { MODULES, type Module } from "@/lib/constants";

export function Curriculum() {
  return (
    <section id="curriculum" className="services">
      <div className="container">
        <div className="services-header">
          <div>
            <div className="section-label">Curriculum</div>
            <h2 className="section-heading">
              Five days.<br />Monday to Friday.
            </h2>
          </div>
          <p className="section-subtext">
            Live mornings on Zoom (with one Friday afternoon Demo Day), build
            time in the afternoons, recordings posted same day. By Friday at
            4pm CT you&apos;ll have shipped a complete AI-powered raise
            marketing system.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            marginTop: "3rem",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(420px, 100%), 1fr))",
          }}
        >
          {MODULES.map((m) => (
            <DayCard key={m.day} module={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DayCard({ module: m }: { module: Module }) {
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid rgba(26,26,26,0.08)",
        borderRadius: "1rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid rgba(26,26,26,0.06)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#D4714E",
              fontWeight: 600,
              marginBottom: "0.4rem",
            }}
          >
            {m.dayLabel}
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#1A1A1A",
              lineHeight: 1.15,
            }}
          >
            {m.name}
          </h3>
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "rgba(26,26,26,0.15)",
          }}
        >
          {String(m.day).padStart(2, "0")}
        </div>
      </header>

      <div>
        <SubLabel>{m.liveTime}</SubLabel>
        <ul style={listStyle}>
          {m.agenda.map((item) => (
            <li key={item} style={listItemStyle}>
              <Bullet />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SubLabel>Async build time</SubLabel>
        <ul style={listStyle}>
          {m.async.map((item) => (
            <li key={item} style={listItemStyle}>
              <Bullet muted />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(26,26,26,0.06)",
        }}
      >
        <SubLabel accent>Ship by EOD</SubLabel>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#1A1A1A",
            fontWeight: 500,
            lineHeight: 1.45,
          }}
        >
          {m.deliverable}
        </p>
        {m.note ? (
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.8rem",
              color: "#6B6B6B",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            {m.note}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function SubLabel({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        fontSize: "0.7rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: accent ? "#D4714E" : "#6B6B6B",
        fontWeight: 600,
        marginBottom: "0.6rem",
      }}
    >
      {children}
    </div>
  );
}

function Bullet({ muted = false }: { muted?: boolean }) {
  return (
    <span
      aria-hidden
      style={{
        marginTop: 7,
        width: 5,
        height: 5,
        borderRadius: 999,
        background: muted ? "rgba(26,26,26,0.25)" : "#D4714E",
        flexShrink: 0,
      }}
    />
  );
}

const listStyle: React.CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.55rem",
};

const listItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "0.75rem",
  fontSize: "0.92rem",
  color: "#4A4A4A",
  lineHeight: 1.5,
};
