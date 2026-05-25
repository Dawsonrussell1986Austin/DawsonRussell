import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="font-serif text-2xl tracking-tight">
              Dawson Russell
            </Link>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed max-w-xs">
              AI-native video ad agency. Cinematic creative in days, not months.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="font-mono uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-2">
              Links
            </div>
            <Link href="/#work" className="hover:text-[var(--primary)] transition">Work</Link>
            <Link href="/#about" className="hover:text-[var(--primary)] transition">About</Link>
            <a
              href="https://cal.com/dawsonrussell"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="font-mono uppercase tracking-[0.2em] text-xs text-[var(--muted)] mb-2">
              Social
            </div>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition">Instagram</a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition">X / Twitter</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition">LinkedIn</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between gap-4 text-xs text-[var(--muted)]">
          <div>© {new Date().getFullYear()} Dawson Russell.</div>
          <div>Built by Dawson, in Austin.</div>
        </div>
      </Container>
    </footer>
  );
}
