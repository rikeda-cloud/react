"use client";

import React from 'react';
import { useTypingGame } from "@/hooks/useTypingGame";
import TimeProgressBar from './TimeProgressBar';

function Game() {
  const { text, romaji, idx, nextQuestion } = useTypingGame();

  const handleTimeUp = () => {
    console.log("Time is up!");
    nextQuestion();
  }

  return (
    <div className="text-center w-full max-w-4xl px-4">
      <div className="mb-8">
        <TimeProgressBar duration={10} onComplete={handleTimeUp} />
      </div>

      <p className="text-4xl mb-4 font-bold">{text}</p>
      <p className="text-2xl font-mono">
        <span style={{ color: "#BAC521" }}>
          {romaji?.slice(0, idx)}
        </span>
        <span className="text-gray-500">
          {romaji?.slice(idx)}
        </span>
      </p>
    </div>
  )
}

export default Game;
