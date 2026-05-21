export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#030712] text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left */}
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold tracking-tight">
              OutsourceBay
            </h2>

            <p className="mt-5 text-zinc-400 leading-relaxed">
              Managed offshore operations powered by systems, AI-enhanced
              workflows, and scalable execution teams.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-12 text-sm">
            <div>
              <h3 className="text-white font-medium mb-4">Navigation</h3>

              <ul className="space-y-3 text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Process
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Results
                  </a>
                </li>

                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>

              <ul className="space-y-3 text-zinc-400">
                <li>hello@outsourcebay.com</li>

                <li>Global Offshore Operations</li>

                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between gap-4 text-sm text-zinc-500">
          <p>© 2026 OutsourceBay. All rights reserved.</p>

          <p>Built for scalable operations.</p>
        </div>
      </div>
    </footer>
  );
}
