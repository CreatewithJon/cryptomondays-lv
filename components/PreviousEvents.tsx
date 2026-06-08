// ── PREVIOUS EVENTS ─────────────────────────────────────────────────────────
// Add event recap photos to /public/ named:
//   event-recap-1.jpg  event-recap-2.jpg  event-recap-3.jpg
// Then replace each PhotoSlot with:
//   <Image src="/event-recap-N.jpg" alt="..." fill className="object-cover" />
// Update the eventRecaps array with real dates and attendance numbers.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";

const eventRecaps = [
  {
    date: "June 2025",
    title: "Crypto Mondays LV",
    venue: "Legacy Club Rooftop — Circa Resort",
    attendance: "80+ Attendees",
    tags: ["Bitcoin", "AI", "Web3"],
    recap:
      "A packed rooftop gathering with conversations spanning Bitcoin treasury strategies, AI automation for local businesses, and the future of decentralized finance in Las Vegas.",
    photo: null, // replace with: "/event-recap-1.jpg"
  },
  {
    date: "May 2025",
    title: "Crypto Mondays LV",
    venue: "Legacy Club Rooftop — Circa Resort",
    attendance: "75+ Attendees",
    tags: ["DeFi", "Startups", "Networking"],
    recap:
      "Founders, investors, and operators connected over emerging DeFi protocols and Las Vegas startup ecosystem opportunities. Several partnerships formed on the night.",
    photo: null, // replace with: "/event-recap-2.jpg"
  },
  {
    date: "April 2025",
    title: "Crypto Mondays LV",
    venue: "Legacy Club Rooftop — Circa Resort",
    attendance: "70+ Attendees",
    tags: ["NFTs", "AI Tools", "Community"],
    recap:
      "The community explored practical AI tool stacks and their intersection with digital ownership. One of our highest-energy nights with several first-time attendees joining the regulars.",
    photo: null, // replace with: "/event-recap-3.jpg"
  },
];

export default function PreviousEvents() {
  return (
    <section className="py-28 bg-[#060c1a]" id="past-events">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Event History</p>
            <h2
              className="font-black uppercase leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 48px)",
                background:
                  "linear-gradient(135deg, #b8922e 0%, #e8c465 40%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Week,<br />A New Chapter
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/35 max-w-xs leading-relaxed">
              A growing archive of Crypto Mondays Las Vegas events — establishing
              history, credibility, and community momentum.
            </p>
          </div>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {eventRecaps.map((event, i) => (
            <div key={i} className="card-navy overflow-hidden flex flex-col">
              {/* Photo area */}
              <div
                className="relative overflow-hidden bg-[#080f1e] border-b border-[#c9a84c]/08"
                style={{ aspectRatio: "16/9" }}
              >
                {event.photo ? (
                  // <Image src={event.photo} alt={event.title} fill className="object-cover" />
                  null
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    {/* Subtle grid */}
                    <div
                      className="absolute inset-0 opacity-[0.025]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="text-[#c9a84c]/15 z-10"
                    >
                      <rect x="3" y="3" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M3 22l8-7 5 5 4-4 7 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[8px] uppercase tracking-[0.18em] text-[#c9a84c]/20 font-semibold z-10">
                      event-recap-{i + 1}.jpg
                    </span>
                  </div>
                )}

                {/* Date badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="ecosystem-tag">{event.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-1">
                    {event.venue}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#c9a84c]">
                      {event.attendance}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-white/50 leading-relaxed flex-1">{event.recap}</p>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#c9a84c]/08">
                  {event.tags.map((tag) => (
                    <span key={tag} className="ecosystem-tag" style={{ fontSize: "8px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive CTA */}
        <div className="text-center">
          <Link
            href="/events"
            className="btn-outline-gold inline-flex items-center gap-3 px-8 py-4 text-xs uppercase"
          >
            View All Events
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
