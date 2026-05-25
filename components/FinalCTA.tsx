import { Container } from './Container';

export function FinalCTA() {
  return (
    <section className="relative border-t border-[var(--border-strong)] bg-black overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      <Container className="relative py-32 md:py-48">
        <div className="max-w-5xl">
          <div className="eyebrow mb-8 flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-[var(--primary)]" />
            INITIATE
          </div>
          <h2 className="display text-[clamp(3rem,10vw,10rem)] text-white">
            Got an ad
            <br />
            to <span className="text-[var(--primary)]">make?</span>
          </h2>
          <p className="mt-10 text-lg md:text-xl max-w-xl leading-relaxed text-white/70">
            Tell me about it. Plan and quote in your inbox within 48 hours.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <a
              href="https://cal.com/dawsonrussell"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-danger inline-flex items-center gap-2 px-10 py-5 text-[13px]"
            >
              Book a call →
            </a>
            <a
              href="mailto:dawson@dawsonrussell.com"
              className="btn-ghost inline-flex items-center gap-2 px-10 py-5 text-[13px]"
            >
              Or email direct
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
