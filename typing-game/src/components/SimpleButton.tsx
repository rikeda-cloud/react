"use client";

import React, { ReactNode, useState } from "react";

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  height: number;
  width: number;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
};

function SimpleButton({
  children,
  height,
  width,
  textColor = "#000000",
  backgroundColor = "#FFFFFF",
  borderColor = "#E8EBEE",
  ...props
}: SimpleButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = "border-2 rounded-lg cursor-pointer";
  const fontSize = height * 0.4;

  const currentTextColor = isHovered ? backgroundColor : textColor;
  const currentBackgroundColor = isHovered ? borderColor : backgroundColor;
  const currentBorderColor = isHovered ? backgroundColor : borderColor;

  const buttonStyles: React.CSSProperties = {
    height: `${height}px`,
    width: `${width}px`,
    color: currentTextColor,
    backgroundColor: currentBackgroundColor,
    borderColor: currentBorderColor,
    fontFamily: "var(--font-inter)",
    fontSize: `${fontSize}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <button
      className={buttonClasses}
      style={buttonStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export default SimpleButton;
