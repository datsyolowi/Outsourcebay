"use client";

import Reveal from "../components/Reveal";

const stats = [
  {
    value: "40+",
    label: "Offshore Specialists",
  },

  {
    value: "24/7",
    label: "Operational Coverage",
  },

  {
    value: "62%",
    label: "Average Efficiency Gain",
  },

  {
    value: "15+",
    label: "Supported Industries",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  rounded-3xl
                  border border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  text-center
                "
              >
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </div>

                <p className="mt-3 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
