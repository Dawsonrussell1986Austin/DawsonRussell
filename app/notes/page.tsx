import Link from "next/link";
import { Header, Footer } from "@/components/field-notes/Chrome";
import { notes } from "@/lib/notes";
export const metadata = {
  title: "Field Notes",
  description: "Practical notes on AI, agency work, and creating things.",
};
export default function Notes() {
  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main className="article">
          <p className="eyebrow">Dawson Russell · The notebook</p>
          <h1>Field Notes.</h1>
          <p className="lede">What I tried. What worked. What I’d use again.</p>
          {notes.map((n, i) => (
            <Link href={"/notes/" + n.slug} key={n.slug} className="note-row">
              <span className="note-number">0{i + 1}</span>
              <div>
                <p className="eyebrow">{n.category}</p>
                <h3>{n.title}</h3>
                <p>{n.lede}</p>
              </div>
              <span>↗</span>
            </Link>
          ))}
        </main>
        <Footer />
      </div>
    </div>
  );
}
