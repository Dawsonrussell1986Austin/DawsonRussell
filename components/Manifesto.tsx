'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';

export function Manifesto() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="eyebrow mb-8">The studio</div>
          <p className="display-thin text-3xl md:text-5xl lg:text-6xl text-white leading-[1.15] tracking-tight">
            Dawson Russell is a full-service, AI-native film studio based
            in Austin, Texas. We partner with brands and founders who have
            something worth saying — and tell their stories with cinematic
            ambition, original craft, and the speed of the new tools.
          </p>
          <p className="mt-10 text-base md:text-lg text-[var(--muted-2)] leading-relaxed max-w-2xl">
            We don't just make ads. We make moments people remember. Brand
            films, product launches, founder stories, campaigns — ventures
            of every size, every category, every walk of life are welcome
            here.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
