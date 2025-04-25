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
    <div className="relative w-full">
      {project.images?.length > 0 ? (
        <>
          <div ref={swiperRef} className="swiper h-[60vh] w-full md:h-[80vh]">
            <div className="swiper-wrapper">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className="swiper-slide relative h-full w-full"
                >
                  {/* Enhanced overlay with better gradient and opacity control */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
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

            <div className="swiper-pagination absolute bottom-6 z-20 !flex items-center justify-center gap-1"></div>

            <button
              ref={nextRef}
              className="absolute top-1/2 left-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110 active:scale-95"
              aria-label="السابق"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              ref={prevRef}
              className="absolute top-1/2 right-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-110 active:scale-95"
              aria-label="التالي"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Project details card - now responsive with better positioning */}
          <div className={`absolute lg:mr-2 z-20 w-full max-w-lg rounded-xl bg-white/10 p-6 backdrop-blur-md transition-all duration-300 dark:bg-gray-900/60
            ${isMobile ? 
              'static mx-auto mt-4 -translate-y-0' : 
              'right-8 bottom-8 lg:right-16 lg:bottom-16'}
          `}>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                {project.category}
              </span>
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-2 text-2xl font-bold text-white md:text-3xl">
              {project.title}
            </h1>

            <p className="mb-4 line-clamp-2 text-sm text-white/90 md:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>تاريخ الإنجاز: {project.completionDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>مدة التنفيذ: {project.duration}</span>
              </div>
            </div>

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-sm font-medium text-white transition-all hover:from-purple-700 hover:to-pink-600 hover:shadow-lg"
              >
                مشاهدة المشروع
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </>
      ) : (
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            {project.title}
          </h1>
        </div>
      )}
    </div>
  );
}