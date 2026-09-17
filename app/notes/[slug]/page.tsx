import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "@/components/field-notes/Chrome";
import { Signup } from "@/components/field-notes/Signup";
import { notes } from "@/lib/notes";
export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = notes.find((n) => n.slug === slug);
  return { title: n?.title, description: n?.lede };
}
export default async function Note({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = notes.find((n) => n.slug === slug);
  if (!n) notFound();
  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main className="article">
          <Link className="text-link" href="/notes">
            ← All field notes
          </Link>
          <p className="eyebrow">{n.category} · Dawson Russell</p>
          <h1>{n.title}</h1>
          <p className="lede">{n.lede}</p>
          {n.paragraphs.map((t) => (
            <p key={t}>{t}</p>
          ))}
          <section className="article-signup">
            <h2>More notes from the work.</h2>
            <Signup />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
