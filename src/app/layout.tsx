import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { isIndexingEnabled, siteUrl } from "@/lib/seo";

import "./globals.css";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl ?? undefined,
  title: {
    default: "Elora | Modern Bakım Deneyimi",
    template: "%s | Elora",
  },
  description: "Elora demo güzellik merkezi web sitesi.",
  icons: {
    icon: [
      { url: "/meta/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/meta/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/meta/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/meta/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/meta/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    siteName: "Elora",
    type: "website",
    images: [
      {
        url: "/meta/elora-og.png",
        width: 1200,
        height: 630,
        alt: "Elora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/meta/elora-og.png"],
  },
  robots: {
    index: isIndexingEnabled,
    follow: isIndexingEnabled,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={dmSans.variable} data-scroll-behavior="smooth" lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
