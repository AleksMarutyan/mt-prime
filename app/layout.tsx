import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./global.css";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mtprime.fr"),
  title: {
    default: "MT PRIME Logistique - Transport & Logistics Services in France",
    template: "%s | MT PRIME Logistique",
  },
  description:
    "Professional transport and logistics services in Cannes, France. Road transport, import-export, logistics supervision, and vehicle sales. DREAL authorized. Contact +33 7 44 77 08 02",
  authors: [{ name: "MT PRIME Logistique" }],
  creator: "MT PRIME Logistique",
  publisher: "MT PRIME Logistique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://mtprime.fr",
    languages: {
      en: "/en",
      fr: "/fr",
      it: "/it",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "it_IT"],
    url: "https://mtprime.fr",
    siteName: "MT PRIME Logistique",
    title: "MT PRIME Logistique - Professional Transport & Logistics Services",
    description:
      "Your trusted partner for transport and logistics in France. Road transport, import-export, and comprehensive logistics solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MT PRIME Logistique Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MT PRIME Logistique - Transport & Logistics France",
    description:
      "Professional transport and logistics services in Cannes, France",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    // Add your verification codes here when you get them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

// JSON-LD structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MT PRIME Logistique",
  url: "https://mtprime.fr",
  logo: "https://mtprime.fr/logo.png",
  description:
    "Professional transport and logistics services in Cannes, France",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cannes",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+33-7-44-77-08-02",
    contactType: "customer service",
    availableLanguage: ["French", "English", "Italian"],
  },
  sameAs: [
    // Add your social media URLs here
  ],
};

// This is the root layout - middleware should handle locale routing
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
