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
    <section className="relative py-24 bg-[#030712] text-white overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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

        {/* Process Cards */}
        <div className="mt-20 max-w-5xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="group border border-white/[0.04] bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-400 flex items-center justify-center text-black font-bold shrink-0">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
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
