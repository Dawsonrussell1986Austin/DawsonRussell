import Link from "next/link";
import { Header, Footer } from "@/components/field-notes/Chrome";
import { Signup } from "@/components/field-notes/Signup";
export default function HomePage() {
  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main>
          <section className="fn-hero">
            <div>
              <p className="eyebrow">A field guide to building with AI</p>
              <h1>
                I put new AI
                <br />
                <em>to work.</em>
                <br />
                In a real business.
              </h1>
              <p className="hero-copy">
                I’m Dawson. I run an agency, build apps, and test what the
                newest models can actually do. These are my notes from the work.
              </p>
              <div className="byline">
                <img
                  src="/headshot.jpg"
                  alt="Dawson Russell"
                  width="44"
                  height="44"
                />
                <div>
                  Agency owner. Builder. Always curious.
                  <span>Based in Austin, Texas.</span>
                </div>
              </div>
            </div>
            <aside className="dispatch" id="subscribe">
              <div className="dispatch-top">
                DAWSON RUSSELL <span>EST. 2026</span>
              </div>
              <p className="eyebrow">The weekly dispatch</p>
              <h2>
                Field
                <br />
                <em>Notes.</em>
              </h2>
              <p>
                What I tried. What worked.
                <br />
                What I’d use again.
              </p>
              <Signup />
              <Link
                className="text-link"
                href="/notes/the-work-between-messages"
              >
                Read a field note first →
              </Link>
            </aside>
          </section>
          <div className="topic-strip">
            <span>FROM INSIDE THE WORK</span>
            <span>Practical AI</span>
            <span>Agency life</span>
            <span>Things I’m building</span>
          </div>
          <section className="notes-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The notebook is open</p>
                <h2>Less theory. More doing.</h2>
              </div>
              <Link className="text-link" href="/notes">
                All field notes ↗
              </Link>
            </div>
            {[
              {
                slug: "the-work-between-messages",
                category: "AI IN PRACTICE",
                title: "The work between “can you?” and “done.”",
                desc: "A client request, an AI assistant, and a different kind of workday.",
              },
              {
                slug: "the-follow-up-system",
                category: "BUILDING IN PUBLIC",
                title: "A sales call should start something.",
                desc: "The follow-up workflow I’m building for my agency.",
              },
              {
                slug: "creative-work-with-ai",
                category: "CREATIVE WORK",
                title: "I still love the blank page.",
                desc: "New tools. The same pull to make something worth seeing.",
              },
            ].map((n, i) => (
              <Link className="note-row" key={n.slug} href={"/notes/" + n.slug}>
                <span className="note-number">0{i + 1}</span>
                <div>
                  <p className="eyebrow">{n.category}</p>
                  <h3>{n.title}</h3>
                  <p>{n.desc}</p>
                </div>
                <span className="note-arrow">↗</span>
              </Link>
            ))}
          </section>
          <section className="about-slice">
            <img
              src="/headshot.jpg"
              alt="Dawson Russell"
              width="360"
              height="400"
            />
            <div>
              <p className="eyebrow">The person behind the notes</p>
              <h2>
                I love creating.
                <br />
                <em>That part hasn’t changed.</em>
              </h2>
              <p>
                Agencies. Apps. Films. I like taking an idea and making it real.
              </p>
              <p>
                AI is changing how I do that. This is where I share the
                experiments, the useful bits, and the things I’m still figuring
                out.
              </p>
              <Link className="text-link" href="/about">
                A little more about me ↗
              </Link>
            </div>
          </section>
          <section className="studio-slice">
            <div>
              <p className="eyebrow">Beyond the inbox</p>
              <h2>
                Some stories need
                <br />a bigger screen.
              </h2>
              <p>Brand films, launch campaigns, and creative experiments.</p>
              <Link className="dark-button" href="/studio">
                Explore the film work ↗
              </Link>
            </div>
            <Link href="/work/rego-brix">
              <img
                src="https://image.mux.com/TjJbteW7FaZxxNF8mDdCOBuX1gBIER1La6WuDqViyZ8/thumbnail.jpg?time=5&width=1000"
                alt="A frame from the Rego-Brix film"
                width="600"
                height="340"
              />
              <span className="fine">REGO-BRIX · A BOXABL CONCEPT FILM ↗</span>
            </Link>
          </section>
          <section className="closing">
            <div>
              <p className="eyebrow">Keep a seat at the workbench</p>
              <h2>Come build with me.</h2>
              <p>Real work. Useful experiments. Straight to your inbox.</p>
            </div>
            <Signup />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
