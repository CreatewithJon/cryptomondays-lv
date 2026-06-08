"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

const slides = [
  {
    src: "/hero-legacy-club.webp",
    alt: "Legacy Club Rooftop at night — Las Vegas skyline",
    headline: ["Crypto", "Mondays"],
    sub: "The Premier Crypto Networking\nExperience in Las Vegas",
  },
  {
    src: "/hero-legacy-club-interior.jpg",
    alt: "Legacy Club interior lounge at sunset",
    headline: ["Crypto", "Mondays"],
    sub: "Every Monday. Rooftop Lounge.\nCirca Resort & Casino.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-16 min-h-screen flex items-stretch overflow-hidden">
      {/* Left: text */}
      <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 w-full md:w-[58%] bg-[#060c1a]">
        <div className="max-w-xl">
          <h1
            className="font-black leading-[0.9] mb-6 uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 7.5vw, 92px)",
            }}
          >
            <span className="heading-gold block">{slides[active].headline[0]}</span>
            <span className="heading-gold block">{slides[active].headline[1]}</span>
          </h1>

          <p className="text-sm md:text-base font-light tracking-[0.15em] text-white/65 uppercase mb-10 leading-relaxed max-w-sm whitespace-pre-line">
            {slides[active].sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase"
            >
              RSVP Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href="#about"
              className="btn-outline-gold flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7.5 6.5L12 9l-4.5 2.5V6.5z" fill="currentColor"/>
              </svg>
              Learn More
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
                  style={{ color: active === i ? "#c9a84c" : "rgba(255,255,255,0.25)" }}
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

      {/* Right: photo with crossfade */}
      <div className="hidden md:block md:w-[42%] relative">
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
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "rgba(4,8,15,0.25)" }} />
      </div>
    </section>
  );
}
