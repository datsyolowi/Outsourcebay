"use client";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-[999] lg:hidden">
      <a
        href="https://calendly.com/lmsconstantino/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center
          w-full
          bg-white
          text-black
          py-4
          rounded-2xl
          font-semibold
          shadow-2xl
          shadow-black/20
          transition-all
          duration-300
          hover:scale-[1.01]
        "
      >
        Book Strategy Call
      </a>
    </div>
  );
}
