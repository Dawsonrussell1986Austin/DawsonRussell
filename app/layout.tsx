import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dawsonrussell.com'),
  title: {
    default: 'Dawson Russell — Award-winning, AI-powered brand films.',
    template: '%s · Dawson Russell',
  },
  description:
    'Cinematic ad creative, written and produced with the cutting edge of AI. Months of agency work in weeks.',
  openGraph: {
    title: 'Dawson Russell — Award-winning, AI-powered brand films.',
    description:
      'AI-native video ad agency. Cinematic creative in days, not months.',
    type: 'website',
    url: 'https://dawsonrussell.com',
    siteName: 'Dawson Russell',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawson Russell — Award-winning, AI-powered brand films.',
    description: 'AI-native video ad agency.',
  },
  icons: {
    icon: [
      { url: '/headshot.jpg', type: 'image/jpeg' },
    ],
    apple: '/headshot.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
