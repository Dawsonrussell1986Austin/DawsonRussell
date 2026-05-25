'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Strategy',
    body: 'Script, storyboard, and shot list. Locked in week one.',
    spec: 'Week 1',
  },
  {
    n: '02',
    title: 'Production',
    body: 'Cinematic AI-generated footage, scored, edited, and color-graded.',
    spec: 'Week 2',
  },
  {
    n: '03',
    title: 'Delivery',
    body: 'Final cuts for every platform. Stills. Captions. Done.',
    spec: 'Week 3',
  },
];

export function Process() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {steps.map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="surface p-8 md:p-10"
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-mono text-xs tracking-[0.2em] text-white/60">
              — {s.n}
            </span>
            <span className="spec-label">{s.spec}</span>
          </div>
          <h3 className="display text-3xl md:text-4xl text-white mb-5">
            {s.title}
          </h3>
          <p className="text-[var(--muted-2)] leading-relaxed text-[15px]">
            {s.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
