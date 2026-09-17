import Link from "next/link";
import "@/app/field-notes.css";
export function Header() {
  return (
    <header className="fn-header">
      <Link className="brand" href="/">
        <span className="monogram">dr.</span>Dawson Russell
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/notes">Field notes</Link>
        <Link href="/studio">Films & work</Link>
        <Link className="nav-sub" href="/#subscribe">
          Subscribe ↗
        </Link>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="fn-footer">
      <div>
        <span className="monogram">dr.</span>
        <span>Always creating.</span>
      </div>
      <nav aria-label="Footer navigation">
        <a href="https://x.com/DawsonRussell">X / Twitter ↗</a>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
      <small>© {new Date().getFullYear()} Dawson Russell · Austin, Texas</small>
    </footer>
  );
}
