import Nav from "@/components/Nav";
import HeroCarousel from "@/components/HeroCarousel";
import StatsBar from "@/components/StatsBar";
import WhyAttend from "@/components/WhyAttend";
import VenueShowcase from "@/components/VenueShowcase";
import CommunitySection from "@/components/CommunitySection";
import EventDetails from "@/components/EventDetails";
import SponsorSection from "@/components/SponsorSection";
import EcosystemTeaser from "@/components/EcosystemTeaser";
import NewsletterBar from "@/components/NewsletterBar";
import Footer from "@/components/Footer";

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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-[#f0ead8]">
      <Nav />
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

      <StatsBar />
      <WhyAttend />
      <VenueShowcase />
      <CommunitySection />
      <EventDetails />
      <SponsorSection />
      <EcosystemTeaser />
      <NewsletterBar />
      <Footer />
    </div>
  );
}

// Suppress unused variable warning for LUMA_URL (defined at module level for future use)
void LUMA_URL;
