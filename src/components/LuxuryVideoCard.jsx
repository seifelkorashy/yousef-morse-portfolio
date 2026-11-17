import { useRef, useState } from "react";

export default function LuxuryVideoCard({ video }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={togglePlay}
      className="group relative w-full aspect-video overflow-hidden rounded-lg border border-neutral-800/80 bg-neutral-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 hover:border-neutral-600/80 cursor-pointer"
    >   
      {/* الفيديو نفسه */}
      <video
        ref={videoRef}
        src={video.src}
        playsInline
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />

      {/* تدرج لوني خفيف جداً على الأطراف لإبراز الفخامة */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 transition-opacity duration-500 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      />

      {/* رقم الفريم المعماري في الزاوية العلوية */}
      <div className="pointer-events-none absolute top-5 left-5 z-10 flex items-center gap-2 rounded-full bg-neutral-950/60 px-3 py-1 backdrop-blur-md border border-white/10">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
        <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-300">
          {video.id}
        </span>
      </div>

      {/* زرار التشغيل الزجاجي الفاخر في المنتصف */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isPlaying
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
          <svg
            className="w-6 h-6 md:w-7 md:h-7 translate-x-0.5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* أزرار التحكم المصغرة في الزاوية السفلية (تظهر عند التشغيل أو الهوفر) */}
      <div
        className={`absolute bottom-4 right-4 z-20 flex items-center gap-2 transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        {/* زر الصوت */}
        <button
          type="button"
          onClick={toggleMute}
          title={isMuted ? "Unmute" : "Mute"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950/70 text-neutral-200 backdrop-blur-md border border-white/10 hover:bg-neutral-800 transition-colors"
        >
          {isMuted ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          )}
        </button>

        {/* زر ملء الشاشة */}
        <button
          type="button"
          onClick={toggleFullscreen}
          title="Fullscreen"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950/70 text-neutral-200 backdrop-blur-md border border-white/10 hover:bg-neutral-800 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
