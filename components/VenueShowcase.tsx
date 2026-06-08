import Image from "next/image";
import Link from "next/link";

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

const venueHighlights = [
  {
    label: "Rooftop Atmosphere",
    desc: "An open-air rooftop lounge with a curated ambiance that sets the stage for serious conversations.",
  },
  {
    label: "Las Vegas Skyline Views",
    desc: "Unobstructed views of downtown Las Vegas and the Fremont Street corridor from above.",
  },
  {
    label: "Premium Bar Service",
    desc: "Full bar service with craft cocktails, spirits, and non-alcoholic options throughout the event.",
  },
];

export default function VenueShowcase() {
  return (
    <section className="py-24 bg-[#060c1a]">
      <div className="max-w-6xl mx-auto px-8">
        <p className="section-label mb-4">The Venue</p>

        <h2
          className="font-black uppercase leading-tight mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 52px)",
            background:
              "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            maxWidth: "720px",
          }}
        >
          Networking Above The Las Vegas Skyline
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#c9a84c]/12 mb-3">
          {/* Left: main venue image */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: "4/5", minHeight: "400px" }}
          >
            <Image
              src="/venue-legacy-club-firepit.jpg"
              alt="Legacy Club Rooftop fire pit — Circa Resort Las Vegas"
              fill
              className="object-cover object-center"
            />
            <div
              className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none hidden md:block"
              style={{ background: "linear-gradient(to right, transparent, #060c1a)" }}
            />
            <div className="absolute inset-0 border border-[#c9a84c]/08 pointer-events-none" />
          </div>

          {/* Right: content */}
          <div className="p-10 md:p-14 flex flex-col justify-center bg-[#0a1428]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a84c]/60 mb-4">
              Legacy Club Rooftop — Circa Resort &amp; Casino
            </p>
            <p className="text-sm text-white/55 leading-relaxed mb-8">
              Perched atop Circa Resort &amp; Casino on Fremont Street, Legacy Club is Las
              Vegas&apos;s most iconic rooftop lounge. Every Monday night, this premium venue
              transforms into the gathering ground for the city&apos;s most forward-thinking
              minds in crypto, AI, and emerging technology.
            </p>

            <div className="space-y-5 mb-10">
              {venueHighlights.map((h) => (
                <div key={h.label} className="flex items-start gap-4">
                  <div className="w-px h-full min-h-[40px] bg-[#c9a84c]/30 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-1">
                      {h.label}
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase self-start"
            >
              RSVP For Free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Side-by-side secondary images */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className="relative overflow-hidden border border-[#c9a84c]/12"
            style={{ aspectRatio: "16/7" }}
          >
            <Image
              src="/venue-legacy-club-sunset.jpg"
              alt="Legacy Club rooftop at sunset with panoramic Las Vegas skyline"
              fill
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,12,26,0.5) 0%, transparent 60%)",
              }}
            />
            <div className="absolute bottom-3 left-4 z-10">
              <span className="ecosystem-tag">Sunset Views</span>
            </div>
          </div>
          <div
            className="relative overflow-hidden border border-[#c9a84c]/12"
            style={{ aspectRatio: "16/7" }}
          >
            <Image
              src="/hero-legacy-club-interior.jpg"
              alt="Legacy Club interior lounge — Circa Resort Las Vegas"
              fill
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,12,26,0.5) 0%, transparent 60%)",
              }}
            />
            <div className="absolute bottom-3 left-4 z-10">
              <span className="ecosystem-tag">Interior Lounge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
