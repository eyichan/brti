"use client";

import Script from "next/script";

/** Google Analytics 4 — replace GA_MEASUREMENT_ID with your actual ID */
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  if (!gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

/** Microsoft Clarity — replace CLARITY_ID with your actual ID */
export function MicrosoftClarity({ clarityId }: { clarityId: string }) {
  if (!clarityId) return null;
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window,document,"clarity","script","${clarityId}");
      `}
    </Script>
  );
}

/** Google AdSense — replace ADSENSE_CLIENT with your actual ca-pub-xxx ID */
export function GoogleAdSense({ clientId }: { clientId: string }) {
  if (!clientId) return null;
  return (
    <Script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

/**
 * Ad slot component for displaying individual ad units.
 * Usage: <AdUnit slot="1234567890" format="auto" />
 */
export function AdUnit({
  slot,
  format = "auto",
  responsive = true,
  className,
}: {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format={format}
        data-ad-slot={slot}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
      <Script id={`ad-${slot}`} strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}
