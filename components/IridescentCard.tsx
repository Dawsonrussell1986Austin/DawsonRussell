"use client";

// Iridescent VIP credential card. Ported from a Claude Design HTML/CSS/JS
// prototype — see /private design package for the original. All class names
// are prefixed `iri-` to avoid collisions with legacy.css.

import { useState, useRef, useEffect, useCallback } from "react";

const T = {
  tiltStrength: 18,
  perspective: 1400,
  scaleOnHover: 1.04,
  iridescenceIntensity: 85,
  iridescenceSaturation: 70,
  iridescenceHueShift: 0,
  iridescenceSpread: 55,
  specularIntensity: 80,
  specularSize: 45,
  specularSharpness: 60,
  noiseAmount: 18,
  noiseScale: 1.2,
  glowIntensity: 70,
  glowSize: 60,
  cardDarkness: 8,
  cardContrast: 60,
  edgeShine: 50,
  engraveDepth: 55,
  showHologram: true,
  showSerial: true,
  showBarcode: true,
  cornerRadius: 22,
  transitionSpeed: 200,
};

const clamp = (v: number, a: number, b: number) =>
  Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function IridescentCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const target = useRef({ x: 0.5, y: 0.5, active: 0 });
  const current = useRef({ x: 0.5, y: 0.5, active: 0 });
  const rafId = useRef<number | null>(null);

  const apply = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    const { x, y, active: a } = current.current;

    const tx = (x - 0.5) * 2;
    const ty = (y - 0.5) * 2;

    const rotY = tx * T.tiltStrength;
    const rotX = -ty * T.tiltStrength;
    const scale = lerp(1, T.scaleOnHover, a);

    card.style.transform =
      `translateZ(0) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;

    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
    card.style.setProperty("--tx", tx.toFixed(3));
    card.style.setProperty("--ty", ty.toFixed(3));
    card.style.setProperty("--active", a.toFixed(3));
    card.style.setProperty(
      "--hue-shift",
      (T.iridescenceHueShift + tx * 60).toFixed(2),
    );
  }, []);

  useEffect(() => {
    const ease = 0.12;
    const loop = () => {
      const cur = current.current;
      const tgt = target.current;
      cur.x += (tgt.x - cur.x) * ease;
      cur.y += (tgt.y - cur.y) * ease;
      cur.active += (tgt.active - cur.active) * ease;
      apply();
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [apply]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    target.current.x = clamp((e.clientX - r.left) / r.width, 0, 1);
    target.current.y = clamp((e.clientY - r.top) / r.height, 0, 1);
  };
  const onEnter = () => {
    target.current.active = 1;
    setActive(true);
  };
  const onLeave = () => {
    target.current.active = 0;
    target.current.x = 0.5;
    target.current.y = 0.5;
    setActive(false);
  };

  const cardBg = `oklch(${0.05 + (T.cardDarkness / 100) * 0.15} 0.005 270)`;
  const cardBg2 = `oklch(${0.10 + (T.cardDarkness / 100) * 0.20} 0.008 280)`;

  const style: React.CSSProperties = {
    // @ts-expect-error CSS custom properties
    "--card-w": "380px",
    "--card-h": "600px",
    "--radius": `${T.cornerRadius}px`,
    "--perspective": `${T.perspective}px`,
    "--bg-1": cardBg,
    "--bg-2": cardBg2,
    "--ink": "#efe9dc",
    "--ink-dim": "rgba(239,233,220,.55)",
    "--ink-faint": "rgba(239,233,220,.22)",
    "--iri-intensity": T.iridescenceIntensity / 100,
    "--iri-sat": T.iridescenceSaturation / 100,
    "--iri-spread": `${T.iridescenceSpread}%`,
    "--spec-intensity": T.specularIntensity / 100,
    "--spec-size": `${30 + T.specularSize * 2}%`,
    "--spec-sharp": `${0.05 + (T.specularSharpness / 100) * 0.5}`,
    "--noise-amount": T.noiseAmount / 100,
    "--noise-scale": T.noiseScale,
    "--glow-intensity": T.glowIntensity / 100,
    "--glow-size": `${100 + T.glowSize * 4}px`,
    "--contrast": 0.5 + T.cardContrast / 100,
    "--edge-shine": T.edgeShine / 100,
    "--engrave": T.engraveDepth / 100,
    "--transition-ms": `${T.transitionSpeed}ms`,
  };

  return (
    <div
      className="iri-card-wrap"
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={style}
    >
      <div className="iri-card-glow" data-active={active ? "1" : "0"} />

      <div
        className="iri-card"
        ref={cardRef}
        data-active={active ? "1" : "0"}
      >
        <div className="iri-layer iri-base" />
        <div className="iri-layer iri-iridescent" />
        {T.showHologram && <div className="iri-layer iri-hologram" />}
        <div className="iri-layer iri-specular" />
        <div className="iri-layer iri-edge-shine" />
        <div className="iri-layer iri-grain" />
        <div className="iri-layer iri-vignette" />

        <div className="iri-content">
          <Header />
          <Title />
          <Schedule />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="iri-hdr">
      <div className="iri-mark">
        <span
          aria-hidden
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "-0.04em",
            color: "var(--ink)",
            lineHeight: 1,
          }}
        >
          dr<span style={{ color: "#FF5C1F" }}>.</span>
        </span>
        <span>DAWSON RUSSELL</span>
      </div>
      <div className="iri-meta">
        <span>CREDENTIAL</span>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="iri-title">
      <div className="iri-eyebrow">5-DAY SPRINT · MAY 11 – 15</div>
      <h2>
        Capital&nbsp;Raise<br />
        <em>Marketing&nbsp;AI</em>
      </h2>
      <div className="iri-lede">
        Five days. One playbook. Investor-ready narrative,
        <br />
        funnel & deck — engineered with AI.
      </div>
    </div>
  );
}

function Schedule() {
  const days: [string, string][] = [
    ["01", "Foundation"],
    ["02", "Deck"],
    ["03", "Ads"],
    ["04", "Outreach"],
    ["05", "Launch"],
  ];
  return (
    <div className="iri-sched">
      {days.map(([n, l]) => (
        <div className="iri-day" key={n}>
          <span className="iri-d-n">{n}</span>
          <span className="iri-d-l">{l}</span>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div className="iri-ftr">
      <div className="iri-ftr-left">
        <div className="iri-k">HOLDER</div>
        <div className="iri-v">FOUNDER · ALL ACCESS</div>
        {T.showSerial && (
          <div className="iri-serial">№ 0001·24A·MMXXVI</div>
        )}
      </div>
      <div className="iri-ftr-right">
        {T.showBarcode && (
          <div className="iri-barcode" aria-hidden="true">
            {Array.from({ length: 28 }, (_, i) => (
              <span
                key={i}
                style={{
                  width: `${1 + ((i * 7919) % 4)}px`,
                  opacity: 0.5 + ((i * 31) % 5) / 10,
                }}
              />
            ))}
          </div>
        )}
        <div className="iri-k">VALID</div>
        <div className="iri-v">MAY · MMXXVI</div>
      </div>
    </div>
  );
}
