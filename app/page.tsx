import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { ContactForm } from "@/components/home/ContactForm";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <WhyOnePerson />
      <Services />
      <Process />
      <Results />
      <Pricing />
      <HomeFAQ />
      <Contact />
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="container-x pt-16 pb-20 text-center md:pt-24 md:pb-28">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs uppercase tracking-widest text-text-muted">
        Custom AI Solutions
      </div>
      <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
        We build the AI<br />
        <em className="italic">your business runs on</em>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
        Custom agents. Custom applications. Custom automations. Purpose-built AI
        systems that solve real problems — shipped fast and built to last.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a href="#contact" className="btn-primary">Start a project</a>
        <a href="#work" className="btn-secondary">See what we build</a>
      </div>
    </section>
  );
}

function TrustBar() {
  const names = ["Apex Ventures", "Ironclad Capital", "Novalith", "Stratos Group", "Meridian AI"];
  return (
    <div className="border-t border-ink/10 px-6 py-14 text-center">
      <p className="eyebrow">Built for</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-4 opacity-40">
        {names.map((n) => (
          <span key={n} className="text-base font-semibold tracking-tight">{n}</span>
        ))}
      </div>
    </div>
  );
}

function WhyOnePerson() {
  return (
    <section id="why" className="bg-cream-dark py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <div className="eyebrow">Why Us</div>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Builders, not<br />advisors.<br />
            <em className="italic">We ship.</em>
          </h2>
          <p className="mt-6 text-text-secondary">
            Most AI agencies charge $75k–$150k and deliver a slide deck. The work
            gets handed to junior devs who've never built a production agent.
          </p>
          <p className="mt-4 text-text-secondary">
            This is a build shop. Every engagement ends with working software —
            custom agents, internal tools, and automated workflows running in
            production. No decks. No roadmaps that sit in a drawer. Just code that
            works.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Working software, not slide decks",
              "Production-ready on delivery",
              "Senior builder, not junior staff",
              "Shipped in weeks, not months",
            ].map((p) => (
              <span key={p} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs">
                <span className="text-accent">◆</span> {p}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
          {[
            ["", "Typical Agency", "Dawson Russell"],
            ["What you get", "Strategy deck, recommendations", "Working software in production"],
            ["Who builds it", "Junior devs, rotating staff", "Senior builder, directly"],
            ["Communication", "Through account managers", "Slack DM, same day"],
            ["Time to production", "6–12 weeks", "1–3 weeks"],
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 gap-4 border-b border-ink/5 px-5 py-4 text-sm last:border-0 ${
                i === 0 ? "bg-cream/60 text-xs uppercase tracking-widest text-text-muted" : ""
              }`}
            >
              <div className={i === 0 ? "" : "font-medium text-ink"}>{row[0]}</div>
              <div className="text-text-secondary">{row[1]}</div>
              <div className={i === 0 ? "" : "font-medium text-ink"}>{row[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  ["Custom AI Agents", "Autonomous agents that do real work — processing data, generating reports, handling customer ops, managing pipelines. Built to run 24/7 without supervision.", "Agents"],
  ["Internal AI Applications", "Custom-built tools your team actually uses — dashboards, assistants, search engines, and workflow apps powered by AI and wired into your existing systems.", "Applications"],
  ["Workflow Automation", "End-to-end automation of repetitive processes — intake forms, document processing, approval chains, data entry — replaced with AI systems that handle the volume.", "Automation"],
  ["AI-Powered Integrations", "Connect AI capabilities to the tools your team already lives in — Slack, CRMs, databases, APIs. Smart connectors that make your existing stack intelligent.", "Integrations"],
  ["Data & Knowledge Systems", "Custom RAG pipelines, knowledge bases, and search systems that let your team query company data using natural language — accurate, fast, and private.", "Data"],
  ["AI Product Development", "Building AI features into your product — from concept to production. Customer-facing intelligence that becomes a competitive advantage for your business.", "Product"],
];

function Services() {
  return (
    <section id="work" className="py-24">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <div className="eyebrow">What We Build</div>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              Custom AI that<br />actually runs your business
            </h2>
          </div>
          <p className="text-text-secondary md:text-right">
            Not templates. Not demos. Production-grade AI systems purpose-built
            for your specific workflows, data, and team.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([title, body, tag]) => (
            <div key={title} className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-cream">◆</div>
              <h3 className="font-serif text-xl text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{body}</p>
              <span className="mt-4 inline-flex w-fit items-center rounded-full bg-ink/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-text-muted">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Scope & Architect", "The problem gets defined, the solution gets designed. Architecture, data flows, integrations, and success criteria — locked in before a single line of code is written."],
    ["02", "Build & Ship", "Rapid development with daily progress. Working prototypes within days, production-ready systems within weeks. Your team has visibility the entire time."],
    ["03", "Deploy & Handoff", "The system goes live in your environment. Full documentation, team training, and a support window ensure your team owns it completely from day one."],
  ];
  return (
    <section id="process" className="bg-cream-dark py-24">
      <div className="container-x">
        <div className="eyebrow">How It Works</div>
        <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
          From problem to<br />production in weeks
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(([n, title, body]) => (
            <div key={n} className="rounded-2xl border border-ink/10 bg-white p-7">
              <div className="font-serif text-3xl text-text-muted">{n}</div>
              <h3 className="mt-3 font-serif text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const cells = [
    ["3 wk", "Average build to production"],
    ["60%", "Operational cost reduction"],
    ["24/7", "Agents running autonomously"],
    ["100%", "Projects delivered on time"],
  ];
  return (
    <section className="py-24">
      <div className="container-x text-center">
        <div className="eyebrow">Track Record</div>
        <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Built to perform</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cells.map(([n, l]) => (
            <div key={l} className="rounded-2xl border border-ink/10 bg-white p-8">
              <div className="font-serif text-5xl text-ink">{n}</div>
              <div className="mt-2 text-sm text-text-secondary">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-cream-dark py-24">
      <div className="container-x">
        <div className="text-center">
          <div className="eyebrow">Engagement</div>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Two ways to build</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Scoped projects with clear deliverables. Every engagement ends with
            working software your team owns.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <PathCard
            label="Targeted Build"
            title="Single Agent or App"
            desc="One focused build — a custom agent, an internal tool, or an automated workflow. Scoped, built, and deployed in 2–4 weeks."
            features={[
              "Single custom agent or application",
              "Integration with existing systems",
              "Full documentation & handoff",
              "30-day post-launch support",
              "Team training on the delivered system",
            ]}
            featured={false}
          />
          <PathCard
            label="Full Buildout — Most Popular"
            title="Multi-System Deployment"
            desc="A complete AI layer for your business — multiple agents, applications, and automations working together as one system."
            features={[
              "Multiple custom agents & applications",
              "Full workflow automation buildout",
              "Data pipelines & knowledge systems",
              "Team training & enablement included",
              "90-day post-launch support & iteration",
            ]}
            featured
          />
        </div>
      </div>
    </section>
  );
}

function PathCard({
  label,
  title,
  desc,
  features,
  featured,
}: {
  label: string;
  title: string;
  desc: string;
  features: string[];
  featured: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 ${
        featured ? "border-ink bg-ink text-cream" : "border-ink/10 bg-white text-ink"
      }`}
    >
      <div className={`text-xs uppercase tracking-widest ${featured ? "text-accent" : "text-text-muted"}`}>
        {label}
      </div>
      <h3 className="mt-3 font-serif text-2xl">{title}</h3>
      <p className={`mt-3 text-sm ${featured ? "text-cream/70" : "text-text-secondary"}`}>{desc}</p>
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className={featured ? "text-accent" : "text-ink"}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <div className="font-serif text-2xl">Custom scoped</div>
        <div className={`mt-1 text-xs ${featured ? "text-cream/60" : "text-text-muted"}`}>
          Pricing determined on discovery call
        </div>
        <a
          href="#contact"
          className={`mt-5 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium ${
            featured ? "bg-cream text-ink hover:bg-white" : "border border-ink/20 hover:border-ink"
          }`}
        >
          Book a discovery call
        </a>
      </div>
    </div>
  );
}

const HOME_FAQ = [
  ["What exactly gets delivered?", "Working software. Every engagement ends with production-ready code deployed in your environment — custom agents, applications, or automations — plus full documentation and team training."],
  ["How long does a typical build take?", "Targeted builds ship in 2–4 weeks. Full multi-system deployments take 4–8 weeks. Working prototypes are demoed within the first week of every engagement."],
  ["Do we need a technical team?", "No. The systems are built, deployed, and documented so any team can operate them. Technical teams get deeper integration. Non-technical teams get turnkey solutions."],
  ["Will it work with our existing tools?", "That's the entire point. Everything gets wired into your current stack — CRMs, databases, Slack, email, APIs, internal tools. No rip-and-replace."],
  ["Who owns the code?", "You do. 100%. Every line of code, every agent, every system built during the engagement is yours. Full source code, full documentation, zero lock-in."],
  ["What happens after delivery?", "Every engagement includes a post-launch support window (30 or 90 days depending on scope). After that, your team runs it — or the engagement extends if there's more to build."],
];

function HomeFAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container-x">
        <div className="eyebrow">Frequently Asked</div>
        <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Common questions</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {HOME_FAQ.map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-ink/10 bg-white p-6">
              <h4 className="font-serif text-lg text-ink">{q}</h4>
              <p className="mt-2 text-sm text-text-secondary">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-cream">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-widest text-cream/50">Start Building</div>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Tell us what<br /><em className="italic">to build</em>
          </h2>
          <p className="mt-5 text-cream/70">
            Describe the problem. Get a scoping call within 48 hours and a
            proposal with architecture, timeline, and fixed pricing.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-cream/80">
            <li>— No commitment, just a conversation</li>
            <li>— Response within 48 hours</li>
            <li>— Full proposal with scope, timeline & pricing</li>
          </ul>
          <div className="mt-8 space-y-2 text-sm">
            <a href="mailto:dawson@dawsonrussell.com" className="block text-cream hover:underline">
              dawson@dawsonrussell.com
            </a>
            <a href="sms:8179337408" className="block text-cream/60 hover:underline">
              Text (817) 933-7408
            </a>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
