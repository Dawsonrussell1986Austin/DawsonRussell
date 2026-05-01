import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream-dark">
      <div className="container-x flex flex-col gap-4 py-10 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
        <span>&copy; 2026 Dawson Russell. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="/#contact" className="hover:text-ink">Contact</a>
          <Link href="/training" className="hover:text-ink">Training</Link>
          <a href="mailto:dawson@dawsonrussell.com" className="hover:text-ink">
            dawson@dawsonrussell.com
          </a>
        </div>
      </div>
    </footer>
  );
}
