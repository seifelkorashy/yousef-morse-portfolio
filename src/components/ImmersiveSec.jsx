import React from "react";
import PanoramaViewer from "./PanoramaViewer";
import { tours } from "../../data"; // استيراد بيانات الجولات من ملف data.js

export default function ImmersiveSection() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-neutral-900 bg-neutral-950 text-neutral-100">
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-3">
          IMMERSIVE · 360° EXPERIENCE
        </span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-wide font-light mb-4">
          Step inside the space.
        </h2>
        <p className="font-serif italic text-lg text-neutral-400">
          Panoramic walkthroughs — drag, explore, and inhabit each room from every angle.
        </p>
      </div>

      <div className="space-y-14">
        {tours.map((tour, idx) => (
          <div key={idx} className="space-y-3">
            <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase block">
              {tour.tag}
            </span>

            <PanoramaViewer embedUrl={tour.embedUrl}  />
          </div>
        ))}

      </div>
    </section>
  );
}