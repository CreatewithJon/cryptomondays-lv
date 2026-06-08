"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

const slides = [
  {
    src: "/hero-legacy-club.webp",
    alt: "Legacy Club Rooftop at night — Las Vegas skyline",
    sub: "The Premier Crypto, AI & Emerging\nTechnology Community in Las Vegas",
  },
  {
    src: "/hero-legacy-club-interior.jpg",
    alt: "Legacy Club interior lounge at sunset",
    sub: "Every Monday. Rooftop Lounge.\nCirca Resort & Casino.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-16 min-h-screen flex items-stretch overflow-hidden">
      {/* ── LEFT: text panel ── */}
      <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 w-full md:w-[58%] bg-[#060c1a]">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-px bg-[#c9a84c]/50" />
            <span className="section-label">Las Vegas · Every Monday</span>
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-[0.88] mb-5 uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 7vw, 88px)",
            }}
          >
            <span className="heading-gold block">Crypto</span>
            <span className="heading-gold block">Mondays</span>
            <span
              className="block"
              style={{
                fontSize: "clamp(18px, 2.5vw, 30px)",
                background: "none",
                WebkitTextFillColor: "rgba(240,234,216,0.55)",
                letterSpacing: "0.18em",
                fontWeight: 400,
                marginTop: "12px",
              }}
            >
              Las Vegas
            </span>
          </h1>

          {/* Subheadline */}
          <p
            key={active}
            className="text-sm md:text-base font-light tracking-[0.12em] text-white/60 uppercase mb-4 leading-relaxed max-w-sm whitespace-pre-line fade-up"
          >
            {slides[active].sub}
          </p>

          {/* Supporting text */}
          <p className="text-xs text-white/40 leading-relaxed mb-10 max-w-xs">
            Join founders, investors, builders, developers, entrepreneurs, and
            innovators every Monday atop the iconic Legacy Club.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase"
            >
              RSVP — It&apos;s Free
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
            <a
              href="#the-room"
              className="btn-outline-gold flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase"
            >
              See The Community
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-1.5 cursor-pointer group"
              >
                <span
                  className="text-xs font-semibold transition-colors"
                  style={{
                    color:
                      active === i ? "#c9a84c" : "rgba(255,255,255,0.25)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="transition-all duration-300"
                  style={{
                    width: active === i ? "24px" : "0px",
                    height: "1px",
                    background: "#c9a84c",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT: photo panel with crossfade + floating attendee cards ── */}
      <div className="hidden md:block md:w-[42%] relative">
        {/* Venue slides */}
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: active === i ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
            />
          </div>
        ))}

        {/* ── Floating attendee card — top right ── */}
        {/* Replace inner <div> with <Image> when attendees-rooftop-selfie.jpg is in /public */}
        <div
          className="absolute top-20 right-8 z-20 w-40 overflow-hidden"
          style={{
            transform: "rotate(2deg)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.3)",
          }}
        >
          {/* Photo slot — swap this div for <Image> when file is ready */}
          <div className="relative w-full bg-[#0a1428]" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/attendees-rooftop-selfie.jpg"
              alt="Crypto Mondays Las Vegas attendees on rooftop"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a]/60 to-transparent" />
          </div>
          <div className="bg-[#0a1428] border-t border-[#c9a84c]/20 px-3 py-2">
            <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#c9a84c]">
              On The Rooftop
            </div>
            <div className="text-[8px] text-white/40">Legacy Club · Circa</div>
          </div>
        </div>

        {/* ── Floating attendee card — lower left ── */}
        {/* Replace inner <div> with <Image> when attendees-group.jpg is in /public */}
        <div
          className="absolute bottom-24 left-[-28px] z-20 w-44 overflow-hidden"
          style={{
            transform: "rotate(-1.5deg)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.3)",
          }}
        >
          <div className="relative w-full bg-[#0a1428]" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/attendees-group.jpg"
              alt="Crypto Mondays Las Vegas community group"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a]/60 to-transparent" />
          </div>
          <div className="bg-[#0a1428] border-t border-[#c9a84c]/20 px-3 py-2">
            <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#c9a84c]">
              The Community
            </div>
            <div className="text-[8px] text-white/40">Real People · Every Monday</div>
          </div>
        </div>

        {/* Left fade into navy */}
        <div
          className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #060c1a, transparent)" }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #060c1a, transparent)" }}
        />
        {/* Subtle dark overlay */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{ background: "rgba(4,8,15,0.2)" }}
        />
      </div>
    </section>
  );
}
