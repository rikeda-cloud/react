"use client";

import { useRouter } from "next/navigation";
import SimpleButton from "./SimpleButton";

interface ButtonConfig {
  label: string;
  path: string;
  textColor?: string;
  backgroundColor?: string;
}

function HomePageButtons() {
  const router = useRouter();
  const btnSize = { h: 100, w: 200 };

  const buttons: ButtonConfig[] = [
    { label: "Login", path: "/login" },
    { label: "Signin", path: "/signin" },
    {
      label: "Play",
      path: "/game",
      textColor: "#FFFFFF",
      backgroundColor: "#2563F0",
    },
  ];

  return (
    <>
      {buttons.map((btn) => (
        <SimpleButton
          key={btn.label}
          height={btnSize.h}
          width={btnSize.w}
          textColor={btn.textColor}
          backgroundColor={btn.backgroundColor}
          onClick={() => router.push(btn.path)}
        >
          {btn.label}
        </SimpleButton>
      ))}
    </>
  );
}

export default HomePageButtons;
