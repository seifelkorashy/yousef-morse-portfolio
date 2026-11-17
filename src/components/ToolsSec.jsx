import React from "react";

const toolsList = [
  {
    number: "01",
    name: "3ds Max",
    description: "Modeling & Visualization",
  },
  {
    number: "02",
    name: "AutoCAD",
    description: "Technical Drafting",
  },
  {
    number: "03",
    name: "V-Ray",
    description: "Photoreal Rendering",
  },
  {
    number: "04",
    name: "Corona",
    description: "Cinematic Lighting",
  },
  {
    number: "05",
    name: "KDi2", // أو أي برنامج تاني زي Revit, Photoshop الخ
    description: "Design Workflow",
  },
];

export default function ToolsSection() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto bg-neutral-950 text-neutral-100">
      {/* عنوان السكشن العلوي */}
      <div className="mb-14">
        <span className="text-[11px] font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-3">
          — TOOLS OF THE CRAFT
        </span>
        <p className="text-sm text-neutral-400 max-w-lg font-light leading-relaxed">
          Architectural & interior design workflow & tools, transforming ideas into high-end spatial realities.
        </p>
      </div>

      {/* القائمة الأفقية المنسقة */}
      <div className="border-t border-neutral-800/80">
        {toolsList.map((tool) => (
          <div
            key={tool.number}
            className="group relative flex items-center justify-between py-6 border-b border-neutral-800/80 transition-colors duration-300 hover:border-neutral-500"
          >
            {/* الجزء الأيمن: الرقم واسم البرنامج */}
            <div className="flex items-center gap-8 md:gap-12">
              <span className="font-mono text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors">
                {tool.number}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-neutral-200 font-light tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                {tool.name}
              </h3>
            </div>

            {/* الجزء الأيسر: الوصف المعماري */}
            <span className="font-mono text-xs text-neutral-500 tracking-wider uppercase group-hover:text-neutral-300 transition-colors">
              {tool.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}