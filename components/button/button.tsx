import React, { ReactNode } from "react";

interface PortalButtonProps {
  text: string;
  iconSrc?: string; // Optional icon
  iconComponent?: ReactNode; // Optional icon
}

const Button: React.FC<PortalButtonProps> = ({
  text,
  iconSrc,
  iconComponent,
}) => {
  return (
    <button className="bg-teal hover:bg-peach text-black font-bold py-2 px-4 rounded">
      <div className="flex items-center gap-2 relative z-10">
        <span className="whitespace-nowrap">{text}</span>
        {iconSrc && <img src={iconSrc} alt="icon" className="w-5 h-4" />}
        {iconComponent && iconComponent}
      </div>
    </button>
  );
};

export default Button;
