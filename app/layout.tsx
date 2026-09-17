import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dawsonrussell.com'),
  title: {
    default: 'Dawson Russell — AI, put to work.',
    template: '%s · Dawson Russell',
  },
  description:
    'Field notes from running an agency, building apps, and putting new AI to work.',
  openGraph: {
    title: 'Dawson Russell — AI, put to work.',
    description:
      'Real work, useful experiments, and field notes from Dawson Russell.',
    type: 'website',
    url: 'https://dawsonrussell.com',
    siteName: 'Dawson Russell',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dawson Russell — AI, put to work.',
    description: 'AI, put to work in a real business.',
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V2FH4YZNRJ"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V2FH4YZNRJ');
        `}
      </Script>
    </html>
  );
}
