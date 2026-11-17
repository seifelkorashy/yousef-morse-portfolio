import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-neutral-900 bg-neutral-950 text-neutral-100">
      <div className="text-left mb-12">
        <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-3">
          02 — PROFILE
        </span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-wide font-light">
          About &amp; Expertise
        </h2>
      </div>

      {/* Profile Card Container */}
      <div className="relative bg-neutral-900/60 p-8 md:p-12 rounded-sm border border-neutral-800/80 max-w-xl mx-auto shadow-2xl">
        <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto mb-8 rounded-full p-1 bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-900 shadow-xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border border-neutral-700">
            <img 
              src="public\5911120304048640033.jpg" 
              alt="Yousef Morsy" 
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs font-mono tracking-[0.25em] text-neutral-400 border-t border-neutral-800 pt-6">
          <span className="uppercase">YOUSEF MORSE</span>
          <span className="uppercase text-neutral-500">— DESIGNER</span>
        </div>
      </div>

      {/* Bio Text */}
      <p className="font-serif italic text-lg md:text-2xl text-neutral-300 text-center max-w-2xl mx-auto mt-12 leading-relaxed font-light">
       An interior & exterior designer shaping quiet, considered spaces — where light, material, and proportion meet with intention.
      </p>
    </section>
  );
}