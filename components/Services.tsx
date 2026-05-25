const tiers = [
  {
    name: 'Single Ad',
    code: '— 01',
    price: '$4,500',
    unit: 'STARTING',
    body: 'One finished ad in 5–7 days. Script, storyboard, generation, edit, captions, delivery.',
    features: ['One concept', '5–7 day turnaround', 'Platform-cut deliverables'],
  },
  {
    name: 'Campaign',
    code: '— 02',
    price: '$12,000',
    unit: 'STARTING',
    body: 'Three to five ads from one block of generation. Best for testing creative.',
    features: ['3–5 ad variants', 'Shared visual world', 'Creative testing matrix'],
    featured: true,
  },
  {
    name: 'Retainer',
    code: '— 03',
    price: '$8,000',
    unit: 'PER MONTH',
    body: 'Two ads per month, ongoing strategy, unlimited revisions. Best for brands shipping constantly.',
    features: ['2 ads / month', 'Ongoing strategy', 'Unlimited revisions'],
  },
];

export function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border-strong)] border border-[var(--border-strong)]">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={`relative p-8 md:p-10 flex flex-col ${
            t.featured ? 'bg-[#0F0F0F]' : 'bg-black'
          }`}
        >
          {t.featured && (
            <div className="absolute top-0 left-0 right-0 h-px bg-[var(--primary)]" />
          )}
          <div className="flex items-center justify-between mb-10">
            <span className="spec-label">{t.code}</span>
            {t.featured && (
              <span className="font-mono text-[10px] tracking-[0.25em] text-white uppercase">
                Most popular
              </span>
            )}
          </div>

          <div>
            <div className="display text-3xl text-white mb-4">{t.name}</div>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="display text-5xl md:text-6xl text-white">
                {t.price}
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--muted)]">
                {t.unit}
              </span>
            </div>
          </div>

          <p className="text-[var(--muted-2)] leading-relaxed text-[15px]">
            {t.body}
          </p>

          <ul className="mt-10 space-y-3 text-sm flex-1">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1 font-mono text-xs">
                  ▸
                </span>
                <span className="text-white/85">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://cal.com/dawsonrussell"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-12 inline-flex items-center justify-center px-6 py-4 ${
              t.featured ? 'btn-danger' : 'btn-ghost'
            }`}
          >
            Start a project →
          </a>
        </div>
      ))}
    </div>
  );
}
