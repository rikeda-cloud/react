import React, { ReactNode } from "react";

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  height: number;
  width: number;
  color?: string;
  borderColor?: string;
};

function SimpleButton({
  children,
  height,
  width,
  color = "#FFFFFF",
  borderColor = "#E8EBEE",
  ...props
}: SimpleButtonProps) {
  const buttonClasses = "border-2 rounded-lg cursor-pointer";

  const buttonStyles: React.CSSProperties = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: color,
    borderColor: borderColor,
    fontFamily: "var(--font-inter)",
  };

  return (
    <button className={buttonClasses} style={buttonStyles} {...props}>
      {children}
    </button>
  );
}

export default SimpleButton;
