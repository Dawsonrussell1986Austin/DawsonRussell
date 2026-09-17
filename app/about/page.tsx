import Link from "next/link";
import { Header, Footer } from "@/components/field-notes/Chrome";
export const metadata = {
  title: "About",
  description:
    "Dawson Russell: agency owner, builder, and creator based in Austin, Texas.",
};
export default function About() {
  return (
    <div className="field-site">
      <div className="fn-shell">
        <Header />
        <main className="article">
          <p className="eyebrow">Hello, I’m Dawson</p>
          <h1>I love creating.</h1>
          <img
            src="/headshot.jpg"
            alt="Dawson Russell"
            width="280"
            height="300"
            style={{ objectFit: "cover", borderRadius: 4, margin: "30px 0" }}
          />
          <p className="lede">
            I’m an agency owner and builder based in Austin, Texas.
          </p>
          <p>
            I make films, build apps, and put new AI tools to work in my
            business. I’m interested in what happens when you take the tools
            beyond a demo and use them on something that actually needs to get
            done.
          </p>
          <p>
            Field Notes is where I share that process: practical workflows,
            creative experiments, and honest notes about what worked and what
            still needs work.
          </p>
          <p>
            Most of what I write is about business and AI. There’s room here for
            occasional personal reflections on faith and how we choose to work,
            too.
          </p>
          <p>
            If you’re running an agency, building a business, or trying to
            understand what these tools can do for your day, you’re in the right
            place.
          </p>
          <Link className="text-link" href="/notes">
            Read the field notes ↗
          </Link>
        </main>
        <Footer />
      </div>
    </div>
  );
}
