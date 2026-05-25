'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { caseStudies } from '@/lib/work';

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-strong)] border border-[var(--border-strong)]">
      {caseStudies.map((c, i) => (
        <WorkCard key={c.slug} c={c} index={i} />
      ))}
    </div>
  );
}

function WorkCard({
  c,
  index,
}: {
  c: (typeof caseStudies)[number];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const n = String(index + 1).padStart(2, '0');
  return (
    <Link
      href={`/work/${c.slug}`}
      className="card-work group block bg-black"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const v = videoRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#0A0A0A]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-5 left-5 font-mono text-[10px] tracking-[0.25em] text-white/70 uppercase">
          — {n}
        </div>
        <div className="absolute bottom-5 right-5 font-mono text-[10px] tracking-[0.25em] text-white/70 uppercase opacity-0 group-hover:opacity-100 transition">
          View →
        </div>
      </div>
      <div className="p-6 md:p-8 flex items-baseline justify-between border-t border-[var(--border-strong)]">
        <div>
          <div className="spec-label mb-2">{c.client}</div>
          <h3 className="display text-3xl md:text-4xl text-white">{c.title}</h3>
        </div>
        <div className="font-mono text-[11px] tracking-[0.25em] text-white/50 uppercase">
          {c.year}
        </div>
      </div>
    </Link>
  );
}
