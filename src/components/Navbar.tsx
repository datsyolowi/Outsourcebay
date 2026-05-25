"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setMobileOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-5">
        <div
          className={`max-w-7xl mx-auto transition-all duration-300 rounded-full border border-white/[0.08]
          ${
            scrolled
              ? "bg-[#030712]/90 backdrop-blur-xl"
              : "bg-[#030712]/70 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white"
            >
              OutsourceBay
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-zinc-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <a
                href="#contact"
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-[1.02] transition-all duration-300"
              >
                Book Call
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white"
            >
              {mobileOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#030712] transition-all duration-300 lg:hidden
        ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="text-2xl text-white font-medium"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 bg-white text-black px-8 py-4 rounded-full font-medium"
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </>
  );
}
