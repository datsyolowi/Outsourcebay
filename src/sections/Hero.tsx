"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#030712] text-white"
    >
      {/* Main Background Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[160px]" />

      {/* Secondary Glow */}
      <div className="absolute bottom-[-250px] right-[-120px] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px]" />

      {/* Additional Ambient Glow */}
      <div className="absolute top-[30%] left-[-150px] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 lg:pt-40 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl"
        >
          {/* Spacer */}
          <div className="h-[52px]" />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold leading-[0.95] tracking-tight max-w-4xl">
            Scale Faster With
            <span className="block text-zinc-500">Managed Offshore Teams</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            OutsourceBay helps growing companies build structured offshore
            operations powered by systems, AI-enhanced workflows, and dedicated
            execution teams.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center bg-white text-black px-7 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 inline-block">
                Book Strategy Call
              </span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl px-7 py-4 rounded-full hover:bg-white/[0.05] hover:border-blue-400/20 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
