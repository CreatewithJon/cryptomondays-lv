import Link from "next/link";
import { upcomingEvent } from "@/lib/data/events";

export default function EventDetails() {
  return (
    <section className="py-24 px-8 bg-[#060c1a]">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">Event Details</p>
        <h2
          className="font-black uppercase leading-tight mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 48px)",
            background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Every Monday Night
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {/* Time card */}
            <div className="card-navy p-8">
              <p className="section-label mb-3">Time</p>
              <p
                className="font-black leading-none text-white"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)" }}
              >
                {upcomingEvent.time}
              </p>
            </div>

            {/* Date card */}
            <div className="card-navy p-8">
              <p className="section-label mb-3">Frequency</p>
              <p
                className="font-bold uppercase text-white"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 28px)" }}
              >
                {upcomingEvent.date}
              </p>
            </div>

            {/* Location card */}
            <div className="card-navy p-8">
              <p className="section-label mb-3">Location</p>
              <p className="font-bold uppercase text-[#c9a84c] mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "14px" }}>
                {upcomingEvent.venue}
              </p>
              <p className="text-xs text-white/40 leading-relaxed">{upcomingEvent.address}</p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Parking card */}
            <div className="card-navy p-8">
              <p className="section-label mb-3">Parking</p>
              <p className="text-sm text-white/55 leading-relaxed">{upcomingEvent.parking}</p>
            </div>

            {/* Dress code card */}
            <div className="card-navy p-8">
              <p className="section-label mb-3">Dress Code</p>
              <p className="text-sm text-white/55 leading-relaxed">{upcomingEvent.dresscode}</p>
            </div>

            {/* Admission card */}
            <div className="card-navy p-8">
              <p className="section-label mb-3">Admission</p>
              <p
                className="font-black uppercase heading-gold"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)" }}
              >
                {upcomingEvent.admission}
              </p>
            </div>

            {/* RSVP button */}
            <Link
              href={upcomingEvent.rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-3 py-5 text-xs uppercase"
            >
              Reserve Your Spot
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
