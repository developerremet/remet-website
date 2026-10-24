import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces-Variable.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/Fraunces-Italic-Variable.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = localFont({
  src: [{ path: "./fonts/HankenGrotesk-Variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Remet: verified people nearby, a real place to meet", template: "%s · Remet" },
  description:
    "See who is out and open right now, talk for five minutes, then meet at a public partner venue. Every account is identity-verified. 18+ only. Opening in Indore.",
  openGraph: { siteName: "Remet", type: "website", locale: "en_IN", url: site.url },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#E8E2D6", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
