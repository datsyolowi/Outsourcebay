import Navbar from "../components/Navbar";

import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import ClientProof from "../sections/ClientProof";
import Logos from "../sections/Logos";
import Why from "../sections/Why";
import Services from "../sections/Services";
import Process from "../sections/Process";
import Cases from "../sections/Cases";
import Pricing from "../sections/Pricing";
import FAQ from "../sections/FAQ";
import CTA from "../sections/CTA";
import Trusted from "../sections/Trusted";
import Testimonials from "../sections/Testimonials";

import MobileCTA from "../components/MobileCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#030712] text-white overflow-hidden">
      {/* Global Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="grid-background" />
        {/* Top Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full" />

        {/* Center Glow */}
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[200px] rounded-full" />

        {/* Bottom Glow */}
        <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[220px] rounded-full" />

        {/* Extra Ambient */}
        <div className="absolute top-[60%] left-[-5%] w-[500px] h-[500px] bg-purple-500/5 blur-[180px] rounded-full" />

        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_55%)]" />
      </div>

      <Navbar />

      <Hero />

      <Stats />

      <ClientProof />
      <Logos />

      <Trusted />

      <Why />

      <Services />

      <Process />

      <Cases />

      <Testimonials />

      <Pricing />

      <FAQ />

      <CTA />

      <MobileCTA />

      <Footer />
    </main>
  );
}
