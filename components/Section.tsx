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
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <Container className={containerClassName}>
        {(eyebrow || heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 md:mb-20 max-w-3xl"
          >
            {eyebrow && (
              <div className="eyebrow mb-5">{eyebrow}</div>
            )}
            {heading && (
              <h2 className="display text-4xl md:text-6xl lg:text-7xl text-white">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-6 text-base md:text-lg text-[var(--muted-2)] leading-relaxed max-w-xl">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
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
