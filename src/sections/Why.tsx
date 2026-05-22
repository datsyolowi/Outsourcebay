"use client";

import {
  AlertTriangle,
  ShieldCheck,
  Workflow,
  BrainCircuit,
} from "lucide-react";

import Reveal from "../components/Reveal";

const cards = [
  {
    icon: AlertTriangle,
    title: "No Clear Systems",
    description:
      "Most outsourcing teams fail because they operate without SOPs, accountability, or structured workflows.",
  },

  {
    icon: Workflow,
    title: "Poor Process Management",
    description:
      "Tasks become chaotic when there’s no operational oversight, reporting cadence, or execution framework.",
  },

  {
    icon: ShieldCheck,
    title: "Lack of Quality Control",
    description:
      "Cheap outsourcing often sacrifices consistency, communication, and long-term reliability.",
  },

  {
    icon: BrainCircuit,
    title: "No AI Optimization",
    description:
      "Modern operations require AI-assisted workflows to improve efficiency, speed, and scalability.",
  },
];

export default function Why() {
  return (
    <section className="relative pt-16 pb-24 border-t border-white/[0.03] bg-[#030712] text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />{" "}
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 uppercase tracking-[0.35em] text-sm mb-6">
              Why Outsourcing Usually Fails
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight">
              Most Offshore Teams
              <span className="block text-zinc-500">Are Built To Break</span>
            </h2>

            <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Traditional outsourcing models prioritize cheap labor instead of
              operational excellence. OutsourceBay focuses on systems,
              accountability, AI workflows, and scalable execution.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={index} delay={index * 0.07}>
                <div className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl border border-blue-400/10 bg-blue-500/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-blue-400/20">
                      <Icon
                        className="text-blue-400 group-hover:text-blue-400 transition-colors duration-300"
                        size={28}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300 group-hover:text-white">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed text-base transition-colors duration-300 group-hover:text-zinc-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
