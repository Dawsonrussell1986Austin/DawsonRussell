"use client";

import { useEffect, useState } from "react";
import { TRAINING } from "@/lib/constants";

const ACCENT = "#00D26A";

type T = { d: number; h: number; m: number; s: number; live: boolean };

function diff(targetMs: number): T {
  const ms = targetMs - Date.now();
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0, live: true };
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms / 3_600_000) % 24),
    m: Math.floor((ms / 60_000) % 60),
    s: Math.floor((ms / 1000) % 60),
    live: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function HeroCountdown() {
  const target = new Date(TRAINING.dateISO).getTime();
  const [t, setT] = useState<T>(() => diff(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  // Server-renders empty; client mounts and reveals — avoids hydration drift.
  if (!mounted) {
    return <div aria-hidden style={{ minHeight: 92, marginBottom: "2rem" }} />;
  }

  if (t.live) {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.65rem",
          padding: "0.85rem 1.25rem",
          borderRadius: 12,
          background: "rgba(0,210,106,0.12)",
          border: `1px solid ${ACCENT}`,
          marginBottom: "2rem",
        }}
      >
        <span
          aria-hidden
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: ACCENT,
            animation: "pulse 1.4s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.78rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#0A0A0A",
          }}
        >
          We&apos;re live — join now
        </span>
      </div>
    );
  }

  const cells: { v: number; label: string }[] = [
    { v: t.d, label: "Days" },
    { v: t.h, label: "Hrs" },
    { v: t.m, label: "Min" },
    { v: t.s, label: "Sec" },
  ];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "stretch",
        gap: "0.4rem",
        marginBottom: "2rem",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0.35rem 0.85rem",
          borderRadius: 10,
          background: "rgba(0,210,106,0.08)",
          border: "1px solid rgba(0,210,106,0.25)",
          gap: 4,
        }}
      >
        <span
          aria-hidden
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: ACCENT,
              animation: "pulse 1.8s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#0A0A0A",
            }}
          >
            Live in
          </span>
        </span>
      </span>
      {cells.map((c, i) => (
        <span
          key={c.label}
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 64,
            padding: "0.5rem 0.6rem",
            borderRadius: 10,
            background: "#fff",
            border: "1px solid rgba(10,10,10,0.08)",
            boxShadow: "0 1px 2px rgba(10,10,10,0.04)",
          }}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#0A0A0A",
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1,
            }}
          >
            {i === 0 ? c.v : pad(c.v)}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "#6B6B6B",
              marginTop: 4,
            }}
          >
            {c.label}
          </span>
        </span>
      ))}
    </div>
  );
}
