'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none px-4 md:px-6">
        <nav
          className={`pointer-events-auto mt-4 w-full md:w-auto md:max-w-[1100px] rounded-full border border-[var(--border-strong)] transition-all duration-500 ${
            scrolled
              ? 'bg-[rgba(19,19,24,0.9)] backdrop-blur-xl'
              : 'bg-[rgba(19,19,24,0.65)] backdrop-blur-md'
          }`}
        >
          <div className="h-[56px] pl-5 pr-2 flex items-center justify-between gap-3 md:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-sm font-medium text-white whitespace-nowrap"
            >
              <span className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-white/15 bg-[var(--surface-2)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/headshot.jpg"
                  alt="Dawson Russell"
                  className="absolute inset-0 w-full h-full object-cover scale-125"
                  style={{ objectPosition: 'center 35%' }}
                />
              </span>
              <span>Dawson Russell</span>
            </Link>

            <div className="hidden md:flex items-center gap-1 text-sm text-white/70">
              <Pill href="/#work">Work</Pill>
              <Pill href="/#process">Process</Pill>
              <Pill href="/about">About</Pill>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#apply"
                className="btn-primary inline-flex items-center px-4 md:px-5 py-2.5"
              >
                Apply
              </a>
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu sheet */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="absolute top-[80px] left-4 right-4 rounded-[24px] border border-[var(--border-strong)] bg-[var(--surface)] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              <MobileLink href="/#work" onClose={() => setOpen(false)}>Work</MobileLink>
              <MobileLink href="/#process" onClose={() => setOpen(false)}>Process</MobileLink>
              <MobileLink href="/about" onClose={() => setOpen(false)}>About</MobileLink>
              <MobileLink href="#apply" onClose={() => setOpen(false)}>Apply</MobileLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Pill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full hover:bg-white/5 hover:text-white transition"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClose,
  children,
}: {
  href: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="display text-3xl text-white py-3 border-b border-[var(--border-strong)] last:border-b-0"
    >
      {children}
    </Link>
  );
}
