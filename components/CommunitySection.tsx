import Link from "next/link";
import { communityCategories } from "@/lib/data/community";

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

export default function CommunitySection() {
  return (
    <section className="py-24 px-8 bg-[#060c1a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-4">The Community</p>
          <h2
            className="font-black uppercase leading-tight mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 52px)",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            People Come For The Room.
          </h2>
          <p className="text-sm text-white/45 max-w-lg leading-relaxed">
            Every Monday brings together the most interesting people in Las Vegas tech.
          </p>
        </div>

        {/* 8-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {communityCategories.map((cat) => (
            <div key={cat.label} className="glass-card p-6 flex flex-col gap-3">
              <div
                className="text-[#c9a84c] text-lg gold-shimmer"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cat.icon}
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a84c]">
                {cat.label}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center py-12 border-y border-[#c9a84c]/10">
          <blockquote
            className="font-bold uppercase leading-tight mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 3vw, 36px)",
              background: "linear-gradient(135deg, #b8922e 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            &ldquo;You don&apos;t need a badge to belong. Just show up.&rdquo;
          </blockquote>

          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 text-xs uppercase"
          >
            Join The Community
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
