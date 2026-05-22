import Navbar from "../components/Navbar";

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Services from "../sections/Services";
import Process from "../sections/Process";
import Cases from "../sections/Cases";
import Pricing from "../sections/Pricing";
import FAQ from "../sections/FAQ";
import CTA from "../sections/CTA";
import Trusted from "../sections/Trusted";
import Testimonials from "../sections/Testimonials";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#030712] text-white overflow-hidden">
      {/* Global Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[160px] rounded-full" />

        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full" />

        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/5 blur-[200px] rounded-full" />
      </div>
      <Navbar />

      <Hero />

      <Trusted />

      <Why />

      <Services />

      <Process />

      <Cases />

      <Testimonials />

      <Pricing />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}
