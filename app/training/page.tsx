import type { Metadata } from "next";
import Link from "next/link";
import { RegistrationForm } from "@/components/RegistrationForm";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FAQ } from "@/components/FAQ";
import { LogoBar } from "@/components/LogoBar";
import {
  TRAINING,
  TRAINING_FAQ,
  TRUST_STRIP,
  VALUE_PROPS,
  ABOUT_SHORT,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `${TRAINING.headline} — Free 1-Hour Training`,
  description: TRAINING.subhead,
};

export default function TrainingPage() {
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
          <Link href="/training/cohort" className="text-sm text-text-secondary hover:text-ink">
            The Cohort →
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="container-x pt-16 pb-16 text-center md:pt-24">
        <div className="mx-auto inline-flex items-center rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs uppercase tracking-widest text-text-muted">
          {TRAINING.eyebrow}
        </div>
        <h1 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {TRAINING.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
          {TRAINING.subhead}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-5 py-2 text-sm">
            <span className="font-medium text-ink">{TRAINING.dateLabel}</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-secondary">{TRAINING.timeLabel}</span>
            <span className="text-text-muted">·</span>
            <span className="text-text-secondary">{TRAINING.durationLabel}</span>
          </span>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <RegistrationForm ctaLabel={TRAINING.ctaLabel} source="training-hero" />
          <p className="mt-3 text-xs text-text-muted">{TRAINING.noReplayNote}</p>
        </div>
        <div className="mt-10 flex justify-center">
          <CountdownTimer targetISO={TRAINING.dateISO} />
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="border-y border-ink/10 bg-cream-dark py-14">
        <div className="container-x">
          <p className="text-center text-sm text-text-secondary">{TRUST_STRIP}</p>
          <div className="mt-8">
            <LogoBar />
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24">
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">What you'll walk away with</div>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
              One hour. Real assets.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUE_PROPS.map((vp) => (
              <div key={vp.title} className="rounded-2xl border border-ink/10 bg-white p-7">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-cream">
                  ◆
                </div>
                <h3 className="font-serif text-xl text-ink">{vp.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{vp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-cream-dark py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center">
          <div className="aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-ink/10 bg-ink/5">
            {/* Placeholder — drop a real photo at /public/headshot.jpg */}
            <div className="flex h-full w-full items-center justify-center text-text-muted">
              Headshot
            </div>
          </div>
          <div>
            <div className="eyebrow">About Dawson</div>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              The person teaching this
            </h2>
            <p className="mt-5 text-text-secondary">{ABOUT_SHORT}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-x max-w-3xl">
          <div className="eyebrow text-center">FAQ</div>
          <h2 className="mt-3 text-center font-serif text-3xl leading-tight md:text-4xl">
            Questions
          </h2>
          <div className="mt-10">
            <FAQ items={TRAINING_FAQ} />
          </div>
        </div>
      </section>

      {/* SECOND CTA / FOOTER */}
      <section className="bg-ink py-20 text-cream">
        <div className="container-x max-w-2xl text-center">
          <div className="text-xs uppercase tracking-widest text-cream/50">{TRAINING.eyebrow}</div>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
            {TRAINING.dateLabel} · {TRAINING.timeLabel}
          </h2>
          <p className="mt-3 text-cream/70">{TRAINING.subhead}</p>
          <div className="mt-8">
            <RegistrationForm ctaLabel={TRAINING.ctaLabel} source="training-footer" />
          </div>
          <p className="mt-3 text-xs text-cream/50">{TRAINING.noReplayNote}</p>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-cream py-8">
        <div className="container-x flex flex-col gap-2 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <span>&copy; 2026 Dawson Russell.</span>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-ink">Home</Link>
            <Link href="/training/cohort" className="hover:text-ink">The Cohort</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
