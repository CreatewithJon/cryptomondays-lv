import { sponsorTiers } from "@/lib/data/sponsors";

export default function SponsorSection() {
  return (
    <section className="py-24 px-8 bg-[#060c1a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-4">Partners &amp; Sponsors</p>
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
            Invest In The Community
          </h2>
          <p className="text-sm text-white/45 max-w-lg leading-relaxed">
            Align your brand with the premier crypto and technology community in Las Vegas.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.tier}
              className={`card-navy p-8 flex flex-col relative${tier.highlight ? " border-[#c9a84c]/40 shadow-[0_0_32px_rgba(201,168,76,0.12)]" : ""}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
              )}
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 ecosystem-tag">Most Popular</span>
              )}

              <h3
                className="font-bold uppercase text-[#c9a84c] mb-1"
                style={{ fontFamily: "var(--font-display)", fontSize: "12px", letterSpacing: "0.15em" }}
              >
                {tier.tier}
              </h3>
              <p className="text-xs text-white/50 mb-6">{tier.price}</p>

              <ul className="space-y-2.5 flex-1">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-xs text-white/55">
                    <span className="text-[#c9a84c] flex-shrink-0 mt-px">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:hello@cryptomondayslv.com"
            className="btn-gold inline-flex items-center justify-center gap-3 px-10 py-4 text-xs uppercase"
          >
            Become A Sponsor
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="mailto:hello@cryptomondayslv.com"
            className="btn-outline-gold inline-flex items-center justify-center gap-3 px-10 py-4 text-xs uppercase"
          >
            Schedule a Call
          </a>
        </div>

        {/* Current sponsors placeholder */}
        <div>
          <p className="section-label mb-6 text-center">Current Sponsors</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border border-dashed border-[#c9a84c]/15 aspect-video flex items-center justify-center"
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/15">
                  Your Logo
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
