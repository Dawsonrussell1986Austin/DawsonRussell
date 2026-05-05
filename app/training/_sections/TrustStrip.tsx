"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { to: 20, suffix: "+", label: "Years experience" },
  { to: 200, suffix: "+", label: "Capital raise issuers" },
  { to: 2, prefix: "$", suffix: "B+", label: "AUM impacted" },
];

const ACCENT = "#00D26A";

export function TrustStrip() {
  return (
    <div
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        borderTop: "1px solid rgba(10,10,10,0.08)",
        borderBottom: "1px solid rgba(10,10,10,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          maxWidth: 960,
          margin: "0 auto",
          gap: 0,
          alignItems: "stretch",
        }}
      >
        {STATS.map((s, i) => (
          <StatCell key={s.label} stat={s} index={i} hasDivider={i > 0} />
        ))}
      </div>
    </div>
  );
}

function StatCell({
  stat,
  index,
  hasDivider,
}: {
  stat: Stat;
  index: number;
  hasDivider: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const delay = index * 120;
    const startTime = performance.now() + delay;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.max(0, now - startTime) / duration;
      if (t <= 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      // easeOutCubic
      const eased = t >= 1 ? 1 : 1 - Math.pow(1 - t, 3);
      setValue(stat.to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, stat.to, index]);

  const display = formatValue(value, stat);

  return (
    <div
      ref={ref}
      style={{
        padding: "1.5rem 1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        alignItems: "center",
        position: "relative",
        borderLeft: hasDivider ? "1px solid rgba(10,10,10,0.08)" : "none",
      }}
    >
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: "#0A0A0A",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          position: "relative",
          display: "inline-block",
        }}
      >
        {/* Width reservation — invisible "final" string sets the box size */}
        <span aria-hidden style={{ visibility: "hidden", whiteSpace: "nowrap" }}>
          {stat.prefix ?? ""}
          {stat.to}
          {stat.suffix ?? ""}
        </span>
        {/* Live, rendered value sits absolutely on top */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "inline-flex",
            alignItems: "baseline",
            justifyContent: "center",
            whiteSpace: "nowrap",
          }}
        >
          {stat.prefix ? (
            <span style={{ color: "#0A0A0A" }}>{stat.prefix}</span>
          ) : null}
          <span>{display}</span>
          {stat.suffix ? (
            <span style={{ color: ACCENT }}>{stat.suffix}</span>
          ) : null}
        </span>
      </span>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#6B6B6B",
          fontWeight: 600,
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}

function formatValue(v: number, stat: Stat): string {
  // Round during animation. Integer-only — works for 20, 200, and 2.
  return Math.round(v).toString();
}
