import React from 'react';
import { drawings } from '../../data'; // استيراد بيانات الرسومات من ملف data.js

export default function DrawingsSection() {
  return (
    <section className="w-full bg-neutral-950 text-neutral-100 border-t border-neutral-900">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

        {/* Section Header */}
        <div className="text-left mb-10 sm:mb-14 lg:mb-16">

          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.3em] text-neutral-500 uppercase block mb-3">
            TECHNICAL · AUTOCAD DRAWINGS
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide font-light mb-4">
            Precision in every line.
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Working drawings, plans and sections — the architectural language behind each completed space.
          </p>

        </div>

        {/* Drawings Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {drawings.map((dwg, idx) => (

            <a
              key={idx}
              href={dwg.pdf}
              rel="noopener noreferrer"
              aria-label={`Open ${dwg.title} PDF`}
              className="block group w-full"
            >

              <div className="bg-neutral-900/40 border border-neutral-800 p-1.5 sm:p-2 rounded-sm transition-all duration-300 hover:border-neutral-600 h-full flex flex-col justify-between">

                {/* Image Preview Container - تملا الكارت تماماً */}
                <div className="bg-white w-full h-[280px] sm:h-[380px] md:h-[450px] overflow-hidden relative flex items-center justify-center">

                  <img 
                    src={dwg.image} 
                    alt={dwg.title}
                    className="w-full h-full object-contain p-2 sm:p-4 filter contrast-125 transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                {/* Card Details */}
                <div className="bg-neutral-950 p-4 sm:p-5 md:p-6 border-t border-neutral-800 flex-1 flex flex-col justify-between">

                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.18em] sm:tracking-[0.25em] text-neutral-500 uppercase block mb-3 sm:mb-4">
                      {dwg.category}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 sm:gap-4">

                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-neutral-200 font-light leading-snug group-hover:text-white transition-colors">
                        {dwg.title}
                      </h3>

                      <span className="text-[10px] sm:text-xs font-mono text-neutral-500 whitespace-nowrap">
                        SCALE {dwg.scale}
                      </span>

                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-neutral-800 flex justify-between items-center">

                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-neutral-500">
                      AUTOCAD PROJECT {String(idx + 1).padStart(2, '0')}
                    </span>

                    <span className="text-[10px] sm:text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                      VIEW DRAWING ↗
                    </span>

                  </div>

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}