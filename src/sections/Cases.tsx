"use client";

import Reveal from "../components/Reveal";

const cases = [
  {
    title: "E-Commerce Operations",
    result: "Reduced support response time by 62%",
    description:
      "Built a dedicated offshore customer support workflow with reporting systems and AI-assisted ticket management.",
  },

  {
    title: "Marketing Agency Support",
    result: "Scaled delivery operations across 3 countries",
    description:
      "Implemented structured execution workflows, administrative systems, and offshore operational support.",
  },

  {
    title: "Startup Back Office Systems",
    result: "Saved 120+ operational hours monthly",
    description:
      "Created streamlined documentation, reporting processes, and scalable offshore execution systems.",
  },
];

export default function Cases() {
  return (
    <section
      id="results"
      className="relative scroll-mt-[90px] pt-10 pb-24 bg-[#030712] text-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
              Operational Results
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Real Operational
              <span className="block text-zinc-500">Impact At Scale</span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              OutsourceBay helps businesses improve efficiency, streamline
              workflows, and scale operations through managed offshore systems.
            </p>
          </div>
        </Reveal>

        {/* Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
          {cases.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] h-full">
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                <div className="relative z-10">
                  {/* Result */}
                  <div className="inline-flex items-center rounded-full border border-blue-400/10 bg-blue-500/10 px-4 py-2 text-blue-300 text-xs uppercase tracking-[0.2em] mb-6 transition-all duration-300 group-hover:border-blue-400/20">
                    {item.result}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl">
            {[
              ["150+", "Offshore Specialists"],
              ["24/7", "Operational Support"],
              ["98%", "Client Satisfaction"],
              ["10+", "Years Experience"],
            ].map((metric, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.03] rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold transition-colors duration-300 group-hover:text-white">
                      {metric[0]}
                    </h3>

                    <p className="text-zinc-500 mt-2 text-sm transition-colors duration-300 group-hover:text-zinc-400">
                      {metric[1]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
