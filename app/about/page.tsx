import type { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { About } from '@/components/About';
import { FinalCTA } from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dawson Russell — founder of an AI-native film studio in Austin, Texas.',
};

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="pt-36 md:pt-44 pb-12 md:pb-20">
          <Container>
            <div className="max-w-4xl">
              <div className="eyebrow mb-6">About</div>
              <h1 className="display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05]">
                The studio, the story, the person behind it.
              </h1>
            </div>
          </Container>
        </section>

        <Container className="pb-20 md:pb-32">
          <About />
        </Container>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
