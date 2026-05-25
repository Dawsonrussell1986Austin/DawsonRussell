import { Button } from './Button';

const tiers = [
  {
    name: 'Single Ad',
    price: 'Starting at $4,500',
    body: 'One finished ad in 5–7 days. Script, storyboard, generation, edit, captions, delivery.',
    features: ['One concept', '5–7 day turnaround', 'Platform-cut deliverables'],
  },
  {
    name: 'Campaign',
    price: 'Starting at $12,000',
    body: 'Three to five ads from one shoot day\'s worth of generation. Best for testing creative.',
    features: ['3–5 ad variants', 'Shared visual world', 'Creative testing matrix'],
    featured: true,
  },
  {
    name: 'Retainer',
    price: '$8,000/month',
    body: 'Two ads per month, ongoing strategy, unlimited revisions. Best for brands shipping content constantly.',
    features: ['2 ads / month', 'Ongoing strategy', 'Unlimited revisions'],
  },
];

export function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={`relative rounded-2xl p-8 md:p-10 border transition-all duration-500 ${
            t.featured
              ? 'bg-[var(--primary)]/[0.04] border-[var(--primary)]/40'
              : 'bg-[#0F0F0F] border-[var(--border)] hover:border-[var(--fg)]/20'
          }`}
        >
          {t.featured && (
            <div className="absolute -top-3 left-8 px-3 py-1 bg-[var(--primary)] text-[var(--bg)] text-[10px] font-mono uppercase tracking-[0.2em] rounded-full">
              Most popular
            </div>
          )}
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            {t.name}
          </div>
          <div className="mt-4 font-serif text-3xl md:text-4xl tracking-tight">
            {t.price}
          </div>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">{t.body}</p>
          <ul className="mt-8 space-y-3 text-sm">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-[var(--primary)] mt-1">—</span>
                <span className="text-[var(--fg)]/80">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button
              href="https://cal.com/dawsonrussell"
              external
              variant={t.featured ? 'primary' : 'ghost'}
              withArrow
              className="w-full justify-center"
            >
              Start a project
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
