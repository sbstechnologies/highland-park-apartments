import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "react-hot-toast";
import { Instrument_Serif } from "next/font/google";

import "@/app/globals.css";

import DisableInspect from "@/app/components/DisableInspect";
import SmoothScroll from "@/app/components/SmoothScroll";
import Script from "next/script";
import CookieConsent from "@/app/components/CookieConsent";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leasinghighlandparkapts.com";

const COMPANY_NAME =
  process.env.NEXT_PUBLIC_COMPANY_NAME ?? "Highland Park Apartment Homes";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "9038920188";

const LEASING_EMAIL =
  process.env.NEXT_PUBLIC_EMAIL ?? "hparkmanager@livenjoymgt.com";

const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS ?? "1925 W Taylor St";

const CITY = process.env.NEXT_PUBLIC_CITY ?? "Sherman";

const STATE = process.env.NEXT_PUBLIC_STATE ?? "TX";

const ZIP = process.env.NEXT_PUBLIC_ZIP ?? "75092";

const OG_IMAGE = `/logo.png`;

const FULL_PHONE = `+1${PHONE}`;

const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

/* =========================================================
   DISPLAY FONT
========================================================= */

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E3872",
  colorScheme: "light",
};

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Highland Park Apartment Homes | Apartments in Sherman, TX",
    template: "%s | Highland Park Apartment Homes",
  },

  description:
    "Discover Highland Park Apartment Homes in Sherman, Texas. Explore comfortable 1 and 2 bedroom apartments, floor plans, community amenities, and leasing options.",

  keywords: [
    "Highland Park Apartment Homes",
    "Highland Park Apartments",
    "Highland Park Apartments Sherman TX",
    "Sherman Apartments",
    "Apartments in Sherman TX",
    "Sherman Texas Apartments",
    "1 Bedroom Apartments Sherman TX",
    "2 Bedroom Apartments Sherman TX",
    "Apartments near Sherman TX",
    "Apartments for rent in Sherman",
    "Apartment homes Sherman Texas",
    "Highland Park Sherman TX",
  ],

  applicationName: COMPANY_NAME,

  authors: [
    {
      name: COMPANY_NAME,
      url: SITE_URL,
    },
  ],

  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,

  category: "Real Estate",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  manifest: "/site.webmanifest",

  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,

    title: "Highland Park Apartment Homes | Apartments in Sherman, TX",

    description:
      "Explore 1 and 2 bedroom apartment homes, floor plans, community amenities, and convenient living at Highland Park Apartment Homes in Sherman, Texas.",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Highland Park Apartment Homes in Sherman, Texas",
      },
    ],
  },

  /* =======================================================
     TWITTER
  ======================================================= */

  twitter: {
    card: "summary_large_image",

    title: "Highland Park Apartment Homes | Apartments in Sherman, TX",

    description:
      "Explore 1 and 2 bedroom apartments, floor plans, community amenities, and convenient living at Highland Park Apartment Homes.",

    images: [OG_IMAGE],
  },

  /* =======================================================
     FAVICONS
  ======================================================= */

  icons: {
    icon: [
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  referrer: "origin-when-cross-origin",
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const apartmentSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",

  "@id": `${SITE_URL}/#apartment-complex`,

  name: COMPANY_NAME,

  description:
    "Highland Park Apartment Homes offers comfortable one and two bedroom apartment homes in Sherman, Texas.",

  url: SITE_URL,

  image: [OG_IMAGE],

  telephone: FULL_PHONE,

  email: LEASING_EMAIL,

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS,
    addressLocality: CITY,
    addressRegion: STATE,
    postalCode: ZIP,
    addressCountry: "US",
  },

  contactPoint: {
    "@type": "ContactPoint",
    telephone: FULL_PHONE,
    contactType: "leasing",
    email: LEASING_EMAIL,
    areaServed: "US",
    availableLanguage: ["English"],
  },

  numberOfBedrooms: ["1", "2"],

  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Swimming Pool",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Laundry Facility",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Playground",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Courtyard",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Picnic Area",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Grill",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Walk-In Closets",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Dishwasher",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Refrigerator",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Air Conditioning",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Washer/Dryer Hookups",
      value: true,
    },
  ],
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={instrumentSerif.variable}
    >
      <body className="min-h-screen font-sans antialiased">
        {/* Google Tag Manager */}
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GTM_ID && (
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
          )}

        {clarityId && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}

        {/* Structured Data */}
        <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(apartmentSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* Production Protection */}
        {process.env.NODE_ENV === "production" && <DisableInspect />}

        <Script
          id="rentbamboo-charles"
          src="https://charles.rentbamboo.com/w"
          data-client-id="bamboo_j9idu9q9"
          data-position="right"
          data-color="#1E3872"
        />

        {/* Smooth Scroll */}
        <SmoothScroll />
        <CookieConsent />

        {/* Application */}
        {children}

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#1E3872",
              color: "#ffffff",
              borderRadius: "12px",
              fontFamily: '"Plus Jakarta Sans Variable", sans-serif',
            },
          }}
        />
      </body>
    </html>
  );
}
