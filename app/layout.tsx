import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dawsonrussell.com'),
  title: {
    default: 'Dawson Russell — AI-powered ads, shipped in days.',
    template: '%s · Dawson Russell',
  },
  description:
    'I make the kind of ads that used to take agencies eight weeks and two hundred grand. In a week. For a tenth of the price.',
  openGraph: {
    title: 'Dawson Russell — AI-powered ads, shipped in days.',
    description:
      'AI-native video ad agency. Cinematic creative in days, not months.',
    type: 'website',
    url: 'https://dawsonrussell.com',
    siteName: 'Dawson Russell',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawson Russell — AI-powered ads, shipped in days.',
    description: 'AI-native video ad agency.',
  },
  icons: { icon: '/favicon.ico' },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
