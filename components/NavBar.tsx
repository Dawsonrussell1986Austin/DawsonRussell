'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './Button';

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
          ? 'bg-[rgba(10,10,10,0.78)] backdrop-blur-xl border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tight text-[var(--fg)]">
          Dawson Russell
        </Link>
        <div className="hidden md:flex items-center gap-10 text-sm text-[var(--fg)]/80">
          <Link href="/#work" className="hover:text-[var(--fg)] transition">Work</Link>
          <Link href="/#process" className="hover:text-[var(--fg)] transition">Process</Link>
          <Link href="/#services" className="hover:text-[var(--fg)] transition">Services</Link>
          <Link href="/#about" className="hover:text-[var(--fg)] transition">About</Link>
        </div>
        <Button href="https://cal.com/dawsonrussell" external variant="primary">
          Book a call
        </Button>
      </div>
    </nav>
  );
}
