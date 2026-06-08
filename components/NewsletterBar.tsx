export default function NewsletterBar() {
  return (
    <section className="relative border-t border-[#c9a84c]/15 overflow-hidden">
      {/* Subtle gold gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,168,76,0.04) 0%, rgba(13,26,53,0.95) 40%, rgba(201,168,76,0.04) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left text */}
          <div>
            <p className="text-sm font-medium text-white/70 max-w-sm leading-relaxed">
              Stay in the loop. Get weekly updates, event recaps, and community spotlights.
            </p>
            <p className="text-[10px] text-white/25 mt-1 uppercase tracking-[0.2em]">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* Right: input + button */}
          <div className="flex border border-[#c9a84c]/20 overflow-hidden w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 sm:w-64 bg-[#0a1428] px-5 py-3.5 text-xs text-white/70 placeholder-white/25 focus:outline-none"
            />
            <button className="btn-gold px-6 py-3.5 text-[10px] font-bold uppercase whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
