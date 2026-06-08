import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EventDetails from "@/components/EventDetails";
import Link from "next/link";

const LUMA_URL = "https://luma.com/CryptoMondaysVegas";

function getNextMonday(): string {
  const today = new Date();
  const day = today.getDay(); // 0=Sun, 1=Mon, ...
  const daysUntilMonday = day === 1 ? 0 : (8 - day) % 7 || 7;
  const next = new Date(today);
  next.setDate(today.getDate() + daysUntilMonday);
  return next.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

const expectItems = [
  {
    title: "Networking",
    desc: "Open mingling with founders, investors, developers, and builders from the Las Vegas tech community.",
  },
  {
    title: "Topics",
    desc: "Conversations span Bitcoin, AI, Web3, automation, real estate innovation, fintech, and startup building.",
  },
  {
    title: "Atmosphere",
    desc: "Premium rooftop lounge setting. Smart casual attire. Full bar service. Views over the Las Vegas skyline.",
  },
];

export default function EventsPage() {
  const nextMonday = getNextMonday();

  return (
    <div className="min-h-screen bg-[#060c1a] text-[#f0ead8]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 bg-[#060c1a]">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">Events</p>
          <h1
            className="font-black uppercase leading-none mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 7vw, 96px)",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Every Monday
          </h1>
          <p className="text-sm md:text-base text-white/50 uppercase tracking-[0.2em] max-w-lg">
            The weekly gathering for Las Vegas crypto, AI, and Web3.
          </p>
        </div>
      </section>

      {/* Featured event card */}
      <section className="pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="card-navy p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)" }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="section-label mb-3">Next Event</p>
                <h2
                  className="font-black uppercase text-white mb-2"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 32px)" }}
                >
                  Crypto Mondays Las Vegas
                </h2>
                <p className="text-sm text-[#c9a84c] mb-1">{nextMonday}</p>
                <p className="text-xs text-white/40">6:30 PM – 8:30 PM · Legacy Club Rooftop · Circa Resort &amp; Casino</p>
              </div>
              <Link
                href={LUMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-xs uppercase flex-shrink-0"
              >
                RSVP Free
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-8">What To Expect</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {expectItems.map((item) => (
              <div key={item.title} className="glass-card p-8">
                <h3
                  className="font-bold uppercase text-[#c9a84c] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontSize: "13px", letterSpacing: "0.15em" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events placeholder */}
      <section className="pb-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="border border-dashed border-[#c9a84c]/15 py-20 flex flex-col items-center justify-center text-center">
            <p className="section-label mb-3">Past Events</p>
            <p className="text-lg font-bold uppercase text-white/25" style={{ fontFamily: "var(--font-display)" }}>
              Event Archive Coming Soon
            </p>
            <p className="text-xs text-white/20 mt-2 max-w-xs leading-relaxed">
              A full archive of past Crypto Mondays Las Vegas events will be available here.
            </p>
          </div>
        </div>
      </section>

      <EventDetails />
      <Footer />
    </div>
  );
}
