import { useEffect, useRef } from 'react';

export default function ShortsViewer({ shorts, startIndex, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Scroll to selected short
    const child = container.children[startIndex];
    if (child) {
      child.scrollIntoView({ behavior: 'instant' });
    }

    // Auto-play only visible video
    const handleScroll = () => {
      const videos = container.querySelectorAll('video');

      videos.forEach((video) => {
        const rect = video.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [startIndex]);

  return (
    <div className="fixed inset-0 bg-black z-50">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl z-50"
      >
        ✕
      </button>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory"
      >
        {shorts.map((short) => (
          <div
            key={short.id}
            className="h-screen w-full flex items-center justify-center snap-start relative"
          >

            {/* Responsive video wrapper */}
            <div className="relative h-full w-full flex items-center justify-center">

              {/* VIDEO (MAIN FIX) */}
              <video
                src={short.video}
                autoPlay
                loop
                muted
                playsInline
                className="
                  h-full
                  w-full
                  object-cover
                  sm:object-contain
                "
              />

            </div>

            {/* Overlay */}
            <div className="absolute bottom-10 left-4 right-4 text-white z-10">
              <h3 className="font-semibold text-sm sm:text-base">
                {short.title}
              </h3>
              <p className="text-xs sm:text-sm opacity-80">
                {short.views}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}