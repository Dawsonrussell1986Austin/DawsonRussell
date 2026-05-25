'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';

export function Section({
  id,
  eyebrow,
  heading,
  subheading,
  children,
  className = '',
  containerClassName = '',
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-36 ${className}`}>
      <Container className={containerClassName}>
        {(eyebrow || heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-24 max-w-3xl"
          >
            {eyebrow && (
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-6">
                {eyebrow}
              </div>
            )}
            {heading && (
              <h2 className="section-heading text-4xl md:text-6xl lg:text-7xl text-[var(--fg)]">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-6 text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
