"use client";
import { useState } from "react";
import SmallCard from "../Common/SmallCard";

const StatsSection = ({ stats }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((item, index) => (
        <SmallCard
          key={index} 
          label={item.label}
          value={item.value}
          isHighlighted={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

export default StatsSection;
