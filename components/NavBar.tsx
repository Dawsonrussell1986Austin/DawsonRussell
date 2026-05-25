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
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 h-[64px] flex items-center justify-between">
        <Link
          href="/"
          className="text-[13px] font-bold tracking-[0.3em] uppercase text-white"
        >
          Dawson Russell
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-medium text-white/70">
          <Link href="/#work" className="hover:text-white transition">Work</Link>
          <Link href="/#process" className="hover:text-white transition">Process</Link>
          <Link href="/#services" className="hover:text-white transition">Services</Link>
          <Link href="/#about" className="hover:text-white transition">About</Link>
        </div>
        <a
          href="https://cal.com/dawsonrussell"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center px-5 py-2.5"
        >
          Book a call
        </a>
      </div>
    </nav>
  );
}
