import type { Metadata } from "next";
import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";
import { CurriculumCard } from "@/components/CurriculumCard";
import { FAQ } from "@/components/FAQ";
import {
  COHORT,
  MODULES,
  COHORT_FAQ,
  ABOUT_LONG,
  WHO_FOR,
  WHO_NOT_FOR,
  INCLUDED,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `The 6-Week AI System for Capital Raise Marketing — ${COHORT.number}`,
  description:
    "A 6-week cohort that gives you the AI system for capital raise marketing — decks, ads, investor copy, and the prompts behind them.",
};

export default function CohortPage() {
  const ctaLabel = `Join ${COHORT.number} — ${COHORT.priceLabel}`;
  return (
    <>
      <header className="border-b border-ink/5">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-cream">
              DR
            </span>
            <span className="text-sm font-medium tracking-tight">Dawson Russell</span>
          </Link>
          <Link href="/training" className="text-sm text-text-secondary hover:text-ink">
            ← Free training
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="container-x pt-16 pb-16 text-center md:pt-24">
        <div className="mx-auto inline-flex items-center rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs uppercase tracking-widest text-text-muted">
          {COHORT.number} — Starts {COHORT.startDateLabel}
        </div>
        <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          The 6-Week AI System for Capital Raise Marketing
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
          Six weeks. The exact prompts, workflows, and templates I use to build
          decks, ads, and investor copy for live raises — in your hands.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <CheckoutButton label={ctaLabel} />
          <p className="text-xs text-text-muted">{COHORT.scarcityLine}</p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-cream-dark py-24">
        <div className="container-x max-w-3xl">
          <div className="eyebrow">The problem</div>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
            Capital raise marketing is stuck in 2018.
          </h2>
          <div className="mt-8 space-y-5 text-text-secondary">
            <p>
              Capital raise marketing is stuck in 2018. The decks look the same
              as they did a decade ago. The investor emails read like form
              letters. The ad creative is outsourced and forgotten.
            </p>
            <p>
              Decks take 6 weeks. Ads cost too much and underperform. Investor
              email is generic and the open rates show it. Founders end up
              hiring an agency for $40K, get a strategy doc, and still have to
              build the assets themselves.
            </p>
            <p>
              AI changes all of it — but most founders don't know where to
              start. Which tools? Which prompts? What workflow? Six weeks from
              now, you'll have answers and working assets. That's what this
              cohort is.
            </p>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-24">
        <div className="container-x">
          <div className="eyebrow">Curriculum</div>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Six weeks. Six modules.
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Each week is a 1-hour live session. You build one asset live with
            me, then take the prompts, workflows, and templates home.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <CurriculumCard key={m.week} module={m} />
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-cream-dark py-24">
        <div className="container-x max-w-3xl">
          <div className="eyebrow">What's included</div>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            Everything you need to run the system
          </h2>
          <ul className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-4 px-6 py-5 text-sm text-ink">
                <span className="text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO FOR / NOT FOR */}
      <section className="py-24">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink/10 bg-white p-8">
            <div className="eyebrow">Who this is for</div>
            <h3 className="mt-3 font-serif text-2xl text-ink">
              You're a fit if…
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-text-secondary">
              {WHO_FOR.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white p-8">
            <div className="eyebrow">Who it's not for</div>
            <h3 className="mt-3 font-serif text-2xl text-ink">
              Skip this if…
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-text-secondary">
              {WHO_NOT_FOR.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-text-muted">×</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-ink py-24 text-cream">
        <div className="container-x max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-cream/50">
            {COHORT.number} pricing
          </div>
          <div className="mt-6 flex items-baseline justify-center gap-4">
            <span className="font-serif text-2xl text-cream/40 line-through">
              {COHORT.anchorPriceLabel}
            </span>
            <span className="font-serif text-6xl text-cream md:text-7xl">
              {COHORT.priceLabel}
            </span>
          </div>
          <p className="mt-4 text-cream/70">
            Founding member rate. Cohort 2 will be priced higher.
          </p>
          <div className="mt-10">
            <CheckoutButton
              label={ctaLabel}
              className="inline-flex items-center justify-center rounded-full bg-cream px-10 py-5 text-base font-medium text-ink transition hover:bg-white"
            />
          </div>
          <p className="mt-5 text-sm text-cream/60">{COHORT.refundLine}</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="container-x max-w-3xl">
          <div className="eyebrow">About Dawson</div>
          <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
            The person teaching this
          </h2>
          <div className="mt-8 space-y-5 whitespace-pre-line text-text-secondary">
            {ABOUT_LONG}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-dark py-24">
        <div className="container-x max-w-3xl">
          <div className="eyebrow text-center">FAQ</div>
          <h2 className="mt-3 text-center font-serif text-3xl leading-tight md:text-4xl">
            Questions
          </h2>
          <div className="mt-10">
            <FAQ items={COHORT_FAQ} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink py-24 text-cream">
        <div className="container-x max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-cream/50">
            {COHORT.number} — Starts {COHORT.startDateLabel}
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Six weeks from now, your raise marketing looks different.
          </h2>
          <div className="mt-10">
            <CheckoutButton
              label={ctaLabel}
              className="inline-flex items-center justify-center rounded-full bg-cream px-10 py-5 text-base font-medium text-ink transition hover:bg-white"
            />
          </div>
          <p className="mt-4 text-xs text-cream/60">{COHORT.scarcityLine}</p>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-cream py-8">
        <div className="container-x flex flex-col gap-2 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 Dawson Russell.</span>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-ink">Home</Link>
            <Link href="/training" className="hover:text-ink">Free training</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
