'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.55)] via-[rgba(10,10,10,0.35)] to-[rgba(10,10,10,0.9)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,10,10,0.6)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 h-full flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]/80 mb-8">
            AI Video Ad Agency · Austin, TX
          </div>
          <h1 className="hero-headline text-[clamp(3rem,9vw,9.5rem)] text-[var(--fg)]">
            AI-powered ads.
            <br />
            <span className="italic text-[var(--accent)]">Shipped in days.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-[var(--fg)]/80 leading-relaxed">
            I make the kind of ads that used to take agencies eight weeks and two
            hundred grand. In a week. For a tenth of the price.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button href="https://cal.com/dawsonrussell" external withArrow>
              Book a call
            </Button>
            <Link
              href="#work"
              className="text-sm text-[var(--fg)]/80 hover:text-[var(--fg)] transition border-b border-[var(--fg)]/30 pb-1"
            >
              See the work ↓
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
