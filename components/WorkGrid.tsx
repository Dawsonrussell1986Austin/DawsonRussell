'use client';

import Link from 'next/link';
import { useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react/lazy';
import { caseStudies, type CaseStudy } from '@/lib/work';

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {caseStudies.map((c) => (
        <WorkCard key={c.slug} c={c} />
      ))}
    </div>
  );
}

function WorkCard({ c }: { c: CaseStudy }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onEnter = () => {
    if (c.muxPlaybackId || c.autoplay) return;
    videoRef.current?.play().catch(() => {});
  };
  const onLeave = () => {
    if (c.muxPlaybackId || c.autoplay) return;
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <Link
      href={`/work/${c.slug}`}
      className="card-work group block surface overflow-hidden"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--surface-2)]">
        {c.muxPlaybackId ? (
          <MuxPlayer
            playbackId={c.muxPlaybackId}
            autoPlay={c.autoplay ? 'muted' : false}
            loop
            muted
            playsInline
            poster={
              c.poster ||
              `https://image.mux.com/${c.muxPlaybackId}/thumbnail.webp`
            }
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              '--controls': 'none',
              '--media-object-fit': 'cover',
            }}
          />
        ) : c.heroVideo ? (
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
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
            <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
              {c.badge || 'Coming soon'}
            </div>
            <div className="display text-2xl md:text-3xl text-white/85">
              {c.title}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
        {c.badge && (c.muxPlaybackId || c.heroVideo) && (
          <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-white/90 bg-black/55 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/15">
            {c.badge}
          </div>
        )}
      </div>
      <div className="p-6 md:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <div className="min-w-0">
            <div className="spec-label mb-2">{c.client}</div>
            <h3 className="display text-2xl md:text-3xl text-white leading-[1.15] pb-[0.12em]">
              {c.title}
            </h3>
          </div>
          <div className="font-mono text-[11px] tracking-[0.2em] text-white/50 shrink-0">
            {c.year}
          </div>
        </div>
        {c.excerpt && (
          <p className="mt-4 text-sm md:text-[15px] text-[var(--muted-2)] leading-relaxed">
            {c.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
