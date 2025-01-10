// Button.tsx
import DefaultBtn from "@/assets/svgs/default_btn";
import HoverBtn from "@/assets/svgs/hover_btn";
import React, { useState, useMemo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
  hoverColor?: string;
  text?: string;
  iconSrc?: string;
  iconComponent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  width = 200,
  height,
  // color = "#3BB589",
  // hoverColor = "#EBB076",
  text = "Button",
  iconSrc,
  iconComponent,
  onClick,
  className = "",
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the SVG's aspect ratio based on the original viewBox
  const aspectRatio = 153 / 511; // height / width ≈ 0.299

  // Calculate height if not provided to maintain aspect ratio
  const calculatedHeight = useMemo(() => {
    if (height) {
      return typeof height === "number" ? `${height}px` : height;
    }
    if (typeof width === "number") {
      return `${width * aspectRatio}px`;
    }
    // If width is a string (e.g., '50%'), let CSS handle the height
    return undefined;
  }, [height, width, aspectRatio]);

  // Combine custom styles with button styles
  const buttonStyles: React.CSSProperties = {
    position: "relative",
    width: typeof width === "number" ? `${width}px` : width,
    height: calculatedHeight,
    padding: 0, // Reset padding to control layout
    border: "none",
    background: "none",
    cursor: "pointer",
    overflow: "hidden", // Ensure SVG doesn't overflow
    transition: "all 0.3s ease", // Smooth transition for hover
    ...style,
  };

  // Styles for the SVG background
  const svgStyles: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    transition: "all 0.3s ease", // Smooth transition for hover
  };

  // Styles for the content (text and icons)
  const contentStyles: React.CSSProperties = {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0 16px", // Adjust padding as needed
    color: "#000", // Text color
    fontWeight: "bold",
    pointerEvents: "none", // Ensure content doesn't capture pointer events
    textAlign: "center",
  };

  // Styles for icons (Removed fixed width and height)
  const iconStyles: React.CSSProperties = {
    marginLeft: iconSrc || iconComponent ? "8px" : undefined,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button
      className={`${className}`}
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      aria-label={text}
      {...props}
    >
      {/* SVG Background */}
      <div style={svgStyles}>
        {isHovered ? (
          <HoverBtn width="100%" height="100%" />
        ) : (
          <DefaultBtn width="100%" height="100%" />
        )}
      </div>

      {/* Button Content */}
      <div style={contentStyles}>
        <span className="whitespace-nowrap text-xl font-semibold pr-1">
          {text}
        </span>
        {(iconSrc || iconComponent) && (
          <span style={iconStyles}>
            {iconSrc && (
              <img
                src={iconSrc}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            )}
            {iconComponent && iconComponent}
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;
