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
