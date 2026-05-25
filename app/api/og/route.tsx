import { ImageResponse } from '@vercel/og';
import { caseStudies } from '@/lib/work';

export const runtime = 'edge';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get('slug');
  const c = slug ? caseStudies.find((c) => c.slug === slug) : null;

  const title = c ? c.title : 'Dawson Russell';
  const subtitle = c
    ? `${c.client} · ${c.year}`
    : 'AI-powered ads. Shipped in days.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0A0A',
          color: '#F5F5F0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: '#888' }}>
          DAWSON RUSSELL
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 120, lineHeight: 1, letterSpacing: -3 }}>
            {title}
          </div>
          <div style={{ fontSize: 36, color: '#D4714E', marginTop: 24 }}>
            {subtitle}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
