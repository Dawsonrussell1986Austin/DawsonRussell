import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { caseStudies, getCaseStudy } from '@/lib/work';
import { CaseStudyHeroMux } from '@/components/CaseStudyHeroMux';

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return {
    title: `${c.title} — ${c.client}`,
    description: c.excerpt,
    openGraph: {
      title: `${c.title} — ${c.client}`,
      description: c.excerpt,
      images: [`/api/og?slug=${c.slug}`],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getCaseStudy(slug);
  if (!meta) notFound();

  return (
    <>
      <NavBar />
      <main>
        <section className="pt-28 md:pt-32 pb-16 md:pb-24">
          <Container>
            <div className="relative w-full overflow-hidden rounded-[28px] md:rounded-[40px] border border-[var(--border)] bg-[var(--surface)] aspect-[16/9] max-h-[88vh]">
              {meta.inProduction ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <div className="eyebrow mb-6">In production</div>
                  <div className="display text-4xl md:text-6xl lg:text-7xl text-white">
                    Coming soon.
                  </div>
                  <p className="mt-6 max-w-md text-sm md:text-base text-[var(--muted-2)] leading-relaxed">
                    {meta.title} — {meta.client}. Currently in production. Check back shortly.
                  </p>
                </div>
              ) : meta.muxPlaybackId ? (
                <CaseStudyHeroMux playbackId={meta.muxPlaybackId} poster={meta.poster} />
              ) : (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={meta.poster}
                >
                  <source src={meta.heroVideo} type="video/mp4" />
                </video>
              )}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
