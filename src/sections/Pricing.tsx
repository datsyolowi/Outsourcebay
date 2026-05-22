"use client";

import Reveal from "../components/Reveal";

const plans = [
  {
    name: "Starter",
    price: "$799",
    description:
      "Part-time dedicated operator — ideal for businesses starting to offload recurring work.",
    features: [
      "20 hours / week allocated",
      "Dedicated part-time operator",
      "Bay Launch Protocol onboarding",
      "SOP & workflow documentation",
      "Full AI tools suite access",
      "Your own AI chatbot included",
      "Weekly quality reviews",
      "Direct leadership support",
      "No lock-in contract",
    ],
    highlighted: false,
  },

  {
    name: "Pro",
    price: "$1,499",
    description:
      "Full-time dedicated operator — for businesses ready to fully hand off an operational lane.",
    features: [
      "40 hours / week allocated",
      "Dedicated full-time operator",
      "Bay Launch Protocol onboarding",
      "SOP & workflow documentation",
      "Full AI tools suite access",
      "Your own AI chatbot included",
      "Daily checkpoints (first 2 weeks)",
      "Zero knowledge loss protection",
      "Priority operational support",
    ],
    highlighted: true,
  },

  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Multi-operator teams, specialised roles, or enterprise operational requirements.",
    features: [
      "Multiple dedicated operators",
      "Custom onboarding scope",
      "Full AI tools suite access",
      "Your own AI chatbot included",
      "Dedicated QA & reporting",
      "Custom SLAs & compliance",
      "Volume pricing available",
      "Executive operational support",
      "Scalable offshore systems",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-[90px] pt-10 pb-24 bg-[#030712] text-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent">
        /
      </div>
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
              Pricing
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Flexible Offshore
              <span className="block text-zinc-500">Operational Plans</span>
            </h2>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Structured operational support designed for growing companies,
              scaling teams, and long-term execution systems.
            </p>
          </div>
        </Reveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20 pt-6 items-stretch">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div
                className={`group cursor-pointer relative h-full rounded-[32px] border backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-blue-500/40 bg-[#0d1728] shadow-[0_0_60px_rgba(59,130,246,0.12)] hover:shadow-[0_0_80px_rgba(59,130,246,0.18)]"
                    : "border-white/[0.06] bg-white/[0.03] hover:border-blue-400/20 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]"
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[32px]" />

                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-blue-500 text-white text-xs font-semibold px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl shadow-blue-500/30 whitespace-nowrap">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Plan */}
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>

                    <div className="flex items-end gap-2 mt-5">
                      <span className="text-5xl font-bold tracking-tight">
                        {plan.price}
                      </span>

                      {plan.price !== "Custom" && (
                        <span className="text-zinc-500 mb-1">/mo</span>
                      )}
                    </div>

                    <p className="mt-5 text-zinc-400 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-4 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />

                        <p className="text-zinc-300 leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full mt-10 py-4 rounded-2xl font-medium transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-white text-black hover:scale-[1.02] hover:shadow-xl hover:shadow-white/10"
                        : "border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-400/20"
                    }`}
                  >
                    Book Strategy Call
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
