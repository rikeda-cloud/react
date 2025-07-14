import React, { ReactNode } from "react";

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
  const buttonClasses = "border-2 rounded-lg cursor-pointer";
  const fontSize = height * 0.4;

  const buttonStyles: React.CSSProperties = {
    height: `${height}px`,
    width: `${width}px`,
    color: textColor,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    fontFamily: "var(--font-inter)",
    fontSize: `${fontSize}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button className={buttonClasses} style={buttonStyles} {...props}>
      {children}
    </button>
  );
}

export default SimpleButton;
