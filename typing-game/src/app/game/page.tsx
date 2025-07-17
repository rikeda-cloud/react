"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import { useTypingGame } from "@/components/useTypingGame";

function GamePage() {
  const router = useRouter();
  const {
    question,
    romaji,
    idx,
    questionTimeProgress,
    gameTimeProgress,
    score,
    isGameFinished,
  } = useTypingGame();

  useEffect(() => {
    if (isGameFinished) {
      router.push(`/game/result?score=${score}`);
    }
  }, [isGameFinished, router, score]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Header />

      <div className="text-center w-full max-w-4xl px-4">
        <div className="mb-8">
          <ProgressBar progress={gameTimeProgress} />
        </div>

        <p className="text-2xl font-bold text-white mb-4">
          Score: <span className="text-yellow-400">{score}</span>
        </p>

        <div className="mb-8">
          <ProgressBar progress={questionTimeProgress} color="#00FFFF" />
        </div>

        <p className="text-4xl mb-4 font-bold">{question}</p>
        <p className="text-2xl font-mono">
          <span style={{ color: "#BAC521" }}>{romaji?.slice(0, idx)}</span>
          <span className="text-gray-500">{romaji?.slice(idx)}</span>
        </p>
      </div>
    </div>
  );
}

export default GamePage;
