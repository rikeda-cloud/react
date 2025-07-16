"use client";

import React from 'react';
import { useTypingGame } from "@/hooks/useTypingGame";

function Game() {
  const { text, romaji, idx } = useTypingGame();

  return (
    <div className="text-center">
      <p className="text-2xl mb-2 font-bold">{text}</p>
      <p className="text-lg font-mono">
        <span style={{ color: "#BAC521" }}>
          {romaji.slice(0, idx)}
        </span>
        <span className="text-gray-500">
          {romaji.slice(idx, romaji.length)}
        </span>
      </p>
    </div>
  )
}

export default Game;
