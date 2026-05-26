import { Container } from './Container';
import { ApplicationForm } from './ApplicationForm';

export function FinalCTA() {
  return (
    <section id="apply" className="py-16 md:py-24">
      <Container>
        <div className="surface-lg p-8 md:p-14 lg:p-20 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-[0.05] pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">Apply to work together</div>
              <h2 className="display text-[clamp(2.5rem,6vw,5.5rem)] text-white">
                Got a story to tell?
              </h2>
              <p className="mt-8 text-base md:text-lg max-w-md leading-relaxed text-white/70">
                Brand film, ad, product launch, founder story — whatever
                you're trying to make, send me a quick brief. If it's a
                fit, I'll reply within 48 hours with next steps.
              </p>
              <div className="mt-8 spec-label">
                Or email{' '}
                <a
                  href="mailto:dawson@dawsonrussell.com"
                  className="text-white hover:underline underline-offset-4"
                >
                  dawson@dawsonrussell.com
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
