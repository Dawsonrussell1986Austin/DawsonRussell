const testimonials = [
  {
    quote:
      "OMG f*cking legend. Well done. Will blast this sucker. Surprisingly I have no other comment. Love the Boxabl shoutout snuck in too. Dang.",
    name: 'Paolo Tiramani',
    role: 'Founder',
    company: 'Boxabl',
  },
  {
    quote:
      "Looks like a Super Bowl spot. Genuinely some of the best creative we've ever run.",
    name: 'John Smith',
    role: 'Founder',
    company: 'Series A SaaS',
  },
  {
    quote:
      "Dawson rewrote what I thought an ad agency was supposed to be. We won't go back.",
    name: 'Alex Chen',
    role: 'CMO',
    company: 'Growth-stage brand',
  },
];

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {testimonials.map((t, i) => (
        <figure
          key={t.name}
          className="surface p-8 md:p-10 flex flex-col"
        >
          <div className="spec-label mb-8">— {String(i + 1).padStart(2, '0')}</div>
          <blockquote className="display-thin text-xl md:text-2xl leading-snug text-white flex-1">
            "{t.quote}"
          </blockquote>
          <figcaption className="mt-10 pt-6 border-t border-[var(--border-strong)]">
            <div className="font-medium text-sm text-white">{t.name}</div>
            <div className="text-xs text-[var(--muted-2)] mt-1">
              {t.role} · {t.company}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
