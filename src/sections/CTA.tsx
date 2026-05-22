"use client";

import Reveal from "../components/Reveal";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-[90px] pt-30 pb-24 bg-[#030712] text-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <Reveal>
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
            Ready To Scale?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Build Smarter Offshore
            <span className="block text-zinc-500">
              Operations With OutsourceBay
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Partner with a managed offshore operations team designed for
            scalability, efficiency, and long-term operational growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
            >
              Book Strategy Call
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/[0.04] bg-white/[0.02] px-8 py-4 rounded-full hover:bg-white/[0.04] hover:border-blue-400/20 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
