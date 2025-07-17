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
      <h1 className="text-4xl font-bold mb-8">Result</h1>
      <p className="text-2xl font-bold text-white mb-4">
        Your Score: <span className="text-yellow-400">{score}</span>
      </p>
      <SimpleButton height={50} width={100} onClick={() => router.push("/game")}>
        Play Again
      </SimpleButton>
    </div>
  );
}

export default GameResult;
