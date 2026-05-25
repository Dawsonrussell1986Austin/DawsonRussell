import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { WorkGrid } from '@/components/WorkGrid';
import { Process } from '@/components/Process';
import { Toolkit } from '@/components/Toolkit';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Section
          id="work"
          eyebrow="SELECTED WORK · 003"
          heading="Recent missions."
          subheading="A short list of recent projects. Full reel available on request."
        >
          <WorkGrid />
        </Section>

        <Section
          id="process"
          eyebrow="OPERATIONS · PROTOCOL"
          heading="The process."
          subheading="Three phases from brief to finished cut. No retainer required to launch."
        >
          <Process />
        </Section>

        <Section
          eyebrow="STACK · OPERATIONAL"
          heading="The toolkit."
          subheading="I work where the cutting edge is. These are the tools that ship the work."
        >
          <Toolkit />
        </Section>

        <Section
          id="services"
          eyebrow="ENGAGEMENT · TIERS"
          heading="Work with me."
          subheading="Three ways to launch. All include strategy, generation, edit, and delivery."
        >
          <Services />
        </Section>

        <Section id="about" eyebrow="OPERATOR · 001" heading="Who's behind this.">
          <About />
        </Section>

        <Section eyebrow="FIELD REPORTS" heading="What clients say.">
          <Testimonials />
        </Section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
