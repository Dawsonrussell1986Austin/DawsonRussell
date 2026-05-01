import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-ink/5 bg-cream/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-cream">
            DR
          </span>
          <span className="text-sm font-medium tracking-tight">Dawson Russell</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-text-secondary md:flex">
          <a href="/#why" className="hover:text-ink">Why us</a>
          <a href="/#work" className="hover:text-ink">What we build</a>
          <a href="/#process" className="hover:text-ink">Process</a>
          <a href="/#pricing" className="hover:text-ink">Pricing</a>
          <Link href="/training" className="hover:text-ink">Training</Link>
        </div>
        <a href="/#contact" className="btn-primary text-xs">Start a project</a>
      </div>
    </nav>
  );
}
