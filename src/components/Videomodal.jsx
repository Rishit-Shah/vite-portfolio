import React, { useState } from "react";

const VideoModal = ({ videoSrc, isYouTube = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-tertiary hover:bg-[#915EFF] text-white px-6 py-3 rounded-xl font-medium transition-colors"
      >
        ▶ Watch Intro
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold"
            >
              ✕
            </button>

            <div className="aspect-video w-full rounded-xl overflow-hidden">
              {isYouTube ? (
                <iframe
                  className="w-full h-full"
                  src={`${videoSrc}?autoplay=1`}
                  title="About me video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                    src={videoSrc}
                    controls 
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                    />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;