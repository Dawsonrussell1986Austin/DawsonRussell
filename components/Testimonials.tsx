const testimonials = [
  {
    quote:
      'We had a finished ad in our inbox five days after the kickoff call. The thing actually performed.',
    name: 'Jane Doe',
    role: 'Head of Growth',
    company: 'Stealth DTC',
  },
  {
    quote:
      'Looks like a Super Bowl spot. Costs less than our last photoshoot. I don\'t know how he does it.',
    name: 'John Smith',
    role: 'Founder',
    company: 'Series A SaaS',
  },
  {
    quote:
      'Dawson rewrote what I thought an ad agency was supposed to be. We won\'t go back.',
    name: 'Alex Chen',
    role: 'CMO',
    company: 'Growth-stage brand',
  },
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border-strong)] border border-[var(--border-strong)]">
      {testimonials.map((t, i) => (
        <figure
          key={t.name}
          className="bg-black p-8 md:p-10 flex flex-col"
        >
          <div className="spec-label mb-8">
            — {String(i + 1).padStart(2, '0')}
          </div>
          <blockquote className="display-thin text-xl md:text-2xl leading-snug text-white flex-1">
            "{t.quote}"
          </blockquote>
          <figcaption className="mt-10 pt-6 border-t border-[var(--border-strong)]">
            <div className="font-semibold uppercase tracking-wider text-sm">
              {t.name}
            </div>
            <div className="text-xs text-[var(--muted-2)] mt-1 uppercase tracking-wider">
              {t.role} · {t.company}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
