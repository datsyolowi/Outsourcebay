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
    <section
      id="services"
      className="relative scroll-mt-[90px] pt-10 pb-24 bg-[#030712] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />

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

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={index} delay={index * 0.06}>
                <div className="group cursor-pointer relative overflow-hidden border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 transition-all duration-500 hover:border-blue-400/20 hover:bg-white/[0.05]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-blue-500/15 group-hover:scale-105">
                      <Icon
                        className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                        size={28}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {service.description}
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
