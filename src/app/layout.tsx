import type { Metadata, Viewport } from "next";
import { Oswald, Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import "./index.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});

const SITE_TITLE = "THE TERMINAL — Cafe & European Kitchen";
const SITE_DESCRIPTION =
  "A small European kitchen at the end of an old freight line — slow mornings, lantern-lit evenings, and a kitchen that doesn't rush.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "THE TERMINAL",
    type: "website",
    images: [
      {
        url: "/images/logo-the-terminal.avif",
        width: 1195,
        height: 896,
        alt: "THE TERMINAL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/logo-the-terminal.avif"],
  },
};

export const viewport: Viewport = {
  themeColor: "#3b241b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oswald.variable} ${cormorant.variable} ${pinyon.variable}`}
    >
      <body className="overflow-x-hidden antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
