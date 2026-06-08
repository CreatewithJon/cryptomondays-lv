import Image from "next/image";
import Link from "next/link";

function CryptoMondaysLogo({ size = 64 }: { size?: number }) {
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

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Community", href: "/community" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Sponsors", href: "/sponsors" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040810] border-t border-[#c9a84c]/10 pt-16 pb-8 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

        {/* Col 1: Brand */}
        <div>
          <div className="mb-4">
            <CryptoMondaysLogo size={64} />
          </div>
          <p className="text-xs text-white/35 leading-relaxed mb-5">
            Legacy Club Rooftop, Circa Resort &amp; Casino<br />
            8 Fremont St, Las Vegas, NV 89101
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <a href="#" className="text-white/30 hover:text-[#c9a84c] transition-colors" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="text-white/30 hover:text-[#c9a84c] transition-colors" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l5.2 5.5L2 14h1.8l3.8-4.3L11.5 14H14l-5.5-5.8L14 2h-1.8L7.6 6l-3.8-4H2z" fill="currentColor"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-white/30 hover:text-[#c9a84c] transition-colors" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M4 6.5v5M4 4.5v.5M7 11.5V9c0-1.105.895-2 2-2s2 .895 2 2v2.5M7 6.5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs text-white/40 hover:text-white/80 transition-colors uppercase tracking-wide">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Event Info */}
        <div>
          <h4 className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-5">Event Info</h4>
          <ul className="space-y-3">
            {[
              "Every Monday",
              "6:30 – 8:30 PM PT",
              "Free Admission",
              "Legacy Club Rooftop",
              "Circa Resort & Casino",
            ].map((item) => (
              <li key={item} className="text-xs text-white/40 uppercase tracking-wide">{item}</li>
            ))}
            <li>
              <a
                href={LUMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#c9a84c]/70 hover:text-[#c9a84c] transition-colors uppercase tracking-wide"
              >
                RSVP on Luma →
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div>
          <h4 className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-5">Stay Connected</h4>
          <p className="text-xs text-white/40 leading-relaxed mb-4">
            Get updates on upcoming events and exclusive invites.
          </p>
          <div className="flex border border-[#c9a84c]/20 overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-3 text-xs text-white/70 placeholder-white/25 focus:outline-none"
            />
            <button className="px-4 bg-[#c9a84c]/10 border-l border-[#c9a84c]/20 hover:bg-[#c9a84c]/20 transition-colors" aria-label="Subscribe">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="gold-line mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[10px] text-white/20 tracking-wide">
          © 2025 Crypto Mondays Las Vegas. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] text-white/20 hover:text-white/50 transition-colors tracking-wide uppercase">Privacy Policy</a>
          <a href="#" className="text-[10px] text-white/20 hover:text-white/50 transition-colors tracking-wide uppercase">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
