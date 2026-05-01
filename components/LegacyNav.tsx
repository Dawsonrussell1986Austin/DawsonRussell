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
      <Link href="/" className="nav-logo">
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#1A1A1A",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.7rem",
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          DR
        </span>
        Dawson Russell
      </Link>
      <div className={`nav-links${open ? " open" : ""}`} id="navLinks">
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/training" onClick={() => setOpen(false)}>Free Training</Link>
        <Link href="/training/cohort" onClick={() => setOpen(false)} className="nav-cta">
          Join the May 11th – 15th Session
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
