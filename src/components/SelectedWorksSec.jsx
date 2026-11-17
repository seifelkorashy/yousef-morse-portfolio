import React, { useState } from "react";
import  {projects}  from "../../data"; // استيراد بيانات المشاريع من ملف data.js



export default function SelectedWorks() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenGallery = (project) => {
    if (project.gallery && project.gallery.length > 0) {
      setActiveGallery(project);
      setCurrentIndex(0);
    }
  };

  const handleClose = () => {
    setActiveGallery(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (activeGallery) {
      setCurrentIndex((prev) => (prev + 1) % activeGallery.gallery.length);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (activeGallery) {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + activeGallery.gallery.length) %
          activeGallery.gallery.length,
      );
    }
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto bg-neutral-950 text-neutral-100 relative">
      {/* ترويسة السكشن */}
      <div className="mb-16">
        <span className="text-[11px] font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-3">
          SELECTED WORKS · 2024—2026
        </span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-wide font-light">
          Interiors of quiet luxury.
        </h2>
      </div>

      {/* شبكة المشاريع (Bento Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const hasGallery = project.gallery && project.gallery.length > 0;

          return (
            <div
              key={project.id}
              onClick={() => handleOpenGallery(project)}
              className={`group relative overflow-hidden rounded-sm border border-neutral-800/80 bg-neutral-900 shadow-2xl transition-all duration-500 ${
                project.spanClass} ${hasGallery ? "cursor-pointer" : "cursor-default"}`}
            >
              {/* الصورة مع تأثير الزوم */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* طبقة التظليل عند الهوفر */}
              <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-90 transition-opacity duration-500 backdrop-blur-[2px]" />

              {/* تفاصيل المشروع */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="flex justify-between items-center border-b border-neutral-800/80 pb-4">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
                    PROJECT · {project.year}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-amber-400/90">
                    {project.id} / 03 {hasGallery && "(CLICK TO EXPLORE)"}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase block">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl text-neutral-100 font-light tracking-wide">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* نافذة المعرض المنبثقة (Lightbox Modal) */}
      {activeGallery && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-in"
        >
          {/* زر الإغلاق */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-neutral-400 hover:text-white font-mono text-xs tracking-widest z-50 bg-neutral-900/80 border border-neutral-800 px-4 py-2 rounded-full transition-colors"
          >
            [CLOSE ✕]
          </button>

          {/* محتوى المعرض */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center"
          >
            {/* الصورة الحالية المعروضة */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900">
              <img
                src={activeGallery.gallery[currentIndex]}
                alt={activeGallery.title}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />

              {/* أزرار التنقل (يمين ويسار) */}
              {activeGallery.gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-950/70 hover:bg-neutral-800 text-white p-3 rounded-full border border-neutral-800 backdrop-blur transition-all"
                  >
                    ❮
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-950/70 hover:bg-neutral-800 text-white p-3 rounded-full border border-neutral-800 backdrop-blur transition-all"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>

            {/* شريط معلومات أسفل الصورة المعروضة */}
            <div className="w-full mt-4 flex items-center justify-between text-neutral-400 font-mono text-xs tracking-wider">
              <span>{activeGallery.title}</span>
              <span>
                IMG {currentIndex + 1} / {activeGallery.gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
