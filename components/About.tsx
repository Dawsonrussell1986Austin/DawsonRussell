import Image from 'next/image';

export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
      <div className="md:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111] border border-[var(--border)]">
          {/* Using a regular img to avoid blocking on next/image config */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dawson.jpg"
            alt="Dawson Russell"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-7 space-y-6">
        <p className="text-xl md:text-2xl font-serif leading-snug tracking-tight text-[var(--fg)]/90">
          I'm Dawson — a creative director who used to run marketing for capital
          raises, and now builds AI-native ad creative for founders and growth
          teams who'd rather ship than wait.
        </p>
        <p className="text-lg text-[var(--muted)] leading-relaxed">
          I believe the future of ad production is AI-native. Traditional
          agencies are bloated. Founders should be able to test ten ideas in a
          month, not one. The tools finally caught up. This studio is what
          happens when you build the workflow from scratch.
        </p>
      </div>
    </div>
  );
}
