"use client";

import { Tech } from "@/types/tech";
import Image from "next/image";
import techsData from "./techsData";
import { useState } from "react";
import DecorativeBackground from "../Common/DecorativeBackground";
import TechnologiesSection from "./TechnologiesSection";
import Header from "./Header";

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden pt-16" data-aos="fade-up">
      {/* Background Decorative Circles */}
      <DecorativeBackground />
      <div className="relative z-10 container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <Header title="التقنيات المستخدمة في مشاريعنا" />
            <TechnologiesSection techsData={techsData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;