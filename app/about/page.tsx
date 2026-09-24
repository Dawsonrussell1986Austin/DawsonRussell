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
          <p className="eyebrow">About</p>
          <h1>Hi, I’m Dawson.</h1>
          <p className="lede">
            I run RaiseLaunch, build apps, and make films in Austin, Texas.
          </p>
          <p>
            I use AI to get real work done and share what I learn in
            Field Notes.
          </p>
          <p>
            Husband. Dad of three. Always making something.
          </p>
          <Link className="text-link" href="/notes">
            Read the notes ↗
          </Link>
        </main>
        <Footer />
      </div>
    </div>
  );
}
