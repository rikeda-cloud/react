"use client";
import { useSearchParams } from 'next/navigation';
import SimpleButton from '@/components/SimpleButton';
import { useRouter } from "next/navigation";

function GameResult() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = searchParams.get("score");

  return (
    <div className="text-center w-full max-w-4xl px-4">
      <h1 className="text-5xl font-bold mb-6 text-white">Game Result</h1>
      <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg w-full max-w-md mx-auto">
        <p className="text-2xl text-gray-300 mb-4">Your Score</p>
        <p className="text-7xl font-bold text-yellow-400">{score}</p>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <SimpleButton height={100} width={300} textColor="#FFFFFF" backgroundColor="#4A90E2"
          borderColor="#FFFFFF" onClick={() => router.push("/game")}>
          Play Again
        </SimpleButton>
        <SimpleButton height={100} width={300} textColor="#FFFFFF" backgroundColor="#4A90E2"
          borderColor="#FFFFFF" onClick={() => router.push("/")}>
          Back to Home
        </SimpleButton>
      </div>
    </div>
  );
}

export default GameResult;
