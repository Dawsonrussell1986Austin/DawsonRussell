"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function LegacyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <Link href="/" className="nav-logo dr-wordmark">
        <span
          aria-hidden
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            background: "#0A0A0A",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            flexShrink: 0,
          }}
        >
          dr<span style={{ color: "#00D26A" }}>.</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "baseline" }}>
          Dawson Russell<span style={{ color: "#00D26A" }}>.</span>
        </span>
      </Link>
      <div className={`nav-links${open ? " open" : ""}`} id="navLinks">
        <Link href="/training" onClick={() => setOpen(false)}>Free Training</Link>
        <Link href="/training/cohort" onClick={() => setOpen(false)} className="nav-cta">
          Join the May 11th Session
        </Link>
      </div>
      <button
        className="mobile-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
