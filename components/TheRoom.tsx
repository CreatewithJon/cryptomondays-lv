"use client";

import Image from "next/image";
import Link from "next/link";

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

const attendeeTypes = [
  "Founders", "Investors", "Developers", "AI Builders",
  "Bitcoin Enthusiasts", "Startup Operators", "Real Estate Innovators",
  "Technology Professionals", "Entrepreneurs", "VCs & Angels",
];

type PhotoSlotProps = {
  src: string;
  alt: string;
  tall?: boolean;
  label?: string;
  objectPosition?: string;
};

function PhotoSlot({ src, alt, tall, label, objectPosition = "center" }: PhotoSlotProps) {
  return (
    <div
      className="relative overflow-hidden border border-[#c9a84c]/15 bg-[#080f1e] group"
      style={{ aspectRatio: tall ? "3/4" : "1/1" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition }}
      />
      {/* Gold shimmer overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(201,168,76,0.15) 0%, transparent 50%)",
        }}
      />
      {/* Gold frame on hover */}
      <div className="absolute inset-0 border border-[#c9a84c]/0 group-hover:border-[#c9a84c]/35 transition-all duration-300 pointer-events-none" />

      {/* Label badge */}
      {label && (
        <div className="absolute bottom-3 left-3 z-10">
          <span className="ecosystem-tag">{label}</span>
        </div>
      )}
    </div>
  );
}

export default function TheRoom() {
  return (
    <section className="py-28 bg-[#060c1a]" id="the-room">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">The Room</p>
          <h2
            className="font-black uppercase leading-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4.5vw, 58px)",
              background:
                "linear-gradient(135deg, #b8922e 0%, #e8c465 40%, #f0d070 60%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The People Make<br />The Event
          </h2>
          <p className="text-sm text-white/50 leading-relaxed max-w-xl">
            Crypto Mondays is more than an event — it&apos;s a living community of builders,
            investors, founders, and innovators shaping the future of technology. Every Monday
            night, the room fills with the kind of energy that turns conversations into
            collaborations.
          </p>
        </div>

        {/* 3-column masonry gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <PhotoSlot
              src="/attendees-group.jpg"
              alt="Crypto Mondays Las Vegas community group at Legacy Club"
              tall
              label="The Community"
              objectPosition="center top"
            />
            <PhotoSlot
              src="/venue-legacy-club-firepit.jpg"
              alt="Legacy Club rooftop fire pit with Las Vegas skyline"
              label="Legacy Club Rooftop"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <PhotoSlot
              src="/attendees-rooftop-selfie.jpg"
              alt="Crypto Mondays attendees on Legacy Club rooftop at sunset"
              label="On The Rooftop"
              objectPosition="center top"
            />
            <PhotoSlot
              src="/attendees-networking.jpg"
              alt="Crypto Mondays attendees networking"
              label="Networking"
            />
            <PhotoSlot
              src="/venue-legacy-club-sunset.jpg"
              alt="Legacy Club rooftop at sunset — Las Vegas panorama"
              label="The Venue"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <PhotoSlot
              src="/hero-legacy-club-interior.jpg"
              alt="Legacy Club interior lounge"
              label="The Atmosphere"
            />
            <PhotoSlot
              src="/hero-legacy-club.webp"
              alt="Legacy Club rooftop at night with Las Vegas skyline"
              tall
              label="Every Monday Night"
            />
          </div>
        </div>

        {/* Attendee type tags */}
        <div className="flex flex-wrap gap-2 mb-14">
          {attendeeTypes.map((t) => (
            <span key={t} className="ecosystem-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Pull quote + CTA */}
        <div className="border border-[#c9a84c]/12 p-10 md:p-14 bg-[#0a1428] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <blockquote
              className="font-bold uppercase leading-tight mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 2.5vw, 28px)",
                background:
                  "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &ldquo;The room is the product.&rdquo;
            </blockquote>
            <p className="text-xs text-white/40 max-w-sm leading-relaxed">
              Real people. Real conversations. Real opportunities. This is where
              business relationships are formed in Las Vegas every Monday night.
            </p>
          </div>
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 text-xs uppercase flex-shrink-0"
          >
            Claim Your Spot
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
    </section>
  );
}
