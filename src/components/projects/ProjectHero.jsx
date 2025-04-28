"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Clock,
} from "lucide-react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function ProjectHero({ project }) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && project.images?.length > 0) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: !isMobile,
        },
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        },
        on: {
          init: function () {
            this.navigation.update();
          },
        },
      });

      return () => {
        if (swiper && !swiper.destroyed) {
          swiper.destroy();
        }
      };
    }
  }, [project.images, isMounted, isMobile]);

  if (!isMounted) return null;

  return (
    <div className="relative w-full overflow-hidden">
      {project.images?.length > 0 ? (
        <>
          <div ref={swiperRef} className="swiper h-[60vh] w-full md:h-[90vh]">
            <div className="swiper-wrapper">
              {project.images.map((img, index) => (
                <div key={index} className="swiper-slide relative h-full w-full">
                  {/* Beautiful Gradient Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
                  
                  {/* Subtle Animated Particles Overlay */}
                  <div className="absolute inset-0 z-10 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                          width: `${Math.random() * 4 + 1}px`,
                          height: `${Math.random() * 4 + 1}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                          animationDelay: `${Math.random() * 5}s`,
                        }}
                      />
                    ))}
                  </div>
                  
                  <Image
                    src={img}
                    alt={`${project.title} - صورة ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
              ))}
            </div>

            {/* Enhanced pagination dots */}
            <div className="swiper-pagination absolute bottom-6 z-20 !flex items-center justify-center gap-1.5"></div>

            {/* Refined navigation buttons */}
            <button
              ref={nextRef}
              className="absolute top-1/2 left-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 active:scale-95 dark:bg-black/30 dark:hover:bg-black/40"
              aria-label="السابق"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              ref={prevRef}
              className="absolute top-1/2 right-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 active:scale-95 dark:bg-black/30 dark:hover:bg-black/40"
              aria-label="التالي"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Completely redesigned project details card */}
          <div
            className={`z-20 rounded-xl transition-all duration-500 overflow-hidden
              ${isMobile
                ? "relative mx-auto -mt-16 w-11/12 max-w-lg"
                : "absolute right-8 bottom-8 w-full max-w-md lg:right-12 lg:bottom-12 xl:max-w-lg"
              }`}
          >
            {/* Card with frosted glass effect and border glow */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/70 p-6 shadow-lg backdrop-blur-md dark:bg-gray-900/80 dark:shadow-black/20">
              {/* Subtle animated accent glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl filter dark:from-purple-500/10 dark:to-pink-500/10"></div>
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-500/20 to-teal-500/20 blur-3xl filter dark:from-blue-600/10 dark:to-teal-600/10"></div>
              
              {/* Enhanced tag section with refined spacing */}
              <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-full bg-purple-100 px-3 py-1 font-medium text-purple-700 ring-1 ring-purple-200/50 dark:bg-purple-950/40 dark:text-purple-300 dark:ring-purple-700/30">
                  {project.category}
                </span>
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-800 ring-1 ring-blue-100/70 dark:bg-blue-950/40 dark:text-blue-300 dark:ring-blue-700/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Elegant typography with better spacing */}
              <h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                {project.title}
              </h1>

              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-700 md:text-base dark:text-gray-200">
                {project.description}
              </p>

              {/* Refined metadata section */}
              <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-gray-200/80 pt-3 text-sm text-gray-600 dark:border-gray-700/80 dark:text-gray-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                  <span>تاريخ الإنجاز: {project.completionDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  <span>مدة التنفيذ: {project.duration}</span>
                </div>
              </div>

              {/* Stylish CTA button */}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-purple-700 hover:to-pink-600 hover:shadow-lg focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  <span>مشاهدة المشروع</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            {project.title}
          </h1>
        </div>
      )}

      {/* Global styles for the particle animation */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}