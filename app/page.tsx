import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

function CryptoMondaysLogo({ size = 48 }: { size?: number }) {
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

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="9" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 22c0-3.314 2.686-6 6-6h8c3.314 0 6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Elite Networking",
    desc: "Connect with founders, investors, and innovators.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="16" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="10" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="20" y="4" width="4" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Market Insights",
    desc: "Stay ahead with expert analysis and trends.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 14c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 9v2M9 14H7M19 14h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Rooftop Vibes",
    desc: "Premium cocktails and unmatched views.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.5 9.1 19.2l.9-5.5L6 9.8l5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Exclusive Access",
    desc: "Members and guests enjoy VIP perks all night.",
  },
];

const speakers = [
  {
    name: "Alberto De Pablo",
    role: "Co-Founder",
    company: "Aigentic Systems",
    bio: "Building AI-native systems and bridging the gap between emerging tech and real-world implementation.",
    initials: "AD",
  },
  {
    name: "Kathryn Nowak",
    role: "Community Catalyst",
    company: "Katalyst",
    bio: "Connecting builders and investors across the Web3 ecosystem in Las Vegas and beyond.",
    initials: "KN",
  },
  {
    name: "Dr. Kenneth A. Cottrell",
    role: "Co-Founder",
    company: "Aigentic Systems",
    bio: "AI researcher and business strategist driving the next wave of intelligent enterprise systems.",
    initials: "KC",
  },
];


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-[#f0ead8]">

      {/* ══ NAV ══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060c1a]/90 backdrop-blur-xl border-b border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <CryptoMondaysLogo size={48} />
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-10">
            {["Events", "About", "Experience", "Speakers", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            ))}
          </div>

          {/* RSVP */}
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-[10px] font-bold px-6 py-2.5 rounded-none uppercase"
            style={{ letterSpacing: "0.2em" }}
          >
            RSVP Now
          </Link>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <HeroCarousel />

      {/* ══ FEATURE STRIP ══ */}
      <section className="border-y border-[#c9a84c]/10 bg-[#060c1a]">
        <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="text-[#c9a84c] flex-shrink-0 mt-0.5 opacity-80">{f.icon}</div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-1.5">{f.title}</div>
                <p className="text-xs text-white/45 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ EVENT DETAILS ══ */}
      <section id="events" className="py-24 px-8 bg-[#060c1a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#c9a84c]/12 rounded-sm overflow-hidden">

          {/* Left: info */}
          <div className="p-10 bg-[#0a1428] border-r border-[#c9a84c]/10 flex flex-col justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#c9a84c] mb-4">Every Monday</p>
              <h2 className="font-black text-white mb-6 leading-none"
                style={{ fontFamily: "var(--font-display)", fontSize: "48px" }}>
                6:30PM –<br />8:30PM
              </h2>

              <div className="gold-line mb-6" />

              <div className="flex items-start gap-3 mb-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                  <path d="M7 1.5C4.515 1.5 2.5 3.515 2.5 6c0 3.375 4.5 7 4.5 7s4.5-3.625 4.5-7c0-2.485-2.015-4.5-4.5-4.5z" stroke="#c9a84c" strokeWidth="1.2"/>
                  <circle cx="7" cy="6" r="1.5" stroke="#c9a84c" strokeWidth="1.2"/>
                </svg>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-0.5">Legacy Club Rooftop</div>
                  <div className="text-xs text-white/40 leading-relaxed">The Rooftop at Circa Resort & Casino<br />8 Fremont St, Las Vegas, NV 89101</div>
                </div>
              </div>
            </div>

            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-3 py-4 text-xs uppercase mt-8"
            >
              RSVP Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Center: Bitcoin visual */}
          <div className="flex items-center justify-center p-10 bg-[#08112a] border-r border-[#c9a84c]/10 relative overflow-hidden">
            <div className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)" }} />
            {/*
              === REPLACE with actual 3D Bitcoin coin image ===
              <Image src="/bitcoin-coin.png" alt="Bitcoin" width={220} height={220} className="relative z-10" />
            */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-40 h-40 rounded-full flex items-center justify-center bitcoin-glow"
                style={{
                  background: "linear-gradient(135deg, #b8922e 0%, #e8c465 40%, #f0d070 60%, #b8922e 100%)",
                  fontSize: "72px",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  color: "#06080f",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}>
                ₿
              </div>
              <div className="gold-line w-24" />
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">[ Replace with 3D coin image ]</p>
            </div>
          </div>

          {/* Right: copy */}
          <div className="p-10 bg-[#0a1428] flex flex-col justify-center">
            <h3 className="font-bold text-white leading-tight mb-5 uppercase"
              style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "#c9a84c" }}>
              Elevate Your<br />Network
            </h3>
            <p className="text-sm text-white/55 leading-relaxed">
              Join the most influential minds in crypto for curated conversations, premium drinks, and unforgettable views over the Las Vegas skyline.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SPEAKERS ══ */}
      <section id="speakers" className="py-24 px-8 bg-[#060c1a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white"
                style={{ fontFamily: "var(--font-display)" }}>
                Featured Organizers
              </h2>
              <div className="flex-1 h-px bg-[#c9a84c]/15 w-24 md:w-48" />
            </div>
            <div className="flex gap-2">
              {["←", "→"].map((arrow) => (
                <button key={arrow}
                  className="w-8 h-8 rounded-full border border-[#c9a84c]/25 flex items-center justify-center text-[#c9a84c]/60 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-xs">
                  {arrow}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {speakers.map((s) => (
              <div key={s.name} className="card-navy p-6 rounded-sm">
                <div className="flex items-center gap-4 mb-4">
                  {/*
                    === REPLACE initials div with real headshot ===
                    <Image src={`/${s.slug}.jpg`} alt={s.name} width={56} height={56} className="rounded-full speaker-avatar object-cover" />
                  */}
                  <div className="w-14 h-14 rounded-full speaker-avatar flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #0f2050, #1a2f6b)",
                      color: "#c9a84c",
                      fontFamily: "var(--font-display)",
                    }}>
                    {s.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide uppercase"
                      style={{ fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.15em" }}>
                      {s.name}
                    </h3>
                    <p className="text-[10px] text-[#c9a84c]/70 tracking-wide uppercase mt-0.5">
                      {s.role}, {s.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-white/45 leading-relaxed mb-5">{s.bio}</p>
                {/* LinkedIn icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-30 hover:opacity-70 cursor-pointer transition-opacity">
                  <rect x="1" y="1" width="14" height="14" rx="2" stroke="#c9a84c" strokeWidth="1.2"/>
                  <path d="M4 6.5v5M4 4.5v.5M7 11.5V9c0-1.105.895-2 2-2s2 .895 2 2v2.5M7 6.5v5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE / WAVE ══ */}
      <section className="wave-bg py-28 px-8 text-center relative">
        {/* Wave lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="absolute left-0 right-0"
              style={{
                bottom: `${i * 10}px`,
                height: "1px",
                background: `linear-gradient(90deg, transparent, rgba(201,168,76,${0.3 - i * 0.05}), transparent)`,
                transform: `scaleX(${0.6 + i * 0.1})`,
              }} />
          ))}
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-bold uppercase leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 46px)",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.05em",
            }}>
            Where Connections Are Made<br />And The Future Is Built.
          </h2>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-[#c9a84c]/30" />
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#c9a84c]/50">Legacy Is More Than A View.</p>
            <div className="h-px w-16 bg-[#c9a84c]/30" />
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-[#040810] border-t border-[#c9a84c]/10 pt-16 pb-8 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <CryptoMondaysLogo size={64} />
            </div>
            <p className="text-xs text-white/35 leading-relaxed mb-5">
              The Rooftop at Circa Resort & Casino<br />8 Fremont St, Las Vegas, NV 89101
            </p>
            <div className="flex gap-3">
              {[
                <svg key="ig" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="11.5" cy="4.5" r="0.8" fill="currentColor"/></svg>,
                <svg key="x" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 2l5.2 5.5L2 14h1.8l3.8-4.3L11.5 14H14l-5.5-5.8L14 2h-1.8L7.6 6l-3.8-4H2z" fill="currentColor"/></svg>,
                <svg key="li" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M4 6.5v5M4 4.5v.5M7 11.5V9c0-1.105.895-2 2-2s2 .895 2 2v2.5M7 6.5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
              ].map((icon, i) => (
                <a key={i} href="#" className="text-white/30 hover:text-[#c9a84c] transition-colors">{icon}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Events", "About", "Experience", "Speakers", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-xs text-white/40 hover:text-white/80 transition-colors uppercase tracking-wide">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-5">Event Info</h4>
            <ul className="space-y-3">
              {["RSVP Free", "Every Monday", "6:30 – 8:30 PM", "Legacy Club Rooftop", "Circa Resort & Casino"].map((l) => (
                <li key={l} className="text-xs text-white/40 uppercase tracking-wide">{l}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
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
              <button className="px-4 bg-[#c9a84c]/10 border-l border-[#c9a84c]/20 hover:bg-[#c9a84c]/20 transition-colors">
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
            © {new Date().getFullYear()} Crypto Mondays LV. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-[10px] text-white/20 hover:text-white/50 transition-colors tracking-wide uppercase">{l}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
