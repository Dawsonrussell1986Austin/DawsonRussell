import type { Metadata } from "next";
import { TrainingBonusForm } from "@/components/TrainingBonusForm";
import { TRAINING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "You're in — Training confirmed",
  description:
    "Your seat is reserved. While you wait, tell Dawson one thing you want covered, or drop your raise link to be the live build example.",
  robots: { index: false, follow: false },
};

type SearchParams = { [key: string]: string | string[] | undefined };

function s(v: string | string[] | undefined): string {
  if (!v) return "";
  return Array.isArray(v) ? v[0] : v;
}

export default function ConfirmedPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const firstName = s(searchParams.n).slice(0, 60);
  const email = s(searchParams.e).slice(0, 120);
  const greeting = firstName ? `You're in, ${firstName}.` : "You're in.";

  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={{ minHeight: "auto", padding: "5rem 2rem 3rem" }}
      >
        <div
          className="hero-badge"
          style={{ marginBottom: "1.75rem" }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#00D26A",
              display: "inline-block",
              marginRight: 8,
              boxShadow: "0 0 0 0 rgba(0,210,106,0.4)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          Seat reserved · {TRAINING.dateLabel}
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#0A0A0A",
            marginBottom: "1.25rem",
            textAlign: "center",
          }}
        >
          {greeting.split(", ").map((part, i, arr) =>
            i === arr.length - 1 ? (
              <em
                key={i}
                style={{
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "underline",
                  textDecorationColor: "#00D26A",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "0.18em",
                  textDecorationSkipInk: "none",
                }}
              >
                {part}
              </em>
            ) : (
              <span key={i}>{part}, </span>
            ),
          )}
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.55,
            color: "#4A4A4A",
            maxWidth: 560,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          Calendar invite + Zoom link are on their way to your inbox. The
          training is {TRAINING.dateLabel} at {TRAINING.timeLabel}.
        </p>
      </section>

      {/* BONUS OFFER */}
      <section
        style={{
          background: "#0A0A0A",
          color: "#fff",
          padding: "5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00D26A",
              fontWeight: 600,
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            ● One more thing
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "1.25rem",
              textAlign: "center",
            }}
          >
            I&apos;m about to text you.{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "underline",
                textDecorationColor: "#00D26A",
                textDecorationThickness: "3px",
                textUnderlineOffset: "0.18em",
                textDecorationSkipInk: "none",
              }}
            >
              Want me to use your raise as the live example?
            </em>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 600,
              margin: "0 auto 2rem",
              textAlign: "center",
            }}
          >
            Friday hits harder when I&apos;m building against a real raise.
            Tell me one thing you want me to cover —{" "}
            <span style={{ color: "#fff", fontWeight: 600 }}>
              or drop your website / pitch deck link
            </span>{" "}
            and you&apos;re in the running for the live build slot. One
            issuer per session. If it&apos;s you, you keep every asset I
            create on screen — for free, after the training.
          </p>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <TrainingBonusForm email={email} firstName={firstName} />
          </div>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.4)",
              textAlign: "center",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.04em",
            }}
          >
            Replies go straight to my phone. I read every one.
          </p>
        </div>
      </section>
    </>
  );
}
