export function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
      <div className="md:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#0A0A0A] border border-[var(--border-strong)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dawson.jpg"
            alt="Dawson Russell"
            className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
          />
        </div>
      </div>
      <div className="md:col-span-7 space-y-8">
        <div className="spec-label">Founder</div>
        <p className="display-thin text-3xl md:text-4xl text-white">
          I'm Dawson. Creative director, ex-capital-raise marketer, building
          AI-native ad creative for founders who'd rather ship than wait.
        </p>
        <p className="text-base md:text-lg text-[var(--muted-2)] leading-relaxed max-w-xl">
          The future of ad production is AI-native. Traditional agencies are
          bloated. Founders should test ten ideas in a month, not one. The
          tools finally caught up. This studio is what happens when you build
          the workflow from scratch.
        </p>
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border-strong)]">
          <Stat n="48hr" l="Quote turnaround" />
          <Stat n="5–7d" l="Project delivery" />
          <Stat n="10×" l="vs Agency cost" />
        </div>
      </div>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="display text-3xl md:text-4xl text-white">{n}</div>
      <div className="spec-label mt-2">{l}</div>
    </div>
  );
}
