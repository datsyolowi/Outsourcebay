"use client";

import Reveal from "../components/Reveal";

const logos = [
  "/logos/slack.svg",
  "/logos/notion.svg",
  "/logos/stripe.svg",
  "/logos/hubspot.svg",
  "/logos/shopify.svg",
  "/logos/clickup.svg",
];

export default function Logos() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Tools & Platforms We Work With
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  rounded-2xl
                  border border-white/[0.06]
                  bg-white/[0.03]
                  backdrop-blur-xl
                  px-6 py-6
                  h-[130px]
                  transition-all
                  duration-300
                  hover:bg-white/[0.05]
                  hover:border-white/[0.12]
                "
              >
                <img
                  src={logo}
                  alt="logo"
                  className="
                    h-10
                    w-auto
                    brightness-0
                    invert
                    opacity-80
                    hover:opacity-100
                    transition-all
                    duration-300
                    ease-out
                  "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
