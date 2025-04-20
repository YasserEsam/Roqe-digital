"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { useState, useEffect } from "react";

const Brands = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * brandsData.length);
      setHoveredIndex(randomIndex);
      setTimeout(() => setHoveredIndex(null), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-20 dark:opacity-10"></div>
        <div className="absolute bottom-12 right-12 w-72 h-72 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 opacity-20 dark:opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-20 dark:opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Our Trusted Partners</h2>
              <div className="mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <div 
              className={`flex gap-6 flex-wrap items-center justify-center rounded-2xl 
                bg-white bg-opacity-80 backdrop-blur-sm px-8 py-10 
                dark:bg-gray-900 dark:bg-opacity-80 
                shadow-[0_8px_32px_rgba(0,0,0,0.05)] 
                dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] 
                border border-gray-100 dark:border-gray-800
                transition-all duration-500 ease-in-out
                ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
            >
              {brandsData.map((brand, index) => (
                <SingleBrand 
                  key={brand.id} 
                  brand={brand} 
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

export default Brands;

const SingleBrand = ({ 
  brand, 
  isHighlighted,
  onMouseEnter,
  onMouseLeave
}: { 
  brand: Brand; 
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const { href, image, name } = brand;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className={`group relative flex flex-col items-center justify-center 
        rounded-2xl overflow-hidden p-6
        transition-all duration-300 ease-in-out
        ${isHighlighted 
          ? 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 scale-105 z-10' 
          : 'bg-white dark:bg-gray-800 hover:scale-105'
        }
        border border-gray-100 dark:border-gray-700
        ${isHighlighted 
          ? 'shadow-[0_10px_25px_rgba(136,58,234,0.15)] dark:shadow-[0_10px_25px_rgba(136,58,234,0.2)]' 
          : 'shadow-sm hover:shadow-md'
        }
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        width: '140px',
        height: '140px',
      }}
    >
      {/* Decorative Circles */}
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-500/10 dark:to-pink-500/10 -mr-10 -mt-10 transition-transform duration-500 ${isHighlighted ? 'scale-125' : 'scale-100'}`}></div>
      <div className={`absolute bottom-0 left-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/30 dark:from-blue-500/10 dark:to-cyan-500/10 -ml-8 -mb-8 transition-transform duration-500 ${isHighlighted ? 'scale-125' : 'scale-100'}`}></div>
      
      <div className={`relative h-16 w-16 mb-3 transition-all duration-300 ${isHighlighted ? 'scale-110' : ''}`}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      
      <span className={`text-center text-sm font-semibold transition-all duration-300
        ${isHighlighted 
          ? 'text-purple-600 dark:text-purple-300' 
          : 'text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-300'
        }`}>
        {name}
      </span>
      
      {/* Bottom highlight bar */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-b-xl ${isHighlighted ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
    </a>
  );
};