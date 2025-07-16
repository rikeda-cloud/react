"use client";

import { useState, useEffect } from "react";
import { typingQuestions, TypingQuestion } from "@/data/typingData";

const getRandomQuestion = () => {
  return typingQuestions[Math.floor(Math.random() * typingQuestions.length)];
}

export const useTypingGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState<TypingQuestion | null>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion());
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentQuestion?.romaji[idx] === e.key) {
        setIdx(prevIdx => prevIdx + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentQuestion, idx]);

  const nextQuestion = () => {
    setCurrentQuestion(getRandomQuestion());
    setIdx(0);
  }

  useEffect(() => {
    if (idx === currentQuestion?.romaji.length) {
      nextQuestion();
    }
  }, [currentQuestion, idx]);

  return {
    text: currentQuestion?.text,
    romaji: currentQuestion?.romaji,
    idx: idx,
    nextQuestion: nextQuestion,
  };
}
