"use client";

import type React from "react";
import { type ReactNode } from "react";
import { Button, type ButtonProps } from "@chakra-ui/react";

interface ChakraButtonProps extends ButtonProps {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
}

function ChakraButton({
  children,
  size = "md",
  ...props
}: ChakraButtonProps) {
  return (
    <Button size={size} fontFamily="var(--font-inter)" {...props}>
      {children}
    </Button>
  );
}

export default ChakraButton;
