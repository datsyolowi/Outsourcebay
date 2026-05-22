"use client";

import Reveal from "../components/Reveal";

const companies = [
  "E-Commerce",
  "SaaS",
  "Agencies",
  "Startups",
  "Operations",
  "Global Teams",
];

export default function Trusted() {
  return (
    <section className="relative py-14 bg-[#030712] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Trusted By Growing Teams Worldwide
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl rounded-2xl py-5 px-4 flex items-center justify-center hover:bg-white/[0.04] hover:border-blue-400/10 transition-all duration-300"
              >
                <span className="text-zinc-400 font-medium tracking-wide group-hover:text-white transition-colors duration-300">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
