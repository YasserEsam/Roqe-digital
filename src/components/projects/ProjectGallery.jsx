"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ProjectGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalLoading, setIsModalLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const modalRef = useRef(null);

  if (!images || images.length === 0) return null;

  // Handle thumbnail image load completion
  const handleThumbnailLoad = useCallback((index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  }, []);

  // Handle modal image load completion
  const handleModalImageLoad = useCallback(() => {
    setIsModalLoading(false);
  }, []);

  // Reset loading state when opening a new image
  useEffect(() => {
    if (selectedImage) {
      setIsModalLoading(true);

      // Lock body scroll when modal is open
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      // Focus modal for keyboard accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      // Restore scroll when modal closes
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [selectedImage]);

  // Close modal with escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div
      data-aos="fade-up"
      className="mb-12 rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800"
    >
      <h2 className="mb-6 text-right text-2xl font-bold text-gray-900 dark:text-white">
        معرض الصور
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
            onClick={() => setSelectedImage(image)}
            tabIndex={0}
            role="button"
            aria-label={`عرض صورة ${index + 1}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedImage(image);
              }
            }}
          >
            {/* Blurred Background */}

            <div
              className="absolute inset-0 bg-contain opacity-80 blur-sm"
              style={{
                backgroundImage: loadedImages[index] ? `url(${image})` : "none",
                transform: "scale(1.1)", // Prevent blur edge artifacts
              }}
            />

            {/* Loading skeleton */}
            {!loadedImages[index] && (
              <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700"></div>
            )}

            {/* Main Image with hover effect */}
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <Image
                src={image}
                alt={`${title} - صورة ${index + 1}`}
                width={400}
                height={300}
                onLoad={() => handleThumbnailLoad(index)}
                className={`object-contain transition-opacity duration-300 ${loadedImages[index] ? "opacity-100" : "opacity-0"}`}
              />
            </div>
             {/* Overlay for Hover */}
             <div className="absolute inset-0 z-20 transition-all group-hover:bg-black/30" />
             <div className="absolute inset-0  z-20 bg-black/0 transition-all duration-300 group-hover:bg-black/20 flex items-center justify-center">
              <span className="scale-0 transition-transform duration-300 text-white bg-black/60 rounded-full p-3 group-hover:scale-100 ">
                عرض
              </span>
            </div>
          </div>
          
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="معرض الصور"
        >
          <div
            className="animate-fadeIn relative h-auto max-h-[90vh] w-auto max-w-[90vw]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
          >
            <div className="relative flex items-center justify-center">
              {isModalLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-white"></div>
                </div>
              )}
              <Image
                src={selectedImage}
                alt={title || "صورة المعرض"}
                width={1920}
                height={1080}
                className={`h-auto max-h-[85vh] w-auto max-w-[85vw] rounded-lg object-contain shadow-2xl transition-opacity duration-300 ${isModalLoading ? "opacity-0" : "opacity-100"}`}
                priority
                quality={90}
                onLoad={handleModalImageLoad}
              />
            </div>
            <button
              className="absolute -top-12 right-0 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="إغلاق"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
