"use client";

import Reveal from "../components/Reveal";

const testimonials = [
  {
    quote:
      "OutsourceBay helped us streamline support operations and reduce response times dramatically within the first 60 days.",

    name: "Daniel Carter",
    role: "Operations Director",
    company: "ScaleFlow",
  },

  {
    quote:
      "The offshore systems and workflow structure gave our internal team far more operational clarity and efficiency.",

    name: "Sophia Mitchell",
    role: "CEO",
    company: "NovaEdge",
  },

  {
    quote:
      "From executive support to process automation, the experience felt like extending our in-house operations team.",

    name: "Marcus Lee",
    role: "Founder",
    company: "BrightPath",
  },
];

export default function ClientProof() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
              Client Results
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Trusted By Growing
              <span className="block text-zinc-500">Operations Teams</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <div
                className="
                  h-full
                  rounded-3xl
                  border border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                "
              >
                <p className="text-zinc-300 leading-relaxed text-lg">
                  “{item.quote}”
                </p>

                <div className="mt-8">
                  <div className="font-semibold text-white">{item.name}</div>

                  <div className="mt-1 text-sm text-zinc-500">
                    {item.role} • {item.company}
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
