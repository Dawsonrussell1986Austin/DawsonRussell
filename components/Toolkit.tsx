const tools = [
  'CLAUDE',
  'VEO',
  'SORA',
  'KLING',
  'RUNWAY',
  'MIDJOURNEY',
  'FINAL CUT PRO',
  'FRAME.IO',
];

export function Toolkit() {
  return (
    <div className="border-y border-[var(--border-strong)]">
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[var(--border-strong)] border-x border-[var(--border-strong)]">
        {tools.map((t, i) => (
          <div
            key={t}
            className={`py-14 flex flex-col items-center justify-center gap-2 group ${
              i >= 4 ? 'sm:border-t border-[var(--border-strong)]' : ''
            }`}
          >
            <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--muted)]">
              — {String(i + 1).padStart(2, '0')}
            </span>
            <span className="display text-xl md:text-2xl text-white/80 group-hover:text-white transition-colors duration-500">
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
