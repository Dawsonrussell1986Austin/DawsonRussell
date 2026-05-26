'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto mt-4 mx-4 md:mx-6 w-[calc(100%-2rem)] md:w-auto md:max-w-[1100px] rounded-full border border-[var(--border-strong)] transition-all duration-500 ${
          scrolled ? 'bg-[rgba(19,19,24,0.85)] backdrop-blur-xl' : 'bg-[rgba(19,19,24,0.55)] backdrop-blur-md'
        }`}
      >
        <div className="h-[56px] px-3 md:px-5 flex items-center justify-between gap-2 md:gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 pl-3 pr-2 text-sm font-medium text-white"
          >
            <span className="hidden sm:inline">Dawson Russell</span>
          </Link>
          <div className="hidden md:flex items-center gap-1 text-sm text-white/70">
            <Pill href="/#work">Work</Pill>
            <Pill href="/#process">Process</Pill>
            <Pill href="/about">About</Pill>
          </div>
          <a
            href="#apply"
            className="btn-primary inline-flex items-center px-5 py-2.5"
          >
            Apply
          </a>
        </div>
      </nav>
    </div>
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
