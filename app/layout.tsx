import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crypto Mondays Las Vegas | Premier Crypto, AI & Web3 Networking",
  description:
    "The premier crypto, AI, Bitcoin, and Web3 networking community in Las Vegas. Every Monday at Legacy Club Rooftop, Circa Resort & Casino. Free admission.",
  keywords:
    "Crypto Mondays Las Vegas, crypto events Las Vegas, Bitcoin meetup Las Vegas, AI events Las Vegas, Web3 community Las Vegas, startup networking Las Vegas, emerging technology Las Vegas",
  openGraph: {
    title: "Crypto Mondays Las Vegas | Premier Crypto, AI & Web3 Networking",
    description:
      "The premier crypto, AI, Bitcoin, and Web3 networking community in Las Vegas. Every Monday at Legacy Club Rooftop, Circa Resort & Casino. Free admission.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} antialiased`}>
      <body className="bg-[#060c1a] text-[#f0ead8]">{children}</body>
    </html>
  );
}
