'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from './Container';

export function Hero() {
  return (
    <section className="pt-28 md:pt-32 pb-4">
      <Container>
        <div className="relative w-full overflow-hidden rounded-[36px] md:rounded-[44px] border border-[var(--border)] bg-[var(--surface)] h-[80vh] min-h-[640px]">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg"
          >
            <source src="/hero-reel.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,11,14,0.55)] via-[rgba(11,11,14,0.4)] to-[rgba(11,11,14,0.95)]" />
          <div className="absolute inset-0 vignette pointer-events-none" />

          <div className="relative z-10 h-full px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl"
            >
              <div className="eyebrow mb-8">AI Video Ad Agency — Austin, TX</div>
              <h1 className="display text-[clamp(2.5rem,7vw,7rem)] text-white">
                Award-winning storytelling.
                <br />
                Shipped in weeks.
              </h1>
              <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed">
                Cinematic ad creative, written and produced with the
                cutting-edge of AI. Months of agency work, condensed into
                weeks — for a fraction of the cost.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#apply"
                  className="btn-primary inline-flex items-center px-7 py-3.5"
                >
                  Apply to work together
                </a>
                <Link
                  href="#work"
                  className="btn-ghost inline-flex items-center px-7 py-3.5"
                >
                  View the work
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-5 left-6 right-6 z-10 flex justify-between items-center font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
            <div>↓ Scroll</div>
            <div className="hidden md:block">Currently accepting waitlist applications</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
