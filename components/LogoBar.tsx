export function LogoBar() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex h-16 items-center justify-center rounded-lg bg-ink/5 text-[10px] uppercase tracking-widest text-text-muted"
        >
          Logo
        </div>
      ))}
    </div>
  );
}
