import Link from "next/link";

const LUMA_URL = "https://luma.com/vgw9t3kt";

const whyAttend = [
  {
    icon: "◈",
    title: "High-Signal Conversations",
    desc: "Skip the noise. Every week surfaces the conversations that matter — from builders working on real infrastructure to investors writing real checks.",
  },
  {
    icon: "◈",
    title: "The Las Vegas Network",
    desc: "Las Vegas is becoming a hub for founders and capital. Crypto Mondays is the room where those relationships get built, week after week.",
  },
  {
    icon: "◈",
    title: "No Pitch. No Panels.",
    desc: "No presentations, no keynotes, no ticket tiers. Just a rooftop, a bar, and the right people in the room.",
  },
  {
    icon: "◈",
    title: "Always Free",
    desc: "No cover charge. No VIP upsell. The value is the community. RSVP on Luma and show up.",
  },
];

const topics = [
  { label: "Bitcoin & Lightning Network", tag: "BTC" },
  { label: "Stablecoins & Real-World Assets", tag: "RWA" },
  { label: "Prediction Markets & DeFi", tag: "DeFi" },
  { label: "Web3 Gaming & NFTs", tag: "W3G" },
  { label: "AI & Emerging Technology", tag: "AI" },
  { label: "Open Networking & Deals", tag: "NET" },
];

const audience = [
  { title: "Founders & Builders", desc: "Building in crypto, AI, Web3, or emerging tech." },
  { title: "Investors & VCs", desc: "Sourcing deals and co-investors on the ground." },
  { title: "Conference Attendees", desc: "In Vegas for an event? This is your Monday." },
  { title: "Crypto-Curious", desc: "Exploring the space — no experience required." },
];

