import React from 'react';

export default function PanoramaViewer({ embedUrl }) {
  const cleanUrl = embedUrl?.replace(/^Https:/i, 'https:');

  return (
    <div className="w-full space-y-3">
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden border border-neutral-800 bg-neutral-900 rounded-sm">
        
        <iframe
          src={cleanUrl}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
        />

      </div>

    </div>
  );
}