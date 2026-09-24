import Link from "next/link";
import "@/app/field-notes.css";

export function Header() {
  return (
    <header className="fn-header">
      <Link className="brand" href="/">Dawson Russell</Link>
      <nav aria-label="Main navigation">
        <Link href="/about">About</Link>
        <Link href="/notes">Notes</Link>
        <a href="mailto:dawson@dawsonrussell.com">Email</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="fn-footer">
      <span>© {new Date().getFullYear()} Dawson Russell</span>
      <nav aria-label="Footer navigation">
        <a href="https://x.com/DawsonRussell" target="_blank" rel="noopener noreferrer">X</a>
        <Link href="/privacy">Privacy</Link>
      </nav>
    </footer>
  );
}
