import type { Metadata } from 'next';
import MuxPlayer from '@mux/mux-player-react/lazy';

export const metadata: Metadata = {
  title: '1999ad',
  robots: { index: false, follow: false },
};

const PLAYBACK_ID = 'U9MMJRxXVeboGhvjxvopAdkxYjkUi00UcbMkroLKpkcg';

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-6xl aspect-video relative overflow-hidden rounded-[20px] md:rounded-[28px]">
        <MuxPlayer
          playbackId={PLAYBACK_ID}
          poster={`https://image.mux.com/${PLAYBACK_ID}/thumbnail.webp`}
          playsInline
          accentColor="#FFFFFF"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            '--media-object-fit': 'contain',
          }}
        />
      </div>
    </main>
  );
}
