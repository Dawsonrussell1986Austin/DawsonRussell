import { Children, type ReactNode } from 'react';

type AspectRatio = '16/9' | '4/5' | '1/1' | '3/2' | '21/9' | '9/16';

const aspectClass: Record<AspectRatio, string> = {
  '16/9': 'aspect-video',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '21/9': 'aspect-[21/9]',
  '9/16': 'aspect-[9/16]',
};

function renderInner({
  src,
  poster,
  alt = '',
  autoplay = true,
  loop = true,
  controls = false,
}: {
  src: string;
  poster?: string;
  alt?: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
}) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);
  return isVideo ? (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay={autoplay}
      muted
      loop={loop}
      playsInline
      controls={controls}
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
  );
}

export function Media({
  src,
  poster,
  alt = '',
  aspect = '16/9',
  caption,
  full,
  loop = true,
  autoplay = true,
  controls = false,
}: {
  src: string;
  poster?: string;
  alt?: string;
  aspect?: AspectRatio;
  caption?: string;
  full?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  controls?: boolean;
}) {
  return (
    <figure className={`my-12 md:my-16 ${full ? '' : 'mx-auto max-w-5xl'}`}>
      <div
        className={`relative overflow-hidden rounded-[20px] md:rounded-[28px] border border-[var(--border)] bg-[var(--surface)] ${aspectClass[aspect]}`}
      >
        {renderInner({ src, poster, alt, autoplay, loop, controls })}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

export function MediaRow({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  const count = Children.count(children);
  const gridCols =
    count === 2 ? 'md:grid-cols-2' : count === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3';
  return (
    <figure className="my-12 md:my-16">
      <div className={`grid grid-cols-1 ${gridCols} gap-4 md:gap-5`}>{children}</div>
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
}

export function Tile({
  src,
  poster,
  alt = '',
  aspect = '4/5',
}: {
  src: string;
  poster?: string;
  alt?: string;
  aspect?: AspectRatio;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] md:rounded-[24px] border border-[var(--border)] bg-[var(--surface)] ${aspectClass[aspect]}`}
    >
      {renderInner({ src, poster, alt })}
    </div>
  );
}

export function Reel({
  src,
  poster,
  caption,
}: {
  src: string;
  poster?: string;
  caption?: string;
}) {
  return <Media src={src} poster={poster} aspect="21/9" caption={caption} full />;
}

export function Caption({ children }: { children: ReactNode }) {
  return (
    <figcaption className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] text-center">
      {children}
    </figcaption>
  );
}

export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <div className="my-20 md:my-28 mx-auto max-w-3xl text-center">
      <div className="display-thin text-3xl md:text-4xl lg:text-5xl text-white">
        “{children}”
      </div>
      {attribution && <div className="mt-6 spec-label">— {attribution}</div>}
    </div>
  );
}
