import Link from "next/link";

const LUMA_URL = "https://luma.com/vgw9t3kt";

const topics = [
  { label: "Bitcoin & Lightning", icon: "⚡" },
  { label: "Stablecoins & RWAs", icon: "🏦" },
  { label: "Prediction Markets & DeFi", icon: "📊" },
  { label: "Web3 Gaming & NFTs", icon: "🎮" },
  { label: "AI & Emerging Tech", icon: "🤖" },
  { label: "Open Networking", icon: "🤝" },
];

const audience = [
  { title: "Founders & Builders", desc: "Working on the next wave of crypto infrastructure or applications." },
  { title: "Investors & VCs", desc: "Looking for deals, co-investors, and signal from the ground up." },
  { title: "Conference Attendees", desc: "In town for an event? Keep the momentum going Monday night." },
  { title: "Crypto Curious", desc: "New to the space and want real conversations, not a sales pitch." },
];

const organizers = [
  { name: "Alberto De Pablo", handle: "PowerfullApe", role: "Co-Organizer", initials: "AD" },
  { name: "Kathryn Nowak", handle: "Katalyst", role: "Co-Organizer", initials: "KN" },
  { name: "Dr. Kenneth A. Cottrell", handle: "D.P.P., M.A.", role: "Co-Organizer", initials: "KC" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#07080a] text-[#f5f0e8]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#07080a]/85 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold text-lg">₿</span>
            <span className="text-sm font-semibold tracking-tight">
              Crypto<span className="text-amber-400">Mondays</span>
              <span className="text-white/30 ml-1">Vegas</span>
            </span>
          </div>
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 rounded-lg bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors"
          >
            RSVP Free →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-1/4 w-[250px] h-[250px] bg-orange-600/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/[0.06] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300">
              Every Monday · 6:30 – 8:30 PM · Free
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-[1.02] mb-6">
            Las Vegas&apos; weekly
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              crypto gathering.
            </span>
          </h1>

          <p className="text-lg text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
            Founders, builders, investors, and the crypto-curious come together every Monday night at Circa Resort &amp; Casino in Downtown Las Vegas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 transition-colors"
            >
              RSVP — It&apos;s Free
            </Link>
            <a
              href="#about"
              className="px-8 py-4 rounded-xl border border-white/10 text-white/65 font-semibold text-sm hover:border-white/20 hover:text-white transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS STRIP */}
      <section className="py-8 px-6 border-y border-white/5 bg-white/[0.015]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "When", value: "Every Monday", sub: "6:30 – 8:30 PM PT" },
            { label: "Where", value: "Legacy Bar", sub: "Circa Resort & Casino" },
            { label: "Location", value: "Downtown LV", sub: "Las Vegas, Nevada" },
            { label: "Admission", value: "Free", sub: "Always & forever" },
          ].map((d) => (
            <div key={d.label} className="text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500/70 mb-1">{d.label}</div>
              <div className="text-base font-bold">{d.value}</div>
              <div className="text-xs text-white/35 mt-0.5">{d.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-4">About</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Real conversations.
              <br />
              No pitch decks.
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              CryptoMondays Vegas is a weekly meetup designed for people who are serious about digital assets — whether you&apos;re building, investing, learning, or just getting started.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              The format is simple: grab a drink at the Legacy Bar inside Circa Resort, connect with the community, and dive into whatever&apos;s moving the crypto world that week.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              No tickets. No presentations. Just signal.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-amber-500/15 bg-amber-500/[0.04]">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-4">Venue</div>
            <h3 className="text-xl font-bold mb-1">Legacy Bar</h3>
            <p className="text-sm text-white/50 mb-5">Circa Resort &amp; Casino<br />Downtown Las Vegas, Nevada</p>
            <div className="space-y-3 mb-6">
              {[
                { icon: "📅", text: "Every Monday night" },
                { icon: "🕡", text: "6:30 PM – 8:30 PM Pacific" },
                { icon: "🎟️", text: "Free — RSVP on Luma" },
                { icon: "🍸", text: "Full bar available" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-white/65">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <Link
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 rounded-xl bg-amber-500 text-black font-bold text-sm hover:bg-amber-400 transition-colors"
            >
              RSVP on Luma →
            </Link>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-3">What We Talk About</div>
            <h2 className="text-3xl font-bold tracking-tight">Rotating weekly topics</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {topics.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/6 bg-white/[0.02] hover:border-amber-500/20 hover:bg-amber-500/[0.03] transition-all"
              >
                <span className="text-xl">{t.icon}</span>
                <span className="text-sm font-medium text-white/80">{t.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/25 mt-6">
            Discussions are for educational and networking purposes only — not financial advice.
          </p>
        </div>
      </section>

      {/* WHO ATTENDS */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-3">Who Shows Up</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Built for the community,<br />not a conference.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {audience.map((a) => (
              <div key={a.title} className="p-6 rounded-2xl border border-white/6 bg-white/[0.02]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <h3 className="text-sm font-bold">{a.title}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZERS */}
      <section className="py-20 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-3">Organized By</div>
            <h2 className="text-2xl font-bold tracking-tight">The team behind the meetup</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {organizers.map((o) => (
              <div key={o.name} className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/6 bg-white/[0.02]">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold mb-4 bg-amber-500/10 text-amber-400">
                  {o.initials}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wide text-amber-500/70 mb-1">{o.role}</div>
                <h3 className="text-sm font-bold mb-0.5">{o.name}</h3>
                <p className="text-xs text-white/35">{o.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 mb-4">Join Us</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">See you Monday.</h2>
          <p className="text-base text-white/50 mb-10 leading-relaxed">
            Every week. Every Monday. Legacy Bar at Circa.<br />No cover. Just show up.
          </p>
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-xl bg-amber-500 text-black font-bold text-base hover:bg-amber-400 transition-colors"
          >
            RSVP on Luma — Free →
          </Link>
          <p className="text-xs text-white/20 mt-6">
            Independently organized · Not affiliated with Circa Resort &amp; Casino · Not financial advice
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">₿</span>
            <span className="text-sm text-white/40">CryptoMondays Vegas</span>
          </div>
          <p className="text-xs text-white/20">Every Monday · Legacy Bar · Circa Resort · Downtown Las Vegas</p>
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-400/60 hover:text-amber-400 transition-colors"
          >
            RSVP on Luma →
          </Link>
        </div>
      </footer>

    </div>
  );
}
