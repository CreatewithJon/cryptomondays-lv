// ── TESTIMONIALS ───────────────────────────────────────────────────────────
// Fetches from Supabase cm_testimonials (published=true, featured=true).
// Falls back to placeholder content if no data is available.
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import type { CmTestimonial } from "@/lib/types/admin"

const LUMA_URL = "https://luma.com/CryptoMondaysVegas"

const PLACEHOLDER_TESTIMONIALS = [
  {
    quote: "Every Monday I walk out with at least one real connection. The quality of people here is unmatched anywhere else in Las Vegas.",
    name: "Your Name Here",
    title: "Founder",
    company: "Your Company",
    tag: "Founder",
    headshot_url: null,
  },
  {
    quote: "I've closed two deals from conversations that started on that rooftop. Crypto Mondays is where Las Vegas tech actually meets.",
    name: "Your Name Here",
    title: "Investor",
    company: "Your Company",
    tag: "Investor",
    headshot_url: null,
  },
  {
    quote: "The vibe is different here. It's not a conference. It's a community. You show up, you belong, and the conversations are real.",
    name: "Your Name Here",
    title: "AI Builder",
    company: "Your Company",
    tag: "Builder",
    headshot_url: null,
  },
]

export default async function Testimonials() {
  let testimonials: Array<{
    quote: string
    name: string
    title: string | null
    company: string | null
    tag?: string
    headshot_url: string | null
  }> = PLACEHOLDER_TESTIMONIALS

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("cm_testimonials")
      .select("*")
      .eq("published", true)
      .eq("featured", true)
      .order("sort_order", { ascending: true })

    if (!error && data && data.length > 0) {
      testimonials = (data as CmTestimonial[]).map((t) => ({
        quote: t.quote,
        name: t.name,
        title: t.title,
        company: t.company,
        tag: t.title ?? "Community",
        headshot_url: t.headshot_url,
      }))
    }
  } catch {
    // Supabase not configured yet — use placeholders
  }

  return (
    <section className="py-28 bg-[#08112a]" id="testimonials">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Community Voices</p>
            <h2
              className="font-black uppercase leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 48px)",
                background: "linear-gradient(135deg, #b8922e 0%, #e8c465 40%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What Members<br />Are Saying
            </h2>
          </div>
          <p className="text-xs text-white/35 max-w-xs leading-relaxed">
            Real words from the Crypto Mondays Las Vegas community.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-8 flex flex-col gap-6 relative overflow-hidden"
            >
              {/* Background quote mark */}
              <div
                className="absolute top-4 right-6 text-[120px] leading-none text-[#c9a84c]/04 font-serif select-none pointer-events-none"
                aria-hidden
              >
                &ldquo;
              </div>

              {/* Tag */}
              {t.tag && <span className="ecosystem-tag self-start">{t.tag}</span>}

              {/* Quote */}
              <blockquote className="text-sm text-white/65 leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#c9a84c]/10">
                {/* Headshot */}
                <div className="w-11 h-11 rounded-full border border-[#c9a84c]/25 bg-[#0d1a35] flex-shrink-0 overflow-hidden flex items-center justify-center">
                  {t.headshot_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={t.headshot_url} alt={t.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#c9a84c]/25">
                      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  )}
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f0ead8]/80">
                    {t.name}
                  </div>
                  <div className="text-[9px] text-white/35 mt-0.5">
                    {t.title && t.company ? `${t.title} · ${t.company}` : t.title ?? t.company ?? ""}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-xs text-white/30 mb-5 uppercase tracking-[0.15em]">
            Join the community — share your story
          </p>
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-3 px-8 py-4 text-xs uppercase"
          >
            Attend An Event
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
