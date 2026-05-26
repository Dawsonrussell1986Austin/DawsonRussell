'use client';

import MuxPlayer from '@mux/mux-player-react';
import { Caption } from './Media';

type Props = {
  playbackId: string;
  title?: string;
  caption?: string;
  aspect?: '16/9' | '21/9' | '9/16' | '1/1' | '4/5' | '3/2';
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  full?: boolean;
};

const aspectClass: Record<NonNullable<Props['aspect']>, string> = {
  '16/9': 'aspect-video',
  '21/9': 'aspect-[21/9]',
  '9/16': 'aspect-[9/16]',
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
  '3/2': 'aspect-[3/2]',
};

export function MuxVideo({
  playbackId,
  title,
  caption,
  aspect = '16/9',
  poster,
  autoplay = false,
  loop = false,
  muted = false,
  full,
}: Props) {
  return (
    <figure className={`my-12 md:my-16 ${full ? '' : 'mx-auto max-w-5xl'}`}>
      <div
        className={`relative overflow-hidden rounded-[20px] md:rounded-[28px] border border-[var(--border)] bg-[var(--surface)] ${aspectClass[aspect]}`}
      >
        <MuxPlayer
          playbackId={playbackId}
          metadata={{ video_title: title }}
          poster={poster || `https://image.mux.com/${playbackId}/thumbnail.webp`}
          autoPlay={autoplay}
          loop={loop}
          muted={muted || autoplay}
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            '--controls-backdrop-color': 'rgba(0,0,0,0.4)',
            '--media-object-fit': 'cover',
          }}
          accentColor="#FFFFFF"
        />
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

/** Silent looping background-style hero video (cinematic intro reel). */
export function MuxHero({
  playbackId,
  poster,
}: {
  playbackId: string;
  poster?: string;
}) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      poster={poster || `https://image.mux.com/${playbackId}/thumbnail.webp`}
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        '--controls': 'none',
        '--media-object-fit': 'cover',
      }}
    />
  );
}
