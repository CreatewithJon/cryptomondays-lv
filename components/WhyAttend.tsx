const cards = [
  {
    title: "Network",
    body: "Meet founders, investors, operators, developers, and entrepreneurs building the future of money and technology.",
  },
  {
    title: "Learn",
    body: "Explore Bitcoin, AI, Web3, automation, cybersecurity, and emerging technologies shaping the next decade.",
  },
  {
    title: "Build",
    body: "Find partners, clients, collaborators, and co-founders. The next great company starts with the right conversation.",
  },
  {
    title: "Grow",
    body: "Expand your network, knowledge, and business opportunities in the fastest-growing tech ecosystem in Las Vegas.",
  },
];

export default function WhyAttend() {
  return (
    <section className="py-24 px-8 bg-[#060c1a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="section-label mb-3">Why Attend</p>
          <h2
            className="font-black uppercase leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 48px)",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Four Reasons to Show Up Every Monday
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#c9a84c]/12">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card rounded-none p-8 flex flex-col relative${i < cards.length - 1 ? " border-r border-[#c9a84c]/10" : ""}`}
            >
              {/* Gold bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

              {/* Icon */}
              <div className="text-[#c9a84c] text-xl mb-5 gold-shimmer" style={{ fontFamily: "var(--font-display)" }}>
                ◈
              </div>

              {/* Title */}
              <h3
                className="font-bold uppercase tracking-[0.2em] text-[#c9a84c] mb-4 text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-xs text-white/60 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
