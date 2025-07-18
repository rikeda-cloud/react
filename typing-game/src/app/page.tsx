"use client";

import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import Header from "@/components/Header";
import HomePageButtons from "@/components/HomePageButtons";

function Home() {
  return (
    <Box minH="100vh">
      <Header />
      <Center as="main" minH="100vh" px="4">
        <VStack spacing={12} textAlign="center">
          <Heading as="h1" size={{ base: "2xl", md: "4xl" }} fontWeight="bold">
            Welcome to the
            <br />
            Typing Game
          </Heading>
          <HomePageButtons />
        </VStack>
      </Center>
    </Box>
  );
}

export default Home;
