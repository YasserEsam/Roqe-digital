import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Escape key listener
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let embedCode = null;

  if (props.channel === "youtube") {
    const src = `https://www.youtube.com/embed/${props.videoId}?autoplay=1`;
    embedCode = (
      <div className="relative aspect-video w-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={src}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
        />
      </div>
    );
  } else {
    embedCode = (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={props.src}
          allowFullScreen
          allow="autoplay; fullscreen"
          title="Video player"
        />
      </div>
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 p-4">
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl mx-auto" // Reduced max-width from 6xl to 4xl
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 z-10 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full"
          aria-label="Close video modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        {/* Video container */}
        <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black">
          {embedCode}
          
          {/* Attribution - Only show if it's a custom video */}
          {props.channel !== "youtube" && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <a 
                href={props.src} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs bg-black/70 text-white/80 hover:text-white px-3 py-1 rounded-full backdrop-blur-sm transition-colors"
              >
                Video Source
              </a>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}