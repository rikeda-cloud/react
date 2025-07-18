"use client";

import type React from "react";
import { type ReactNode } from "react";
import { Button, type ButtonProps } from "@chakra-ui/react";

interface ChakraButtonProps extends ButtonProps {
  children: ReactNode;
}

function ChakraButton({
  children,
  ...props
}: ChakraButtonProps) {
  return (
    <Button fontFamily="var(--font-inter)" {...props}>
      {children}
    </Button>
  );
}

export default ChakraButton;
