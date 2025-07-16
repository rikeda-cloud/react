"use client";

import { typingQuestions } from "@/data/typingData";
import React from 'react';

function getRandomQuestion() {
  const randomIdx = Math.floor(Math.random() * typingQuestions.length);
  return typingQuestions[randomIdx];
}

function Game() {
  const [currentQuestion, setCurrentQuestion] =
    React.useState(getRandomQuestion());
  const [idx, setIdx] = React.useState(0);

  // keyが押された場合に動くハンドラーをセット
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentQuestion.romaji[idx] === e.key) {
        setIdx((prevIdx) => prevIdx + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [idx, currentQuestion]);

  // 問題をクリアしたら次の問題へ
  React.useEffect(() => {
    if (idx === currentQuestion.romaji.length) {
      setCurrentQuestion(getRandomQuestion());
      setIdx(0);
    }
  }, [idx, currentQuestion]);

  return (
    <>
      <p>{currentQuestion.text}</p>
      <p>{idx === 0 ? "" : currentQuestion.romaji.slice(0, idx)}</p>
    </>
  )
}

export default Game;
