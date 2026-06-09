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

export const metadata: Metadata = {
  title: "THE TERMINAL — Cafe & European Kitchen",
  description:
    "A small European kitchen at the end of an old freight line — slow mornings, lantern-lit evenings, and a kitchen that doesn't rush.",
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
