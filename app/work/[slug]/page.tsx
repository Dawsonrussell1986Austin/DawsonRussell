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
      className="font-serif text-3xl md:text-5xl tracking-tight mt-20 mb-6 text-[var(--fg)]"
    />
  ),
  h3: (p: any) => (
    <h3 {...p} className="font-serif text-2xl tracking-tight mt-12 mb-4" />
  ),
  p: (p: any) => (
    <p
      {...p}
      className="text-lg md:text-xl leading-relaxed text-[var(--fg)]/85 mt-5"
    />
  ),
  blockquote: (p: any) => (
    <blockquote
      {...p}
      className="my-10 border-l-2 border-[var(--primary)] pl-6 italic text-[var(--muted)] text-lg leading-relaxed"
    />
  ),
  a: (p: any) => (
    <a {...p} className="text-[var(--primary)] underline underline-offset-4" />
  ),
  strong: (p: any) => <strong {...p} className="text-[var(--fg)] font-semibold" />,
  ul: (p: any) => <ul {...p} className="mt-6 space-y-2 list-disc pl-6" />,
  li: (p: any) => <li {...p} className="text-[var(--fg)]/85" />,
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
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
        </section>

        <Container className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-8">
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)] mb-6">
                Case study · {meta.year}
              </div>
              <h1 className="hero-headline text-5xl md:text-7xl lg:text-8xl">
                {meta.title}
              </h1>
            </div>
            <aside className="md:col-span-4 md:pt-6 grid grid-cols-2 md:grid-cols-1 gap-6 text-sm">
              <Meta label="Client" value={meta.client} />
              <Meta label="Year" value={String(meta.year)} />
              <Meta label="Role" value={meta.role} />
            </aside>
          </div>

          <div className="mt-16 md:mt-24 max-w-3xl">
            <MDXRemote source={mdx.content} components={mdxComponents} />
          </div>

          {next && (
            <div className="mt-32 pt-16 border-t border-[var(--border)]">
              <Link
                href={`/work/${next.slug}`}
                className="group inline-flex flex-col gap-2"
              >
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Next project
                </div>
                <div className="font-serif text-4xl md:text-6xl tracking-tight group-hover:text-[var(--primary)] transition-colors">
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
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted)] mb-2">
        {label}
      </div>
      <div className="text-[var(--fg)]">{value}</div>
    </div>
  );
}
