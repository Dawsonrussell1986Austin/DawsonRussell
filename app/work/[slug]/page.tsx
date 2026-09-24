import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/field-notes/Chrome";
import { caseStudies, getCaseStudy } from "@/lib/work";
import { CaseStudyHeroMux } from "@/components/CaseStudyHeroMux";

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
    title: c.title + " — " + c.client,
    description: c.excerpt,
    openGraph: {
      title: c.title + " — " + c.client,
      description: c.excerpt,
      images: ["/api/og?slug=" + c.slug],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getCaseStudy(slug);
  if (!work) notFound();

  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main className="article work-detail">
          <Link className="text-link" href="/studio">← All films & work</Link>
          <h1>{work.title}</h1>
          <p className="work-meta">{work.client} · {work.year}{work.badge ? " · " + work.badge : ""}</p>
          <p className="lede">{work.excerpt}</p>
          {work.inProduction ? (
            <p>Coming soon.</p>
          ) : work.muxPlaybackId ? (
            <div className="work-media">
              <CaseStudyHeroMux playbackId={work.muxPlaybackId} poster={work.poster} />
            </div>
          ) : (
            <div className="work-media">
              <video controls playsInline preload="metadata" poster={work.poster}>
                <source src={work.heroVideo} type="video/mp4" />
              </video>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
