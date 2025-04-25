import { useState } from "react";
import SmallCard from "../Common/SmallCard";

const TechnologiesSection = ({ techsData }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-opacity-80 dark:bg-opacity-80 flex flex-wrap justify-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-500 ease-in-out sm:gap-4 sm:px-6 sm:py-8 md:gap-5 md:px-8 md:py-10 dark:border-gray-800 dark:bg-gray-900 dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
      {techsData.map((tech, index) => (
        <div
          key={tech.id}
          className="flex w-[45%] justify-center px-2 sm:w-[30%] md:w-[22%] lg:w-[15%] xl:w-[13%]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <SmallCard
            key={tech.id}
            image={tech.image}
            label={tech.name}
            href={tech.href}
            isHighlighted={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        </div>
      ))}
    </div>
  );
};

export default TechnologiesSection;
