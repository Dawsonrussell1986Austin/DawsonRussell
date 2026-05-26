import { notFound } from 'next/navigation';
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import type { Metadata } from 'next';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { caseStudies, getCaseStudy, getNextCaseStudy } from '@/lib/work';
import { Media, MediaRow, Tile, Reel, Caption, PullQuote } from '@/components/mdx/Media';
import { MuxVideo } from '@/components/mdx/MuxVideo';
import { CaseStudyHeroMux } from '@/components/CaseStudyHeroMux';

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

async function loadMdx(slug: string) {
  const file = path.join(process.cwd(), 'content', 'work', `${slug}.mdx`);
  try {
    const raw = await fs.readFile(file, 'utf8');
    return matter(raw);
  } catch {
    return null;
  }
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

const mdxComponents = {
  h2: (p: any) => (
    <h2
      {...p}
      className="display text-3xl md:text-5xl mt-24 mb-6 text-white max-w-3xl mx-auto"
    />
  ),
  h3: (p: any) => (
    <h3 {...p} className="display text-2xl mt-14 mb-4 text-white max-w-3xl mx-auto" />
  ),
  p: (p: any) => (
    <p
      {...p}
      className="text-base md:text-lg leading-relaxed text-white/85 mt-5 max-w-3xl mx-auto"
    />
  ),
  blockquote: (p: any) => (
    <blockquote
      {...p}
      className="my-12 max-w-3xl mx-auto border-l-2 border-white/40 pl-6 font-mono text-sm text-[var(--muted-2)] leading-relaxed uppercase tracking-wider"
    />
  ),
  a: (p: any) => <a {...p} className="text-white underline underline-offset-4" />,
  strong: (p: any) => <strong {...p} className="text-white font-semibold" />,
  ul: (p: any) => <ul {...p} className="mt-6 space-y-2 list-disc pl-6 max-w-3xl mx-auto" />,
  li: (p: any) => <li {...p} className="text-white/85" />,
  hr: () => <hr className="my-20 border-0 h-px bg-[var(--border-strong)] max-w-3xl mx-auto" />,
  Media,
  MediaRow,
  Tile,
  Reel,
  Caption,
  PullQuote,
  MuxVideo,
};

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getCaseStudy(slug);
  const mdx = await loadMdx(slug);
  if (!meta || !mdx) notFound();

  const next = getNextCaseStudy(slug);

  return (
    <>
      <NavBar />
      <main>
        {/* Hero video, rounded card like the homepage */}
        <section className="pt-28 md:pt-32 pb-4">
          <Container>
            <div className="relative w-full overflow-hidden rounded-[28px] md:rounded-[40px] border border-[var(--border)] bg-[var(--surface)] aspect-[16/9] max-h-[88vh]">
              {meta.muxPlaybackId ? (
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
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(11,11,14,0.55)]" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 right-6 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="eyebrow mb-3">Case study · {meta.year}</div>
                  <h1 className="display text-4xl md:text-6xl lg:text-7xl text-white">
                    {meta.title}
                  </h1>
                </div>
                <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase">
                  {meta.client}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Meta strip */}
        <Container className="mt-10 md:mt-14">
          <div className="surface p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <Meta label="Client" value={meta.client} />
            <Meta label="Year" value={String(meta.year)} />
            <Meta label="Role" value={meta.role} />
            <Meta label="Status" value="Released" />
          </div>
        </Container>

        {/* Body */}
        <Container className="mt-16 md:mt-24 pb-32">
          <article>
            <MDXRemote source={mdx.content} components={mdxComponents} />
          </article>

          {next && (
            <div className="mt-32 pt-14 border-t border-[var(--border-strong)]">
              <Link href={`/work/${next.slug}`} className="group inline-flex flex-col gap-3">
                <div className="eyebrow">Next project</div>
                <div className="display text-4xl md:text-7xl text-white group-hover:text-white/80 transition-colors">
                  {next.title} →
                </div>
              </Link>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="spec-label mb-2">{label}</div>
      <div className="text-white text-sm">{value}</div>
    </div>
  );
}
