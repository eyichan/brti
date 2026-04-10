import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  GoogleAnalytics,
  MicrosoftClarity,
  GoogleAdSense,
} from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BRTI — SBTI Brainrot Personality Test | Which Brainrot Type Are You?",
    template: "%s | BRTI",
  },
  description:
    "The SBTI brainrot personality test. Discover which iconic brainrot character matches your personality — like MBTI but way more unhinged. Two quiz versions: quick brainrot scan or deep classic SBTI edition.",
  keywords: [
    "SBTI brainrot",
    "brainrot SBTI",
    "brainrot personality test",
    "brainrot MBTI",
    "SBTI guidance",
    "brainrot animal",
    "BRTI",
    "brainrot quiz",
    "which brainrot character am I",
    "brainrot type indicator",
  ],
  metadataBase: new URL("https://sbtibrainrot.com"),
  alternates: { canonical: "https://sbtibrainrot.com" },
  openGraph: {
    title: "BRTI — SBTI Brainrot Personality Test",
    description:
      "MBTI is dead. Find your brainrot personality type with 16+ iconic characters. The original SBTI brainrot quiz.",
    type: "website",
    siteName: "BRTI",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BRTI — SBTI Brainrot Personality Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRTI — SBTI Brainrot Personality Test",
    description:
      "MBTI is dead. Find your brainrot personality type with 16+ iconic characters.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: { index: true, follow: true },
};

// Set these environment variables to enable analytics:
// NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_CLARITY_ID, NEXT_PUBLIC_ADSENSE_ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <GoogleAnalytics gaId={GA_ID} />
        <MicrosoftClarity clarityId={CLARITY_ID} />
        <GoogleAdSense clientId={ADSENSE_ID} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
