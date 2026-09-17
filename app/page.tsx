import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/field-notes/Chrome";
import { Signup } from "@/components/field-notes/Signup";
import { IdeaSculpture } from "@/components/playground/IdeaSculpture";
import "./playground.css";

const notes = [
  { slug: "the-work-between-messages", tag: "AI IN PRACTICE", title: "The work between “can you?” and “done.”", description: "A client request, an AI assistant, and a different kind of workday." },
  { slug: "the-follow-up-system", tag: "AGENCY LIFE", title: "A sales call should start something.", description: "The follow-up workflow I’m building for my agency." },
  { slug: "creative-work-with-ai", tag: "CREATIVE WORK", title: "I still love the blank page.", description: "New tools. The same pull to make something worth seeing." },
];

export default function HomePage() {
  return <div className="field-site playground">
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="fn-shell"><Header /></div>
    <main id="main">
      <section className="play-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-topline"><span><i className="live-dot" /> AN OPEN EXPERIMENT</span><span>AUSTIN, TEXAS ↙</span></div>
        <div className="hero-type"><p className="eyebrow">DAWSON RUSSELL / ALWAYS CREATING</p><h1>Small team.<br /><span>Wild ideas.</span></h1>
          <p className="hero-intro">I run an agency, build things with AI,<br className="desktop-break" /> and share what happens along the way.</p>
          <div className="hero-links"><a className="lime-button" href="#subscribe">Get my field notes <span>↗</span></a><a className="quiet-link" href="#playground">Explore the experiments ↓</a></div>
        </div>
        <IdeaSculpture />
        <div className="hero-foot"><div className="mini-profile"><Image src="/headshot.jpg" alt="Dawson Russell" width={40} height={40} /><span>Husband. Dad of three.<br /><b>Curious about what comes next.</b></span></div><span className="hero-edition">SIX-FIGURE AGENCY. TWO-PERSON TEAM.<br />A FEW MORE IDEAS THAN HOURS IN THE DAY.</span></div>
      </section>
      <section className="intro-band"><span>01 / THE APPROACH</span><p>The tools keep changing.<br />The urge to <em>make something</em> doesn’t.</p><span className="asterisk" aria-hidden="true">✳</span></section>
      <section className="experiment-section" id="playground">
        <div className="section-kicker"><span>02 / THE PLAYGROUND</span><span>IDEAS YOU CAN ACTUALLY OPEN ↙</span></div>
        <div className="experiment-heading"><h2>A little less talking.<br /><em>A lot more making.</em></h2><p>Sometimes it’s a tool for work.<br />Sometimes it’s a diving board.</p></div>
        <a className="barton-card" href="https://barton-springs.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div className="barton-art" aria-hidden="true"><div className="pool-shadow" /><div className="pool-model"><div className="pool-water"><span /><span /><span /></div><div className="pool-board" /><i className="pool-tree tree-one" /><i className="pool-tree tree-two" /><i className="pool-tree tree-three" /><i className="pool-tree tree-four" /></div><span className="art-coordinate">30°15′49″ N<br />97°46′16″ W</span><span className="art-word">BARTON<br />SPRINGS</span><span className="project-open">↗</span></div>
          <div className="project-caption"><div><span className="project-status"><i className="live-dot" /> LIVE EXPERIMENT</span><h3>A little piece of Austin.<br />A very questionable dive.</h3><p>A Barton Springs browser game. Pick your Austinite, hit the board, face the judges.</p></div><span className="project-action">Take a dive ↗</span></div>
        </a>
        <div className="secondary-project"><div><p className="eyebrow">STORIES IN MOTION</p><h3>Some ideas need a bigger screen.</h3><p>Brand films, launch campaigns, and creative work.</p><Link href="/studio" className="quiet-link">Step into the studio ↗</Link></div><Link href="/work/rego-brix" className="film-preview"><img src="https://image.mux.com/TjJbteW7FaZxxNF8mDdCOBuX1gBIER1La6WuDqViyZ8/thumbnail.jpg?time=5&width=1000" alt="Rego-Brix concept film" width="640" height="360" loading="lazy" /><span>REGO-BRIX / CONCEPT FILM <b>↗</b></span></Link></div>
      </section>
      <section className="writing-section"><div className="section-kicker"><span>03 / THINKING OUT LOUD</span><Link href="/notes">ALL FIELD NOTES ↗</Link></div><h2>From the workbench.</h2><div className="writing-grid">{notes.map((note, i) => <Link className="writing-card" href={`/notes/${note.slug}`} key={note.slug}><div className="writing-top"><span>0{i + 1}</span><span>↗</span></div><p className="eyebrow">{note.tag}</p><h3>{note.title}</h3><p>{note.description}</p><span className="read-note">Read the note</span></Link>)}</div></section>
      <section className="personal-section"><div className="portrait-wrap"><Image src="/headshot.jpg" alt="Dawson Russell" width={620} height={700} /><span>AUSTIN, TX / OFFLINE & ONLINE</span></div><div><p className="eyebrow">THE PERSON BEHIND THE TABS</p><h2>Hey, I’m<br /><em>Dawson.</em></h2><p>Agency owner. Husband. Dad of three. Based in Austin, Texas.</p><p>I make films, build apps, and use AI to get real work done. This is my corner of the internet for the things I’m building and figuring out.</p><Link href="/about" className="quiet-link">A little more about me ↗</Link></div></section>
      <section className="newsletter-section" id="subscribe"><div className="newsletter-top"><span>04 / KEEP IN TOUCH</span><span>AN OPEN NOTEBOOK. AN OCCASIONAL GOOD IDEA.</span></div><div className="newsletter-grid"><div><h2>Field<br /><em>Notes.</em><span aria-hidden="true">↗</span></h2><p>The useful things I find while running an agency<br className="desktop-break" /> and building with AI. Straight to your inbox.</p></div><div className="newsletter-form"><p>What I tried. What worked.<br />What I’d use again.</p><Signup /><Link href="/notes" className="quiet-link">Read a note first ↗</Link></div></div></section>
    </main><div className="fn-shell"><Footer /></div>
  </div>;
}
