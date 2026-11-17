import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-center px-6 py-12 bg-neutral-950 overflow-hidden">
      {/* Background Dimmed Architectural Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter grayscale"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950" />

      {/* Subtitle Header */}
      <div className="relative z-10 pt-8">
        <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-mono">
          INTERIOR &amp; EXTERIOR DESIGNER
        </h2>
        <p className="text-[10px] tracking-[0.3em] text-neutral-500 font-mono mt-2">
          EST. MMXX
        </p>
      </div>

      {/* Main Title */}
      <div className="relative z-10 my-auto py-16">
        <h1 className="font-serif text-5xl md:text-8xl tracking-[0.35em] text-neutral-100 font-extralight uppercase pl-[0.35em]">
          Yousef Morse
        </h1>
        <div className="w-16 h-[1px] bg-neutral-600 mx-auto my-8 opacity-60" />
        <p className="font-serif italic text-lg md:text-2xl text-neutral-300 tracking-wide max-w-xl mx-auto font-light">
          Quiet architecture for considered living.
        </p>
      </div>

      {/* Location Footer */}
      <div className="relative z-10 pb-4">
        <p className="text-[11px] tracking-[0.5em] text-neutral-500 font-mono uppercase">
          EGYPT · CAIRO
        </p>
      </div>
    </section>
  );
}