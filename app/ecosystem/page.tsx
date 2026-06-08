import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EcosystemTeaser from "@/components/EcosystemTeaser";
import { ecosystemCategories } from "@/lib/data/ecosystem";

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-[#f0ead8]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 bg-[#060c1a]">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">Directory</p>
          <h1
            className="font-black uppercase leading-none mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5.5vw, 76px)",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              maxWidth: "900px",
            }}
          >
            Las Vegas Tech Ecosystem Directory
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-xl leading-relaxed">
            The definitive guide to crypto, AI, Web3, and emerging technology in Las Vegas.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section className="pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-8">Browse Categories</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemCategories.map((cat) => (
              <div
                key={cat.label}
                className="card-navy p-8 flex flex-col gap-4 cursor-default"
              >
                <div className="text-[#c9a84c] text-lg" style={{ fontFamily: "var(--font-display)" }}>◈</div>
                <h3
                  className="font-bold uppercase text-[#c9a84c]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.15em" }}
                >
                  {cat.label}
                </h3>
                <span className="ecosystem-tag self-start">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get listed CTA */}
      <section className="pb-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="card-navy p-12 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
            />
            <div className="relative z-10">
              <p className="section-label mb-4">For Companies</p>
              <h2
                className="font-black uppercase leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(20px, 3vw, 36px)",
                  background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Get Your Company Listed
              </h2>
              <p className="text-sm text-white/45 max-w-md mx-auto leading-relaxed mb-8">
                Are you a Las Vegas tech company? Get in front of our community of founders, investors, and builders.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <div className="flex border border-[#c9a84c]/20 overflow-hidden">
                  <input
                    type="email"
                    placeholder="your@company.com"
                    className="bg-transparent px-5 py-3 text-xs text-white/70 placeholder-white/25 focus:outline-none w-56"
                  />
                  <button className="btn-gold px-6 py-3 text-[10px] font-bold uppercase whitespace-nowrap">
                    Get Listed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EcosystemTeaser />
      <Footer />
    </div>
  );
}
