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
  title: "Crypto Mondays Las Vegas — The Premier Crypto Networking Experience",
  description:
    "Every Monday at Legacy Club Rooftop, Circa Resort & Casino, Downtown Las Vegas. The premier crypto networking experience for founders, investors, and builders.",
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
