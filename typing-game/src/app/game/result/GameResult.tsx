"use client";

import { Box, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { RiHome2Line, RiRestartLine } from "react-icons/ri";
import ChakraButton from "@/components/ChakraButton";

function GameResult() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = searchParams.get("score");

  return (
    <Center w="full" maxW="4xl" px="4">
      <VStack spacing={8} textAlign="center" w="full">
        <Heading as="h1" size="2xl" color="white">
          Game Result
        </Heading>
        <Box
          bg="gray.800"
          borderRadius="lg"
          p={8}
          boxShadow="lg"
          w="full"
          maxW="md"
        >
          <Text fontSize="2xl" color="gray.300" mb={4}>
            Your Score
          </Text>
          <Text fontSize="7xl" fontWeight="bold" color="yellow.400">
            {score}
          </Text>
        </Box>
        <HStack spacing={4} mt={8}>
          <ChakraButton onClick={() => router.push("/game")}>
            <RiRestartLine /> Play Again
          </ChakraButton>
          <ChakraButton onClick={() => router.push("/")}>
            <RiHome2Line /> Back to Home
          </ChakraButton>
        </HStack>
      </VStack>
    </Center>
  );
}

export default GameResult;
