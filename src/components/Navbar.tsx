"use client";

import { motion } from "framer-motion";

import { Menu, X } from "lucide-react";

import { useEffect, useState } from "react";

const links = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Results", href: "#results" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [active, setActive] = useState("");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((link) => document.querySelector(link.href));

      let current = "";

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          current = links[index].href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-5"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex items-center justify-between rounded-[28px] border backdrop-blur-xl px-6 py-4 transition-all duration-500 ${
              scrolled
                ? "border-white/[0.14] bg-[#0b1220]/90 shadow-2xl shadow-black/50"
                : "border-white/[0.10] bg-[#10203a]/80 shadow-xl shadow-black/30"
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-semibold tracking-tight text-white transition-opacity duration-300 hover:opacity-80"
            >
              OutsourceBay
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition-all duration-300 ${
                    active === link.href
                      ? "text-white"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Active Indicator */}
                  <span
                    className={`absolute left-0 -bottom-2 h-px bg-white transition-all duration-300 ${
                      active === link.href
                        ? "w-full opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-2xl hover:shadow-white/10"
            >
              Book Call
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white transition-opacity duration-300 hover:opacity-80"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-[#030712]/90 backdrop-blur-xl"
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
          {links.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 20,
              }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
              }}
              className={`text-3xl font-semibold tracking-tight transition-all duration-300 ${
                active === link.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:translate-x-1"
              }`}
            >
              {link.name}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : 20,
            }}
            transition={{
              delay: 0.35,
              duration: 0.4,
            }}
            className="mt-6 inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Book Call
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
