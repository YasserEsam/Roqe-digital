"use client";
import { useEffect, useState } from "react";

const TypingText = ({ text, speed = 100, pause = 1500, loop = false }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, pause);
      return () => clearTimeout(pauseTimeout);
    }
  }, [index, text, speed, pause, loop]);

  return (
    <h1
      data-aos="fade-in"
      className="typing-cursor mb-5 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white"
    >
      {displayedText}
    </h1>
  );
};

export default TypingText;
