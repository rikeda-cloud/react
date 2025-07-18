"use client";

import { useRouter } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ChakraButton from "./ChakraButton";
import { HStack, VStack } from "@chakra-ui/react";
import { RiLoginBoxLine, RiPlayLine, RiUserAddLine } from "react-icons/ri";

function HomePageButtons() {
  const router = useRouter();

  return (
    <VStack spacing={8}>
      <LanguageSwitcher />
      <ChakraButton size="lg" onClick={() => router.push("/game")}>
        Play<RiPlayLine />
      </ChakraButton>
      <HStack spacing={4}>
        <ChakraButton size="lg" onClick={() => router.push("/login")}>
          <RiLoginBoxLine />Login
        </ChakraButton>
        <ChakraButton size="lg" onClick={() => router.push("/signin")}>
          <RiUserAddLine />Signin
        </ChakraButton>
      </HStack>
    </VStack>
  );
}

export default HomePageButtons;
