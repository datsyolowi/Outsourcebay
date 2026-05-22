"use client";

import Reveal from "../components/Reveal";

const testimonials = [
  {
    name: "Michael Carter",
    role: "E-Commerce Founder",
    quote:
      "OutsourceBay helped us completely restructure our support operations and scale without operational chaos.",
  },

  {
    name: "Sarah Nguyen",
    role: "Marketing Agency Owner",
    quote:
      "The systems, reporting, and offshore execution quality were significantly better than traditional outsourcing providers.",
  },

  {
    name: "Daniel Ross",
    role: "Startup Operator",
    quote:
      "We saved hundreds of operational hours while improving consistency across our workflows and internal processes.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#030712] text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 uppercase tracking-[0.35em] text-sm mb-6">
              Client Feedback
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Trusted By Growing
              <span className="block text-zinc-500">Operational Teams</span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Businesses use OutsourceBay to build scalable offshore systems,
              improve operational efficiency, and execute with consistency.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] h-full">
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-zinc-300 leading-relaxed text-lg flex-1">
                    "{item.quote}"
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/[0.05]">
                    <h3 className="font-semibold text-white">{item.name}</h3>

                    <p className="text-sm text-zinc-500 mt-1">{item.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
