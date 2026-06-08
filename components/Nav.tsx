"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Community", href: "/community" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Sponsors", href: "/sponsors" },
];

function CryptoMondaysLogo({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/crypto-mondays-logo.png"
      alt="Crypto Mondays Las Vegas"
      width={size}
      height={size}
      className="object-contain"
    />
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060c1a]/85 backdrop-blur-xl border-b border-[#c9a84c]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <CryptoMondaysLogo size={44} />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? " !text-[#c9a84c]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop RSVP */}
        <Link
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-gold items-center gap-2 px-6 py-2.5 text-[10px] font-bold uppercase rounded-none"
          style={{ letterSpacing: "0.2em" }}
        >
          RSVP Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-white/60 hover:text-[#c9a84c] transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-current transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translate(2px, 2px)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-current transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-current transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translate(2px, -2px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 bg-[#060c1a] border-b border-[#c9a84c]/10"
        style={{ maxHeight: open ? "320px" : "0px" }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`nav-link block py-3 border-b border-[#c9a84c]/08${pathname === link.href ? " !text-[#c9a84c]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3 text-[10px] font-bold uppercase mt-3 rounded-none"
            style={{ letterSpacing: "0.2em" }}
          >
            RSVP Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
