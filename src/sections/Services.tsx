"use client";

import {
  Headphones,
  Briefcase,
  BarChart3,
  Database,
  BrainCircuit,
  Users,
} from "lucide-react";

import Reveal from "../components/Reveal";

const services = [
  {
    icon: Headphones,
    title: "Customer Support Operations",
    description:
      "Managed customer experience teams for email, chat, CRM systems, and help desk operations.",
  },

  {
    icon: Briefcase,
    title: "Executive & Admin Support",
    description:
      "Dedicated offshore specialists handling scheduling, coordination, reporting, and daily operations.",
  },

  {
    icon: BarChart3,
    title: "Marketing Operations",
    description:
      "Content workflows, CRM management, campaign support, analytics, and execution systems.",
  },

  {
    icon: Database,
    title: "Back Office Operations",
    description:
      "Structured administrative support including documentation, data processing, and workflow management.",
  },

  {
    icon: BrainCircuit,
    title: "AI-Enhanced Workflows",
    description:
      "Operational systems powered by AI automation, process optimization, and scalable execution tools.",
  },

  {
    icon: Users,
    title: "Dedicated Offshore Teams",
    description:
      "Fully managed offshore specialists integrated into your business operations and workflows.",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 bg-[#030712] text-white overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-500/5 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
              Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Offshore Operations
              <span className="block text-zinc-500">Built For Scale</span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              OutsourceBay provides managed offshore solutions designed to help
              companies scale operations efficiently with systems, structure,
              and AI-enhanced workflows.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={index} delay={index * 0.08}>
                <div className="group border border-white/[0.04] bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <Icon className="text-blue-400" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
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
