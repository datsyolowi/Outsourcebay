import Navbar from "../components/Navbar";

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Services from "../sections/Services";
import Process from "../sections/Process";
import Cases from "../sections/Cases";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#030712] text-white overflow-hidden">
      <Navbar />

      <Hero />

      <Why />

      <Services />

      <Process />

      <Cases />

      <CTA />
      <Footer />
    </main>
  );
}
