"use client";

import { Tech } from "@/types/tech";
import Image from "next/image";
import techsData from "./techsData";
import { useState } from "react";

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden pt-16">
      {/* Background Decorative Circles */}
      <DecorativeBackground />

      <div className="relative z-10 container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <Header />
            <div className="bg-opacity-80 dark:bg-opacity-80 grid grid-cols-2 items-center justify-center gap-5 rounded-2xl border border-gray-100 bg-white px-8 py-10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-500 ease-in-out sm:flex sm:flex-wrap dark:border-gray-800 dark:bg-gray-900 dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              {techsData.map((tech, index) => (
                <SingleTech
                  key={tech.id}
                  tech={tech}
                  isHighlighted={hoveredIndex === index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const DecorativeBackground = () => (
  <div className="pointer-events-none absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
    <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-20 dark:opacity-10"></div>
    <div className="absolute right-12 bottom-12 h-72 w-72 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 opacity-20 dark:opacity-10"></div>
    <div className="absolute top-1/2 left-1/3 h-36 w-36 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-20 dark:opacity-10"></div>
  </div>
);

const Header = () => (
  <div className="mb-10 text-center">
    <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">
      التقنيات المستخدمة في مشاريعنا
    </h2>
    <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
  </div>
);

const SingleTech = ({
  tech,
  isHighlighted,
  onMouseEnter,
  onMouseLeave,
}: {
  tech: Tech;
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const { href, image, name } = tech;

  const containerClasses = `
    group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-in-out
    ${isHighlighted ? "z-10 scale-105 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20" : "bg-white hover:scale-105 dark:bg-gray-800"}
    ${isHighlighted ? "shadow-[0_10px_25px_rgba(136,58,234,0.15)] dark:shadow-[0_10px_25px_rgba(136,58,234,0.2)]" : "shadow-sm hover:shadow-md"}
    border border-gray-100 dark:border-gray-700
  `;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className={containerClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width: 140, height: 140 }}
    >
      {/* Background Circles */}
      <HighlightCircle position="topRight" isHighlighted={isHighlighted} />
      <HighlightCircle position="bottomLeft" isHighlighted={isHighlighted} />

      <div className={`relative mb-3 h-16 w-16 transition-all duration-300 ${isHighlighted ? "scale-110" : ""}`}>
        <Image src={image} alt={name} width={64} height={64} className="object-contain" />
      </div>

      <span
        className={`text-center text-sm font-semibold transition-all duration-300 ${
          isHighlighted
            ? "text-purple-600 dark:text-purple-300"
            : "text-gray-700 group-hover:text-purple-600 dark:text-gray-300 dark:group-hover:text-purple-300"
        }`}
      >
        {name}
      </span>

      <div
        className={`absolute bottom-0 left-0 h-1 rounded-b-xl bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
          isHighlighted ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></div>
    </a>
  );
};

const HighlightCircle = ({
  position,
  isHighlighted,
}: {
  position: "topRight" | "bottomLeft";
  isHighlighted: boolean;
}) => {
  const baseClass = "absolute rounded-full transition-transform duration-500";
  const scale = isHighlighted ? "scale-125" : "scale-100";

  if (position === "topRight") {
    return (
      <div
        className={`${baseClass} top-0 right-0 -mt-10 -mr-10 h-20 w-20 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-500/10 dark:to-pink-500/10 ${scale}`}
      ></div>
    );
  }

  return (
    <div
      className={`${baseClass} bottom-0 left-0 -mb-8 -ml-8 h-16 w-16 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 dark:from-blue-500/10 dark:to-cyan-500/10 ${scale}`}
    ></div>
  );
};
