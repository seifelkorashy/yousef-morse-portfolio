import LuxuryVideoCard from "./LuxuryVideoCard";
import  {videos}  from "../../data";
export default function VideoSection() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-neutral-900 bg-neutral-950 text-neutral-100">
      {/* ترويسة السكشن */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-3">
          MOTION · ARCHITECTURAL FILMS
        </span>
        <h2 className="font-serif text-4xl md:text-5xl tracking-wide font-light mb-4">
          Architecture in motion.
        </h2>
        <p className="font-serif italic text-lg text-neutral-400">
          Cinematic walkthroughs capturing atmosphere, lighting, and spatial
          rhythm.
        </p>
      </div>

      {/* شبكة عرض الفيديوهات */}
      <div className="space-y-14">
        {videos.map((video) => (
          <LuxuryVideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
