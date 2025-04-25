"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

export default function FancyGallery({ images = [], title = "معرض الصور" }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const closeModal = () => setCurrentIndex(null);
  const showPrev = () => setCurrentIndex((i) => (i > 0 ? i - 1 : i));
  const showNext = () =>
    setCurrentIndex((i) => (i < images.length - 1 ? i + 1 : i));

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
  }, []);

  return (
    <div className="mb-12 rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-6 text-right text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md transition hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onClick={() => setCurrentIndex(index)}
            aria-label={`افتح صورة ${index + 1}`}
          >
            <Image
              src={src}
              alt={`معرض الصور - ${index + 1}`}
              width={400}
              height={300}
              className="h-60 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 sm:h-52 md:h-48 lg:h-44 xl:h-40"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button - top right OUTSIDE */}
          <button
            className="absolute top-6 right-6 z-[1010] rounded-full bg-white/20 p-2 text-white hover:bg-white/30 focus:outline-none"
            onClick={closeModal}
            aria-label="إغلاق"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Previous Button - always visible */}
          <button
            className={`absolute top-1/2 left-4 z-[1010] -translate-y-1/2 rounded-full border-2 border-blue-400 p-2 text-blue-500 transition ${
              currentIndex === 0
                ? "cursor-not-allowed bg-white/10 opacity-40"
                : "bg-white/20 hover:bg-white/30"
            } `}
            onClick={(e) => {
              e.stopPropagation();
              if (currentIndex > 0) showPrev();
            }}
            aria-label="السابق"
          >
            <ArrowLeft className="h-5 w-5 lg:h-7 lg:w-7" />
          </button>

          {/* Next Button - always visible */}
          <button
            className={`absolute top-1/2 right-4 z-[1010] -translate-y-1/2 rounded-full border-2 border-blue-400 p-2 text-blue-500 transition ${
              currentIndex === images.length - 1
                ? "cursor-not-allowed bg-white/10 opacity-40"
                : "bg-white/20 hover:bg-white/30"
            } `}
            onClick={(e) => {
              e.stopPropagation();
              if (currentIndex < images.length - 1) showNext();
            }}
            aria-label="التالي"
          >
            <ArrowRight className="h-5 w-5 lg:h-7 lg:w-7" />
          </button>

          {/* Image Viewer */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`صورة ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-lg transition-opacity duration-300"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
