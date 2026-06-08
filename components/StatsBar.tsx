import { stats } from "@/lib/data/events";

export default function StatsBar() {
  return (
    <section className="relative border-y border-[#c9a84c]/15 bg-[#060c1a] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="stats-number">{stat.value}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
