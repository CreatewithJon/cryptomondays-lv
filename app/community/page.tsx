import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import Link from "next/link";

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

const communityStats = [
  { value: "2,500+", label: "Community Members" },
  { value: "100+", label: "Events Hosted" },
  { value: "40+", label: "Global CM Cities" },
  { value: "Weekly", label: "Gatherings" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-[#f0ead8]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 bg-[#060c1a]">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">Community</p>
          <h1
            className="font-black uppercase leading-none mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 7vw, 96px)",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Community
          </h1>
          <p className="text-sm md:text-base text-white/50 uppercase tracking-[0.2em] max-w-lg">
            Las Vegas&apos;s home for crypto, AI, and Web3 builders.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 px-8 border-t border-[#c9a84c]/10">
        <div className="max-w-6xl mx-auto pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {communityStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="stats-number">{stat.value}</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CommunitySection />

      {/* Join CTA */}
      <section className="py-24 px-8 wave-bg">
        <div className="max-w-6xl mx-auto text-center">
          <p className="section-label mb-4">Join Us</p>
          <h2
            className="font-black uppercase leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Join The Community
          </h2>
          <p className="text-sm text-white/45 max-w-md mx-auto leading-relaxed mb-10">
            Show up any Monday. No registration required beyond the free RSVP. Everyone is welcome.
          </p>
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-xs uppercase"
          >
            RSVP Now — It&apos;s Free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Member spotlight placeholder */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="border border-dashed border-[#c9a84c]/15 py-20 flex flex-col items-center justify-center text-center">
            <p className="section-label mb-3">Member Spotlights</p>
            <p className="text-lg font-bold uppercase text-white/25" style={{ fontFamily: "var(--font-display)" }}>
              Coming Soon
            </p>
            <p className="text-xs text-white/20 mt-2 max-w-xs leading-relaxed">
              Featured community members and their stories will appear here.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
