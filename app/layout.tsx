import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crypto Mondays Las Vegas — Rooftop Networking at Legacy Club",
  description:
    "An elevated rooftop networking experience for crypto, AI, Web3, and emerging technology builders. Every Monday at Legacy Club, Circa Resort & Casino, Downtown Las Vegas.",
  openGraph: {
    title: "Crypto Mondays Las Vegas",
    description: "Rooftop crypto networking at Legacy Club, Circa Resort & Casino. Every Monday. Free admission.",
    siteName: "Crypto Mondays LV",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#04080f] text-[#f0ead8]">{children}</body>
    </html>
  );
}
