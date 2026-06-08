'use client';

import { useState } from 'react';
import MuxPlayer from '@mux/mux-player-react/lazy';

export function CaseStudyHeroMux({
  playbackId,
  poster,
}: {
  playbackId: string;
  poster?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative w-full max-w-5xl mx-auto overflow-hidden bg-black aspect-[16/9] transition-[border-radius] duration-300 ${
        playing
          ? 'rounded-none border border-transparent'
          : 'rounded-[28px] md:rounded-[40px] border border-[var(--border)]'
      }`}
    >
      <MuxPlayer
        playbackId={playbackId}
        playsInline
        poster={poster || `https://image.mux.com/${playbackId}/thumbnail.webp`}
        accentColor="#FFFFFF"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          '--media-object-fit': 'contain',
        }}
      />
    </div>
  );
}
