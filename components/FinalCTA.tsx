import { Container } from './Container';

export function FinalCTA() {
  return (
    <section className="my-12 md:my-24">
      <Container>
        <div className="rounded-3xl bg-[var(--primary)] text-[var(--bg)] px-8 md:px-16 py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,230,211,0.25),_transparent_60%)]" />
          <div className="relative max-w-3xl">
            <h2 className="hero-headline text-[clamp(2.5rem,7vw,6rem)]">
              Got an ad to make?
            </h2>
            <p className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed text-[var(--bg)]/80">
              Tell me about it. I'll send you a plan and a quote in 48 hours.
            </p>
            <a
              href="https://cal.com/dawsonrussell"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-8 py-5 rounded-full bg-[var(--bg)] text-[var(--fg)] text-base font-medium hover:bg-[#1a1a1a] transition-colors"
            >
              Book a call →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
