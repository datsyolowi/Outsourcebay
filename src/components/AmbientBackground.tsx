"use client";

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Top Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute top-[40%] right-[-200px] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[180px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-[-250px] left-[20%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[200px]" />
    </div>
  );
}
