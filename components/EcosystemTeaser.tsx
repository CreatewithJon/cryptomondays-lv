import Link from "next/link";
import { ecosystemCategories } from "@/lib/data/ecosystem";

export default function EcosystemTeaser() {
  return (
    <section className="py-24 px-8 bg-[#060c1a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-4">Las Vegas Tech Ecosystem</p>
          <h2
            className="font-black uppercase leading-tight mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 48px)",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Future Is Being Built Here.
          </h2>
          <p className="text-sm text-white/45 max-w-xl leading-relaxed">
            Crypto Mondays is building the definitive directory of Las Vegas emerging technology companies,
            builders, and service providers.
          </p>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {ecosystemCategories.map((cat) => (
            <span key={cat.label} className="ecosystem-tag">
              {cat.label}
            </span>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center py-12 border-y border-[#c9a84c]/10 mb-10">
          <p className="text-xs text-white/35 uppercase tracking-[0.25em] mb-5">Directory Launching Soon</p>
          <Link
            href="/ecosystem"
            className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-xs uppercase"
          >
            Explore The Directory
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Get listed */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <p className="text-sm text-white/45 text-center sm:text-left">
            Are you a Las Vegas tech company?{" "}
            <span className="text-[#c9a84c]">Get listed.</span>
          </p>
          <div className="flex border border-[#c9a84c]/20 overflow-hidden">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent px-5 py-3 text-xs text-white/70 placeholder-white/25 focus:outline-none w-48"
            />
            <button className="px-5 bg-[#c9a84c]/10 border-l border-[#c9a84c]/20 hover:bg-[#c9a84c]/20 transition-colors text-[10px] font-bold uppercase text-[#c9a84c] tracking-[0.15em]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
