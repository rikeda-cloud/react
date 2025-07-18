"use client";

import { useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ChakraButton from "./ChakraButton";
import { HStack, VStack } from "@chakra-ui/react";

function HomePageButtons() {
  const router = useRouter();

  return (
    <VStack spacing={8}>
      <LanguageSwitcher />
      <ChakraButton size="lg" onClick={() => router.push("/game")}>
        Play
      </ChakraButton>
      <HStack spacing={4}>
        <ChakraButton size="lg" onClick={() => router.push("/login")}>
          Login
        </ChakraButton>
        <ChakraButton size="lg" onClick={() => router.push("/signin")}>
          Signin
        </ChakraButton>
      </HStack>
    </VStack>
  );
}

export default HomePageButtons;
