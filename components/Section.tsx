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
  dark = true,
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
}) {
  return (
    <section id={id} className={`py-28 md:py-40 ${className}`}>
      <Container className={containerClassName}>
        {(eyebrow || heading || subheading) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 md:mb-28"
          >
            {eyebrow && (
              <div className="eyebrow mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[var(--primary)]" />
                {eyebrow}
              </div>
            )}
            {heading && (
              <h2 className="display text-5xl md:text-7xl lg:text-[7.5rem] max-w-5xl">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-8 text-base md:text-lg text-[var(--muted-2)] leading-relaxed max-w-2xl">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
