"use client";

import { useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ChakraButton from "./ChakraButton";

function HomePageButtons() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center space-y-8">
      <LanguageSwitcher />
      <ChakraButton onClick={() => router.push("/game")}>
        Play
      </ChakraButton>
      <div className="flex space-x-4">
        <ChakraButton onClick={() => router.push("/login")}>
          Login
        </ChakraButton>
        <ChakraButton onClick={() => router.push("/signin")}>
          Signin
        </ChakraButton>
      </div>
    </div>
  );
}

export default HomePageButtons;
