"use client";

import { motion } from "framer-motion";

const links = ["Services", "Process", "Results", "Contact"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between rounded-[28px] border border-white/[0.05] bg-[#081120]/80 backdrop-blur-2xl px-6 py-4 shadow-2xl shadow-black/20">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-semibold tracking-tight text-white"
          >
            OutsourceBay
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.03] transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
            Book Call
          </button>
        </div>
      </div>
    </motion.header>
  );
}
