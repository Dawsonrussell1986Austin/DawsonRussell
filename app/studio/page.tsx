import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { WorkGrid } from '@/components/WorkGrid';
import { Process } from '@/components/Process';
import { Manifesto } from '@/components/Manifesto';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />

        <Manifesto />

        <Section
          id="work"
          eyebrow="Selected work"
          heading="Recent work."
          subheading="A short list of recent projects. Full reel available on request."
        >
          <WorkGrid />
        </Section>

        <Section
          id="process"
          eyebrow="How it works"
          heading="The process."
          subheading="Three phases from brief to finished campaign. Every project is full-service, end-to-end."
        >
          <Process />
        </Section>

        <Section eyebrow="Testimonials" heading="What clients say.">
          <Testimonials />
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
