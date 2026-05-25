'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { caseStudies } from '@/lib/work';

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((c, i) => (
        <WorkCard key={c.slug} c={c} featured={i === 0} />
      ))}
    </div>
  );
}

function WorkCard({
  c,
  featured,
}: {
  c: (typeof caseStudies)[number];
  featured?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <Link
      href={`/work/${c.slug}`}
      className={`card-work group block ${featured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#111] border border-[var(--border)]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          poster={c.poster}
        >
          <source src={c.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.6)] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
      <div className="mt-5 flex items-baseline justify-between">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[var(--fg)]">
            {c.title}
          </h3>
          <div className="mt-1 text-sm text-[var(--muted)]">
            {c.client} · {c.year}
          </div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] group-hover:text-[var(--primary)] transition">
          View →
        </div>
      </div>
    </Link>
  );
}
