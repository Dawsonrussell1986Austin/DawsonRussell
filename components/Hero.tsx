'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
      >
        <source src="/hero-reel.mp4" type="video/mp4" />
      </video>

      {/* Layered gradients for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="absolute inset-0 vignette pointer-events-none" />

      {/* HUD top-left telemetry */}
      <div className="absolute top-24 left-6 md:left-10 z-10 hidden md:block">
        <div className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse" />
            LIVE · AUSTIN, TX · 30.27°N 97.74°W
          </div>
          <div>STUDIO STATUS — ACCEPTING PROJECTS</div>
        </div>
      </div>

      {/* HUD top-right */}
      <div className="absolute top-24 right-6 md:right-10 z-10 hidden md:block text-right">
        <div className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase space-y-1.5">
          <div>UNIT 001 / DAWSON RUSSELL</div>
          <div>AI-NATIVE VIDEO PRODUCTION</div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 h-full flex flex-col justify-end pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow mb-8 flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-[var(--primary)]" />
            AI VIDEO AD AGENCY
          </div>
          <h1 className="display text-[clamp(3.5rem,11vw,11rem)] text-white">
            Ads at the
            <br />
            speed of <span className="text-[var(--primary)]">thought.</span>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            What used to take agencies eight weeks and two hundred grand —
            scripted, generated, edited, and delivered in days. For a tenth of
            the price.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="https://cal.com/dawsonrussell"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4"
            >
              Book a call →
            </a>
            <Link
              href="#work"
              className="btn-ghost inline-flex items-center gap-2 px-8 py-4"
            >
              View the work
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom corner spec ticks */}
      <div className="absolute bottom-6 left-6 md:left-10 right-6 md:right-10 z-10 flex justify-between items-end font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
        <div>↓ SCROLL TO ENGAGE</div>
        <div className="hidden md:block">v2026.05 · ALL SYSTEMS NOMINAL</div>
      </div>
    </section>
  );
}
