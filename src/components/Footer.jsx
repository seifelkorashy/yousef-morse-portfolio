import React from "react";

export default function Footer() {
  return (
    <footer className="py-24 px-6 max-w-5xl mx-auto border-t border-neutral-900 bg-neutral-950 text-neutral-100 text-center">
      <div className="flex flex-col items-center space-y-10">
        
        {/* اللوجو المعماري الخاص بك */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-20 overflow-hidden flex items-center justify-center">
            <img
              src="/KITCHEN.jpg"
              alt="YM Architecture Logo"
              className="w-full h-full object-cover scale-[3.2] mix-blend-lighten pointer-events-none select-none"
            />
          </div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase">
            GET IN TOUCH
          </span>
        </div>

        {/* الرسالة الترحيبية الفخمة */}
        <div className="space-y-3 max-w-xl">
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-200 font-light tracking-wide">
            Thank you for visiting my portfolio,
          </h2>
          <p className="font-serif italic text-base text-neutral-400">
            I look forward to working with you on your next project.
          </p>
        </div>

        {/* كروت التواصل (الإيميل والهاتف/الواتساب) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-6">
          
          {/* كارت البريد الإلكتروني */}
          <a
            href="mailto:morseyousef@gmail.com"
            className="group flex items-center gap-4 p-5 rounded-sm border border-neutral-800 bg-neutral-900/50 hover:border-neutral-600 transition-all duration-300 text-left"
          >
            <div className="p-3 rounded-full bg-neutral-800/80 text-neutral-300 group-hover:text-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="block font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase">
                EMAIL
              </span>
              <span className="font-serif text-sm md:text-base text-neutral-200 tracking-wide">
                morseyousef@gmail.com
              </span>
            </div>
          </a>

          {/* كارت الهاتف / الواتساب */}
          <a
            href="https://wa.me/201000059039"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-sm border border-neutral-800 bg-neutral-900/50 hover:border-neutral-600 transition-all duration-300 text-left"
          >
            <div className="p-3 rounded-full bg-neutral-800/80 text-neutral-300 group-hover:text-amber-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span className="block font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase">
                PHONE · WHATSAPP
              </span>
              <span className="font-serif text-sm md:text-base text-neutral-200 tracking-wide" dir="ltr">
                01000059039
              </span>
            </div>
          </a>

        </div>

        {/* حقوق النشر السفلية */}
        <div className="pt-12 text-[10px] font-mono tracking-widest text-neutral-600">
          © {new Date().getFullYear()} YOUSSEF MORSE · ALL RIGHTS RESERVED
        </div>

      </div>
    </footer>
  );
}