"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030712] text-white">
      {/* Main Background Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[160px]" />

      {/* Secondary Glow */}
      <div className="absolute bottom-[-250px] right-[-120px] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl px-5 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300">
              AI-Powered Offshore Operations
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold leading-[0.95] tracking-tight max-w-4xl">
            Scale Faster With
            <span className="block text-zinc-500">Managed Offshore Teams</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            OutsourceBay helps growing companies build structured offshore
            operations powered by systems, AI-enhanced workflows, and dedicated
            execution teams.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7">
            <button className="bg-white text-black px-7 py-4 rounded-full font-medium hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10 transition-all duration-300">
              Book Strategy Call
            </button>

            <button className="border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl px-7 py-4 rounded-full hover:bg-white/[0.04] transition-all duration-300">
              Explore Services
            </button>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-8 sm:gap-10 mt-10">
            <div className="min-w-[110px]">
              <h3 className="text-2xl sm:text-3xl font-bold">150+</h3>

              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Offshore Specialists
              </p>
            </div>

            <div className="min-w-[110px]">
              <h3 className="text-2xl sm:text-3xl font-bold">24/7</h3>

              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Operational Support
              </p>
            </div>

            <div className="min-w-[110px]">
              <h3 className="text-2xl sm:text-3xl font-bold">98%</h3>

              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Client Satisfaction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
