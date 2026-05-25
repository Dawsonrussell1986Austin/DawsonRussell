import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-strong)] bg-black">
      <Container className="py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <Link
              href="/"
              className="display text-2xl tracking-tight text-white"
            >
              Dawson Russell
            </Link>
            <p className="mt-4 text-sm text-[var(--muted-2)] leading-relaxed max-w-xs">
              AI-native video ad agency. Cinematic creative in days, not months.
            </p>
            <div className="mt-6 spec-label">Austin, TX</div>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="spec-label mb-2">Site</div>
            <Link href="/#work" className="hover:text-[var(--primary)] transition uppercase tracking-wider text-xs">Work</Link>
            <Link href="/#process" className="hover:text-[var(--primary)] transition uppercase tracking-wider text-xs">Process</Link>
            <Link href="/#about" className="hover:text-[var(--primary)] transition uppercase tracking-wider text-xs">About</Link>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <div className="spec-label mb-2">Connect</div>
            <a href="https://cal.com/dawsonrussell" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition uppercase tracking-wider text-xs">Book a call</a>
            <a href="mailto:dawson@dawsonrussell.com" className="hover:text-[var(--primary)] transition uppercase tracking-wider text-xs">Email</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition uppercase tracking-wider text-xs">Instagram</a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition uppercase tracking-wider text-xs">X / Twitter</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition uppercase tracking-wider text-xs">LinkedIn</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[var(--border-strong)] flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono tracking-[0.25em] text-[var(--muted)] uppercase">
          <div>© {new Date().getFullYear()} Dawson Russell</div>
          <div>Built by Dawson, in Austin</div>
        </div>
      </Container>
    </footer>
  );
}
