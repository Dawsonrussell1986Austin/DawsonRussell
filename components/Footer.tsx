import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="pb-10">
      <Container>
        <div className="surface-lg p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="col-span-2">
              <Link href="/" className="display text-2xl text-white">
                Dawson Russell
              </Link>
              <p className="mt-4 text-sm text-[var(--muted-2)] leading-relaxed max-w-xs">
                AI-native video ad agency. Award-winning storytelling, shipped
                in weeks.
              </p>
              <div className="mt-6 spec-label">Austin, TX</div>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="spec-label mb-2">Site</div>
              <Link href="/#work" className="hover:text-white transition text-[13px] text-white/70">Work</Link>
              <Link href="/#process" className="hover:text-white transition text-[13px] text-white/70">Process</Link>
              <Link href="/about" className="hover:text-white transition text-[13px] text-white/70">About</Link>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="spec-label mb-2">Connect</div>
              <a href="#apply" className="hover:text-white transition text-[13px] text-white/70">Apply</a>
              <a href="mailto:dawson@dawsonrussell.com" className="hover:text-white transition text-[13px] text-white/70">Email</a>
              <a href="https://instagram.com/dawsonrussell" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-[13px] text-white/70">Instagram</a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-[13px] text-white/70">X / Twitter</a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-[13px] text-white/70">LinkedIn</a>
            </div>
          </div>
          <div className="mt-14 pt-6 border-t border-[var(--border-strong)] flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono tracking-[0.25em] text-[var(--muted)] uppercase">
            <div>© {new Date().getFullYear()} Dawson Russell</div>
            <div>Built by Dawson, in Austin</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
