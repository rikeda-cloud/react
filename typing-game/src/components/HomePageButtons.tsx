"use client";

import { HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { RiLoginBoxLine, RiPlayLine, RiUserAddLine } from "react-icons/ri";
import ChakraButton from "./ChakraButton";
import ChakraLanguageSwitcher from "./ChakraLanguageSwitcher";

function HomePageButtons() {
  const router = useRouter();

  return (
    <VStack spacing={8}>
      <ChakraLanguageSwitcher />
      <ChakraButton size="lg" onClick={() => router.push("/game")}>
        Play
        <RiPlayLine />
      </ChakraButton>
      <HStack spacing={4}>
        <ChakraButton size="lg" onClick={() => router.push("/login")}>
          <RiLoginBoxLine />
          Login
        </ChakraButton>
        <ChakraButton size="lg" onClick={() => router.push("/signin")}>
          <RiUserAddLine />
          Signin
        </ChakraButton>
      </HStack>
    </VStack>
  );
}

export default HomePageButtons;
