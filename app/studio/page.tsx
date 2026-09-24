import Link from "next/link";
import { Header, Footer } from "@/components/field-notes/Chrome";
import { caseStudies } from "@/lib/work";

export const metadata = {
  title: "Films & work",
  description: "Selected films and creative work by Dawson Russell.",
};

export default function StudioPage() {
  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main className="article">
          <p className="eyebrow">Films & work</p>
          <h1>Selected work.</h1>
          <p className="lede">Brand films, campaigns, and creative experiments.</p>
          <div className="work-list">
            {caseStudies.map((work) => (
              <Link href={"/work/" + work.slug} key={work.slug}>
                <span>
                  <strong>{work.title}</strong>
                  <small>{work.client}{work.badge ? " · " + work.badge : ""}</small>
                </span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
