'use client';

import { motion } from 'framer-motion';
import { PenTool, Film, Send } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: PenTool,
    title: 'Strategy',
    body: 'Script, storyboard, and shot list. Locked in days, not weeks.',
  },
  {
    n: '02',
    icon: Film,
    title: 'Production',
    body: 'Cinematic AI-generated footage, scored, edited, and color-graded.',
  },
  {
    n: '03',
    icon: Send,
    title: 'Delivery',
    body: 'Final cuts for every platform. Stills. Captions. Done.',
  },
];

export function Process() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
      {steps.map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.2em] text-[var(--primary)]">
              {s.n}
            </span>
            <div className="h-px flex-1 bg-[var(--border)]" />
            <s.icon size={20} strokeWidth={1.25} className="text-[var(--muted)]" />
          </div>
          <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">
            {s.title}
          </h3>
          <p className="text-[var(--muted)] leading-relaxed max-w-sm">{s.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
