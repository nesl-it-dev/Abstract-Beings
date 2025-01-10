// components/ResponsiveBackgroundImage.tsx

import Image from "next/image";
import React from "react";

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

interface ResponsiveBackgroundImageProps {
  images: Record<Breakpoint, string>;
  alt?: string;
  className?: string;
}

const breakpointOrder: Breakpoint[] = ["base", "sm", "md", "lg", "xl", "2xl"];

const breakpointMediaQueries: Record<Breakpoint, string> = {
  base: "(max-width: 639px)",
  sm: "(min-width: 640px) and (max-width: 767px)",
  md: "(min-width: 768px) and (max-width: 1023px)",
  lg: "(min-width: 1024px) and (max-width: 1279px)",
  xl: "(min-width: 1280px) and (max-width: 1535px)",
  "2xl": "(min-width: 1536px)",
};

const ResponsiveBackgroundImage: React.FC<ResponsiveBackgroundImageProps> = ({
  images,
  alt = "",
  className = "",
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <picture className="absolute inset-0 w-full h-full block">
        {breakpointOrder.slice(1).map((breakpoint) => (
          <source
            key={breakpoint}
            srcSet={images[breakpoint]}
            media={breakpointMediaQueries[breakpoint]}
          />
        ))}

        <Image
          src={images.base}
          alt={alt}
          fill
          className="w-full h-full object-cover"
          priority
        />
      </picture>
    </div>
  );
};

export default ResponsiveBackgroundImage;
