import { Mail, Clock, MapPin, Calendar, Link, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#030712] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/5 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16">
          {/* Brand */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              OutsourceBay
            </h2>

            <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
              Managed offshore operations powered by systems, AI-enhanced
              workflows, and scalable execution teams built for long-term
              operational growth.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-5 text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <Mail className="text-blue-400 shrink-0 mt-0.5" size={18} />
                <span>hello@outsourcebay.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-blue-400 shrink-0 mt-0.5" size={18} />
                <span>
                  New enquiries are reviewed during AEST business hours. Client
                  delivery can be scoped for extended or 24/7 coverage.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 shrink-0 mt-0.5" size={18} />
                <span>Metro Manila, Philippines</span>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="text-blue-400 shrink-0 mt-0.5" size={18} />

                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Book a Strategy Call
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
            {/* Navigation */}
            <div>
              <h3 className="text-white font-medium mb-5">Navigation</h3>

              <ul className="space-y-4 text-zinc-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#process"
                    className="hover:text-white transition-colors"
                  >
                    Process
                  </a>
                </li>

                <li>
                  <a
                    href="#results"
                    className="hover:text-white transition-colors"
                  >
                    Results
                  </a>
                </li>

                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-medium mb-5">Company</h3>

              <ul className="space-y-4 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Operations
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-medium mb-5">Contact</h3>

              <ul className="space-y-4 text-zinc-400">
                <li>hello@outsourcebay.com</li>

                <li>Global Offshore Operations</li>

                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-16 flex items-center justify-center gap-4">
          {[
            { icon: Link, href: "#" },
            { icon: Globe, href: "#" },
          ].map((social, index) => {
            const Icon = social.icon;

            return (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 rounded-full border border-white/[0.06] bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-400/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-white/[0.05]" />

        {/* Bottom */}
        <div className="pt-8">
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
            <span>Built for scalable operations.</span>

            <div className="hidden md:block w-1 h-1 rounded-full bg-zinc-600" />

            <span>AI-Enhanced Workflows</span>
          </div>

          <p className="text-center text-sm text-zinc-500 mt-6">
            © 2026 OutsourceBay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
