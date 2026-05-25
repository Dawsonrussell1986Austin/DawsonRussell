const tools = [
  'Claude',
  'Veo',
  'Sora',
  'Kling',
  'Runway',
  'Midjourney',
  'Final Cut Pro',
  'Frame.io',
];

export function Toolkit() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
      {tools.map((t) => (
        <div
          key={t}
          className="bg-[var(--bg)] py-12 flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-500"
        >
          <span className="font-serif text-xl md:text-2xl tracking-tight">{t}</span>
        </div>
      ))}
    </div>
  );
}
