import { useState } from 'react';
import { shorts } from '../data/data.js';
import ShortsViewer from './ShortsViewer.jsx';

export default function ShortsSection() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div className="px-4 py-6 bg-yt-light dark:bg-yt-black text-gray-900 dark:text-white transition-colors">

      <h2 className="text-lg font-bold mb-4">Shorts</h2>

      {/* MOBILE = GRID, DESKTOP = SCROLL */}
      <div className="
        grid grid-cols-2 gap-3
        sm:flex sm:overflow-x-auto sm:gap-4
      ">

        {shorts.map((short, index) => (

          <div
            key={short.id}
            onClick={() => {
              setStartIndex(index);
              setViewerOpen(true);
            }}
            className="
              relative w-full h-56 sm:w-40 sm:h-72
              rounded-xl overflow-hidden cursor-pointer group
              bg-gray-200 dark:bg-yt-gray flex-shrink-0
            "
          >

            {/* VIDEO SUPPORT */}
            <video
              src={short.video}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* HOVER OVERLAY (desktop only feel) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <i className="fas fa-play text-white text-2xl"></i>
            </div>

            {/* TEXT */}
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <p className="text-xs sm:text-sm font-semibold line-clamp-2">
                {short.title}
              </p>
              <p className="text-[10px] sm:text-xs">{short.views}</p>
            </div>

          </div>

        ))}

      </div>

      {/* VIEWER */}
      {viewerOpen && (
        <ShortsViewer
          shorts={shorts}
          startIndex={startIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}

    </div>
  );
}