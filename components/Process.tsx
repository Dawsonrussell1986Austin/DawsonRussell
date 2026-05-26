'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Strategy',
    spec: 'Week 1',
    body: 'We lock the idea before a single frame is generated. I write the concept, story, and full shooting script with you — then translate it into a shot-by-shot blueprint with locked visual direction.',
    deliverables: [
      'Concept development',
      'Story & script',
      'Art direction & visual style',
      'Storyboard & shot list',
    ],
  },
  {
    n: '02',
    title: 'Production',
    spec: 'Week 2',
    body: 'I generate, direct, and assemble every shot — same craft as a traditional set, just with a different camera. Voice, music, and sound design are all original, scored and mixed for the film.',
    deliverables: [
      'Image & video generation',
      'Voice casting & voiceover',
      'Original music composition',
      'Sound design & SFX',
      'Editing & color grading',
    ],
  },
  {
    n: '03',
    title: 'Delivery',
    spec: 'Week 3',
    body: 'You get the hero film plus everything you need to actually run the campaign — vertical and square cut-downs for every platform, key stills, and a finished package ready to ship.',
    deliverables: [
      'Master cinematic cut',
      'Vertical & square social cuts',
      'Key art & stills',
      'Captions for every platform',
    ],
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
          className="surface p-8 md:p-10 flex flex-col"
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
          <div className="mt-8 pt-6 border-t border-[var(--border-strong)]">
            <div className="spec-label mb-4">Included</div>
            <ul className="space-y-2.5">
              {s.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-[13px] text-white/85"
                >
                  <span className="text-white/40 mt-1 font-mono text-[10px]">
                    →
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
