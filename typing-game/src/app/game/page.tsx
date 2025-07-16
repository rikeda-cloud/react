"use client";

import React from 'react';
import { useTypingGame } from "@/components/useTypingGame";
import Header from "@/components/Header";
import ProgressBar from '@/components/ProgressBar';

function GamePage() {
  const { text, romaji, idx, questionTimeProgress, gameTimeProgress }
    = useTypingGame();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Header />


      <div className="text-center w-full max-w-4xl px-4">
        <div className="mb-8">
          <ProgressBar progress={gameTimeProgress} />
        </div>

        <div className="mb-8">
          <ProgressBar progress={questionTimeProgress} />
        </div>

        <p className="text-4xl mb-4 font-bold">{text}</p>
        <p className="text-2xl font-mono">
          <span style={{ color: "#BAC521" }}>{romaji?.slice(0, idx)}</span>
          <span className="text-gray-500">{romaji?.slice(idx)}</span>
        </p>
      </div>
    </div>
  );
}

export default GamePage;
