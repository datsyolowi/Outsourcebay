"use client";

import Reveal from "../components/Reveal";

const steps = [
  {
    number: "01",
    title: "Discovery & Workflow Audit",
    description:
      "We analyze your business operations, workflows, bottlenecks, and scaling requirements.",
  },

  {
    number: "02",
    title: "Team & Role Matching",
    description:
      "OutsourceBay identifies the right offshore specialists aligned with your operational needs.",
  },

  {
    number: "03",
    title: "SOP & Systems Integration",
    description:
      "We implement structured processes, reporting systems, and workflow documentation.",
  },

  {
    number: "04",
    title: "AI Workflow Optimization",
    description:
      "Automation tools and AI-assisted systems are integrated to improve operational efficiency.",
  },

  {
    number: "05",
    title: "Performance Management",
    description:
      "Continuous oversight, reporting, quality assurance, and operational support ensure long-term success.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-[90px] pt-10 pb-24 bg-[#030712] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
              How It Works
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              A Structured Process
              <span className="block text-zinc-500">Designed For Scale</span>
            </h2>

            <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
              OutsourceBay combines offshore staffing, operational systems,
              AI-enhanced workflows, and performance management into one
              scalable execution framework.
            </p>
          </div>
        </Reveal>

        {/* Process Timeline */}
        <div className="mt-20 max-w-5xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.09}>
              <div className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number */}
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-blue-400 flex items-center justify-center text-black font-bold text-lg transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-400/20">
                      {step.number}
                    </div>

                    {/* Timeline Line */}
                    {index !== steps.length - 1 && (
                      <div className="hidden md:block absolute left-1/2 top-16 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-400/40 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-base md:text-lg transition-colors duration-300 group-hover:text-zinc-300">
                      {step.description}
                    </p>
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