const organizers = [
  { name: "Alberto De Pablo", handle: "@PowerfullApe", initials: "AD" },
  { name: "Kathryn Nowak", handle: "@Katalyst", initials: "KN" },
  { name: "Dr. Kenneth A. Cottrell", handle: "D.P.P., M.A.", initials: "KC" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#04080f] text-[#f0ead8] overflow-x-hidden" style={{ fontFamily: "var(--font-sans)" }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#c9a84c]/10 bg-[#04080f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-[#c9a84c]/40 flex items-center justify-center">
              <span className="gold-text font-bold text-sm">₿</span>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-wide text-white/90">Crypto</span>
              <span className="text-sm font-semibold tracking-wide gold-text">Mondays</span>
              <span className="text-xs text-white/30 ml-1.5 tracking-wider">LAS VEGAS</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Venue", "Topics", "Organizers"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-[0.15em] text-white/45 hover:text-[#c9a84c] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs px-5 py-2.5 rounded-lg tracking-wide uppercase"
          >
            RSVP Free
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        {/* === REPLACE THIS WITH REAL LEGACY CLUB / LAS VEGAS SKYLINE PHOTO ===
            Use a full-bleed image of the Legacy Club rooftop or Las Vegas skyline at night.
            Recommended: next/image with fill prop and object-cover, z-index -10.
            Dark navy overlay should sit above the image (hero-overlay class below).
        */}

        {/* Background gradient — placeholder until real photo is added */}
        <div className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse at 50% 40%, #0f2050 0%, #080d20 45%, #04080f 100%)",
          }}
        />

        {/* Ambient glows */}
        <div className="float-glow absolute top-1/4 left-1/3 w-[500px] h-[300px] rounded-full blur-[120px] z-0 pointer-events-none"
          style={{ background: "rgba(201,168,76,0.06)" }} />
        <div className="float-glow absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px] z-0 pointer-events-none"
          style={{ background: "rgba(15,32,80,0.8)", animationDelay: "3s" }} />

        {/* Thin gold horizontal line */}
        <div className="absolute top-0 left-0 right-0 h-px z-10"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#c9a84c]/25 mb-10"
            style={{ background: "rgba(201,168,76,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] gold-pulse inline-block" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c9a84c]/80">
              Every Monday · Legacy Club · Circa Resort · Free
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-[-0.02em] leading-[0.95] mb-6"
            style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-white">Crypto</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c85a 40%, #f0d070 60%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Mondays
            </span>
            <br />
            <span className="text-white/80 text-5xl md:text-6xl">Las Vegas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/55 max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            An elevated rooftop networking experience for crypto, AI, Web3,
            and emerging technology builders.
          </p>

          {/* Venue tag */}
          <p className="text-xs text-[#c9a84c]/60 tracking-[0.2em] uppercase mb-10 font-medium">
            Hosted at Legacy Club &nbsp;·&nbsp; Circa Resort & Casino &nbsp;·&nbsp; Las Vegas
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-10 py-4 rounded-xl text-sm tracking-widest uppercase"
            >
              RSVP Now
            </Link>
            <a
              href="#about"
              className="btn-ghost-gold px-10 py-4 rounded-xl text-sm tracking-widest uppercase"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="gold-divider" />
      <section className="py-10 px-6" style={{ background: "rgba(11,21,53,0.4)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "When", value: "Every Monday", sub: "6:30 – 8:30 PM PT" },
            { label: "Venue", value: "Legacy Club", sub: "Rooftop · Circa Resort" },
            { label: "Location", value: "Downtown LV", sub: "Las Vegas, Nevada" },
            { label: "Admission", value: "Free", sub: "RSVP on Luma" },
          ].map((d) => (
            <div key={d.label} className="text-center">
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c9a84c]/60 mb-1.5">{d.label}</div>
              <div className="text-base font-bold text-white">{d.value}</div>
              <div className="text-xs text-white/35 mt-0.5">{d.sub}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="gold-divider" />

      {/* ── ABOUT ── */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-5">About</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6 text-white"
              style={{ fontFamily: "var(--font-display)" }}>
              Where Las Vegas&apos;
              <br />
              <span style={{
                background: "linear-gradient(90deg, #c9a84c, #e8c85a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                crypto community
              </span>
              <br />
              meets.
            </h2>
            <p className="text-sm text-white/55 leading-relaxed mb-4">
              Crypto Mondays Vegas is a weekly gathering at the Legacy Club — the rooftop lounge atop Circa Resort & Casino in the heart of Downtown Las Vegas. It&apos;s where serious people in crypto, AI, and Web3 come to connect, share intelligence, and build relationships that matter.
            </p>
            <p className="text-sm text-white/55 leading-relaxed">
              No decks. No panels. No gatekeeping. Just an open, high-signal room every Monday night with the best view in the city.
            </p>
          </div>

          {/* Venue card */}
          <div id="venue" className="glass-card rounded-2xl p-8">
            {/* === REPLACE: Add actual Legacy Club rooftop photo here === */}
            <div className="w-full h-44 rounded-xl mb-6 flex items-end p-4 overflow-hidden relative"
              style={{
                background: "linear-gradient(135deg, #0b1535 0%, #0f2050 50%, #1a2f6b 100%)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-medium text-center px-4">
                  [ Replace with Legacy Club rooftop photo ]
                </p>
              </div>
              <div className="relative z-10">
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#c9a84c]/70 font-semibold">Rooftop Lounge</div>
                <div className="text-sm font-bold text-white">Legacy Club at Circa</div>
              </div>
            </div>

            <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c9a84c]/60 mb-3">Venue Details</div>
            <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>Legacy Club</h3>
            <p className="text-xs text-white/40 mb-5">Circa Resort & Casino · Downtown Las Vegas</p>

            <div className="space-y-3 mb-6">
              {[
                { icon: "◈", text: "Every Monday evening" },
                { icon: "◈", text: "6:30 PM – 8:30 PM Pacific Time" },
                { icon: "◈", text: "Free admission — RSVP via Luma" },
                { icon: "◈", text: "Full bar & rooftop lounge atmosphere" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="text-[#c9a84c]/60 text-xs">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold block text-center py-3.5 rounded-xl text-xs tracking-[0.2em] uppercase"
            >
              Reserve Your Spot
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY ATTEND ── */}
      <div className="gold-divider" />
      <section className="py-32 px-6" style={{ background: "rgba(11,21,53,0.25)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-4">Why Attend</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}>
              Built for people who
              <br />
              move markets.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyAttend.map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-7">
                <div className="text-[#c9a84c] text-xl mb-4 opacity-70">{item.icon}</div>
                <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="gold-divider" />

      {/* ── TOPICS ── */}
      <section id="topics" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-4">Weekly Topics</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}>
              The conversations
              <br />shaping the future.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((t) => (
              <div
                key={t.label}
                className="flex items-center justify-between p-5 rounded-xl group cursor-default transition-all"
                style={{
                  background: "rgba(15,32,80,0.3)",
                  border: "1px solid rgba(201,168,76,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
                  e.currentTarget.style.background = "rgba(201,168,76,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)";
                  e.currentTarget.style.background = "rgba(15,32,80,0.3)";
                }}
              >
                <span className="text-sm font-medium text-white/75">{t.label}</span>
                <span className="text-[9px] font-bold tracking-widest text-[#c9a84c]/50 border border-[#c9a84c]/15 px-2 py-0.5 rounded">
                  {t.tag}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-white/20 mt-8 text-center tracking-wide">
            All discussions are for educational and networking purposes only — not financial advice.
          </p>
        </div>
      </section>

      {/* ── WHO ATTENDS ── */}
      <div className="gold-divider" />
      <section className="py-32 px-6" style={{ background: "rgba(11,21,53,0.25)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-4">The Room</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}>
              Who shows up
              <br />every Monday.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {audience.map((a) => (
              <div key={a.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-xl border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(201,168,76,0.06)" }}>
                  <span className="gold-text text-lg">◈</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{a.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="gold-divider" />

      {/* ── ORGANIZERS ── */}
      <section id="organizers" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-4">Organized By</div>
            <h2 className="text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}>
              The team behind the meetup.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {organizers.map((o) => (
              <div key={o.name} className="glass-card rounded-2xl p-8 flex flex-col items-center text-center">
                {/* === REPLACE: swap initials div with real headshot photo === */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold mb-5 border border-[#c9a84c]/20"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(15,32,80,0.6) 100%)",
                    color: "#c9a84c",
                    fontFamily: "var(--font-display)",
                  }}>
                  {o.initials}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{o.name}</h3>
                <p className="text-xs text-[#c9a84c]/60">{o.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RSVP CTA ── */}
      <div className="gold-divider" />
      <section className="py-36 px-6 relative overflow-hidden" style={{ background: "rgba(11,21,53,0.4)" }}>
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#c9a84c] mb-5">Join Us</div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.0] mb-5 text-white"
            style={{ fontFamily: "var(--font-display)" }}>
            See you{" "}
            <span style={{
              background: "linear-gradient(135deg, #c9a84c, #e8c85a, #c9a84c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Monday.
            </span>
          </h2>
          <p className="text-base text-white/45 mb-3 font-light">
            Every Monday. 6:30 PM. Legacy Club rooftop. No cover.
          </p>
          <p className="text-xs text-[#c9a84c]/50 tracking-[0.2em] uppercase mb-12">
            Circa Resort & Casino · Downtown Las Vegas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-12 py-4 rounded-xl text-sm tracking-[0.2em] uppercase"
            >
              RSVP — It&apos;s Free
            </Link>
            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-gold px-12 py-4 rounded-xl text-sm tracking-[0.2em] uppercase"
            >
              View on Luma
            </Link>
          </div>
        </div>
      </section>
      <div className="gold-divider" />

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 bg-[#04080f]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#c9a84c]/30 flex items-center justify-center">
                <span className="gold-text font-bold text-sm">₿</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-white/80">Crypto</span>
                <span className="text-sm font-semibold gold-text">Mondays</span>
                <span className="text-xs text-white/25 ml-1.5 tracking-widest">LAS VEGAS</span>
              </div>
            </div>

            <div className="flex gap-8">
              {["About", "Venue", "Topics", "Organizers"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs text-white/30 hover:text-[#c9a84c] transition-colors tracking-wide uppercase"
                >
                  {item}
                </a>
              ))}
            </div>

            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-gold text-xs px-5 py-2 rounded-lg tracking-[0.15em] uppercase"
            >
              RSVP →
            </Link>
          </div>

          <div className="gold-divider mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            <p className="text-xs text-white/20 tracking-wide">
              Every Monday · Legacy Club · Circa Resort & Casino · Downtown Las Vegas
            </p>
            <p className="text-xs text-white/15">
              © {new Date().getFullYear()} Crypto Mondays LV · Independently organized
            </p>
            <p className="text-xs text-white/15">
              Not affiliated with Circa Resort · Not financial advice
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
