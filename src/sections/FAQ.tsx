"use client";

import { useState } from "react";

import { ChevronDown } from "lucide-react";

import Reveal from "../components/Reveal";

const faqs = [
  {
    question: "How does onboarding work?",
    answer:
      "OutsourceBay uses a structured onboarding process that includes workflow mapping, SOP documentation, access management, and operational alignment before execution begins.",
  },

  {
    question: "Will I manage the offshore team myself?",
    answer:
      "No. OutsourceBay provides operational oversight, workflow structure, reporting systems, and quality management to reduce day-to-day micromanagement.",
  },

  {
    question: "What industries do you work with?",
    answer:
      "We support startups, agencies, e-commerce brands, SaaS companies, and operational teams that require scalable offshore support systems.",
  },

  {
    question: "How do you ensure quality control?",
    answer:
      "We implement SOPs, reporting systems, performance reviews, workflow monitoring, and AI-assisted operational tracking to maintain execution quality.",
  },

  {
    question: "Are there long-term contracts?",
    answer:
      "No lock-in contracts are required. OutsourceBay focuses on long-term operational partnerships through performance and scalability.",
  },

  {
    question: "Do you use AI in operations?",
    answer:
      "Yes. AI-enhanced workflows, automation systems, reporting tools, and operational optimization are integrated where beneficial for scalability and efficiency.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-[90px] pt-10 pb-24 bg-[#030712] text-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"></div>
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Everything You Need
              <span className="block text-zinc-500">
                To Know About OutsourceBay
              </span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Structured offshore operations designed for scalability,
              operational efficiency, and long-term execution support.
            </p>
          </div>
        </Reveal>

        {/* FAQ Items */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={index} delay={index * 0.05}>
                <div className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-blue-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="relative z-10 w-full flex items-center justify-between gap-6 text-left p-7"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                      {faq.question}
                    </h3>

                    <div
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown
                        className="text-zinc-400 group-hover:text-white transition-colors duration-300"
                        size={22}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-7 pb-7">
                        <p className="text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
