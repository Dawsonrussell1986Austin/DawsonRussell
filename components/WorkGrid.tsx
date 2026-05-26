'use client';

import Link from 'next/link';
import { useRef } from 'react';
import MuxPlayer from '@mux/mux-player-react/lazy';
import { caseStudies, type CaseStudy } from '@/lib/work';

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {caseStudies.map((c, i) => (
        <WorkCard key={c.slug} c={c} index={i} featured={i === 0} />
      ))}
    </div>
  );
}

function WorkCard({
  c,
  featured,
}: {
  c: CaseStudy;
  index: number;
  featured?: boolean;
}) {
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
      className={`card-work group block surface overflow-hidden ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="relative aspect-video w-full overflow-hidden">
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
        ) : (
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
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="p-6 md:p-7 flex items-baseline justify-between">
        <div>
          <div className="spec-label mb-2">{c.client}</div>
          <h3 className="display text-2xl md:text-3xl text-white">{c.title}</h3>
        </div>
        <div className="font-mono text-[11px] tracking-[0.2em] text-white/50">
          {c.year}
        </div>
      </div>
    </Link>
  );
}
