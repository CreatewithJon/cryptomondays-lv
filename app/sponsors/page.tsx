import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SponsorSection from "@/components/SponsorSection";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-[#f0ead8]">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 bg-[#060c1a]">
        <div className="max-w-6xl mx-auto">
          <p className="section-label mb-4">Sponsorship</p>
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
            Partner With Us
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-lg leading-relaxed">
            Reach the most engaged crypto and technology community in Las Vegas.
          </p>
        </div>
      </section>

      <SponsorSection />

      {/* Contact form */}
      <section className="py-24 px-8 bg-[#060c1a]">
        <div className="max-w-2xl mx-auto">
          <div className="card-navy p-12 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 60%)" }}
            />
            <div className="relative z-10">
              <p className="section-label mb-4">Get In Touch</p>
              <h2
                className="font-black uppercase leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  background: "linear-gradient(135deg, #c9a84c 0%, #e8c465 50%, #c9a84c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ready To Become A Sponsor?
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="section-label block mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-[#060c1a] border border-[#c9a84c]/15 px-4 py-3 text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label block mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-[#060c1a] border border-[#c9a84c]/15 px-4 py-3 text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label block mb-1.5">Company</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full bg-[#060c1a] border border-[#c9a84c]/15 px-4 py-3 text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="section-label block mb-1.5">Message</label>
                  <textarea
                    placeholder="Tell us about your sponsorship goals..."
                    rows={4}
                    className="w-full bg-[#060c1a] border border-[#c9a84c]/15 px-4 py-3 text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-[#c9a84c]/40 transition-colors resize-none"
                  />
                </div>
                <button className="btn-gold w-full py-4 text-xs uppercase font-bold tracking-[0.2em]">
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
