import Script from "next/script";

// GA4 ID and Meta Pixel ID are both public — they ship in every page
// that loads them — so hardcoding the fallback guarantees they fire
// even without env config.
const DEFAULT_GA_ID = "G-V2FH4YZNRJ";
const DEFAULT_META_PIXEL_ID = "1395593771893604";

export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_ID;
  const pixel = process.env.NEXT_PUBLIC_META_PIXEL_ID || DEFAULT_META_PIXEL_ID;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ga}');
        `}
      </Script>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixel}');
          fbq('track', 'PageView');
        `}
      </Script>
      {/* noscript fallback for users with JS disabled */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixel}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
