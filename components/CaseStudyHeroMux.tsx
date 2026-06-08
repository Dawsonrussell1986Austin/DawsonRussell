'use client';

import MuxPlayer from '@mux/mux-player-react/lazy';

export function CaseStudyHeroMux({
  playbackId,
  poster,
}: {
  playbackId: string;
  poster?: string;
}) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      autoPlay="muted"
      loop
      playsInline
      poster={poster || `https://image.mux.com/${playbackId}/thumbnail.webp`}
      accentColor="#FFFFFF"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        '--media-object-fit': 'cover',
      }}
    />
  );
}
