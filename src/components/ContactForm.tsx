"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully.");
      form.reset();
    } else {
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 grid gap-5 max-w-3xl mx-auto"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 outline-none text-white placeholder:text-zinc-500 focus:border-blue-400/30 transition-all duration-300"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 outline-none text-white placeholder:text-zinc-500 focus:border-blue-400/30 transition-all duration-300"
        />
      </div>

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 outline-none text-white placeholder:text-zinc-500 focus:border-blue-400/30 transition-all duration-300"
      />

      <textarea
        name="message"
        placeholder="Tell us about your operational needs..."
        rows={6}
        required
        className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 outline-none text-white placeholder:text-zinc-500 focus:border-blue-400/30 transition-all duration-300 resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-4 font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
