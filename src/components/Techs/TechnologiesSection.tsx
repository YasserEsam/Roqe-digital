import { useState } from "react";
import SmallCard from "../Common/SmallCard";

const TechnologiesSection = ({techsData}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-opacity-80 dark:bg-opacity-80 grid grid-cols-2 items-center justify-center gap-5 rounded-2xl border border-gray-100 bg-white px-8 py-10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-all duration-500 ease-in-out sm:flex sm:flex-wrap dark:border-gray-800 dark:bg-gray-900 dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
      {techsData.map((tech, index) => (
        <SmallCard
          key={tech.id}
          image={tech.image}
          label={tech.name}
          href={tech.href}
          isHighlighted={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};
export default TechnologiesSection;