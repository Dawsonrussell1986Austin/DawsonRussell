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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="rounded-2xl border border-[var(--border)] bg-[#0F0F0F] p-8 md:p-10 flex flex-col"
        >
          <blockquote className="font-serif text-xl md:text-2xl leading-snug tracking-tight text-[var(--fg)]/90 flex-1">
            "{t.quote}"
          </blockquote>
          <figcaption className="mt-8 pt-6 border-t border-[var(--border)]">
            <div className="font-medium">{t.name}</div>
            <div className="text-sm text-[var(--muted)]">
              {t.role}, {t.company}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
