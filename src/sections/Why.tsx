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
    <section className="relative py-24 bg-[#030712] text-white overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
              Why Outsourcing Usually Fails
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Most Offshore Teams
              <span className="block text-zinc-500">Are Built To Break</span>
            </h2>

            <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
              Traditional outsourcing models prioritize cheap labor instead of
              operational excellence. OutsourceBay focuses on systems,
              accountability, AI workflows, and scalable execution.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group border border-white/[0.04] bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <Icon className="text-blue-400" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
