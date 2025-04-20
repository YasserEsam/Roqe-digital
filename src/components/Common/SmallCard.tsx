"use client";

import Image from "next/image";

const SmallCard = ({
  isHighlighted,
  onMouseEnter,
  onMouseLeave,
  image,
  label,
  value,
  href,
}: {
  isHighlighted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  image?: string;
  label: string;
  value?: string | number;
  href?: string;
}) => {
  const isStat = value !== undefined;
  const isTech = image !== undefined && href;

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        target: "_blank",
        rel: "nofollow noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-6
        transition-all duration-300 ease-in-out border shadow-sm hover:shadow-md
        ${isHighlighted ? "z-10 scale-105 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 shadow-[0_10px_25px_rgba(136,58,234,0.15)] dark:shadow-[0_10px_25px_rgba(136,58,234,0.2)]" : "bg-white dark:bg-gray-800"}
        border-gray-100 dark:border-gray-700
      `}
      {...(!isStat && { style: { width: 140, height: 140 } })}
    >
      {/* Highlight Circles */}
      <HighlightCircle position="topRight" isHighlighted={isHighlighted} />
      <HighlightCircle position="bottomLeft" isHighlighted={isHighlighted} />

      {/* Conditional Content */}
      {isStat ? (
        <>
          <h2 className="text-4xl font-bold text-purple-400 mb-2">{value}</h2>
          <p className="text-body-color dark:text-body-color-dark">{label}</p>
        </>
      ) : (
        <>
          {image && (
            <div
              className={`relative mb-3 h-16 w-16 transition-all duration-300 ${
                isHighlighted ? "scale-110" : ""
              }`}
            >
              <Image
                src={image}
                alt={label}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          )}
          <span
            className={`text-center text-sm font-semibold transition-all duration-300 ${
              isHighlighted
                ? "text-purple-600 dark:text-purple-300"
                : "text-gray-700 group-hover:text-purple-600 dark:text-gray-300 dark:group-hover:text-purple-300"
            }`}
          >
            {label}
          </span>
        </>
      )}

      {/* Bottom bar for Tech cards only */}
      {isTech && (
        <div
          className={`absolute bottom-0 left-0 h-1 rounded-b-xl bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
            isHighlighted ? "w-full" : "w-0 group-hover:w-full"
          }`}
        ></div>
      )}
    </Wrapper>
  );
};

export default SmallCard;

// Circle Effect Reusable
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
