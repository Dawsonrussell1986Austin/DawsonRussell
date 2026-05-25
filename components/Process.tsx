'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Strategy',
    body: 'Script, storyboard, and shot list. Locked in days, not weeks.',
    spec: 'Day 1–2',
  },
  {
    n: '02',
    title: 'Production',
    body: 'Cinematic AI-generated footage, scored, edited, and color-graded.',
    spec: 'Day 3–6',
  },
  {
    n: '03',
    title: 'Delivery',
    body: 'Final cuts for every platform. Stills. Captions. Done.',
    spec: 'Day 7',
  },
];

export function Process() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--border-strong)]">
      {steps.map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`py-12 md:py-16 px-2 md:px-10 ${
            i > 0 ? 'md:border-l border-[var(--border-strong)] border-t md:border-t-0' : ''
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-mono text-xs tracking-[0.25em] text-white">
              — {s.n}
            </span>
            <span className="spec-label">{s.spec}</span>
          </div>
          <h3 className="display text-4xl md:text-5xl text-white mb-6">
            {s.title}
          </h3>
          <p className="text-[var(--muted-2)] leading-relaxed max-w-sm text-[15px]">
            {s.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
