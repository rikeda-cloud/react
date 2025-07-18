"use client";

import { useCallback, useEffect, useState } from "react";
import { typingQuestions } from "@/data/TypingQuestions";
import { type TypingQuestion } from "@/data/TypingQuestion";

const GAME_DURATION_SECONDS = 30; // ゲーム全体の制限時間
const QUESTION_DURATION_SECONDS = 5; // 1問の制限時間
const TIMER_INTERVAL_MS = 100; // タイマーの更新間隔

export interface TypingGameResult {
  question: string;
  romaji: string;
  idx: number;
  gameTimeProgress: number;
  questionTimeProgress: number;
  score: number;
  isGameFinished: boolean;
}

const getRandomQuestion = () => {
  return typingQuestions[Math.floor(Math.random() * typingQuestions.length)];
};

export const useTypingGame = (): TypingGameResult => {
  const [currentQuestion, setCurrentQuestion] = useState<TypingQuestion | null>(
    null,
  );
  const [idx, setIdx] = useState(0);
  const [questionTimeProgress, setQuestionTimeProgress] = useState(0); // 1問のタイマー
  const [gameTimeProgress, setGameTimeProgress] = useState(0); // ゲーム全体のタイマー

  const [score, setScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const nextQuestion = useCallback(() => {
    // 次の問題に移る
    setCurrentQuestion(getRandomQuestion());
    setIdx(0);
    setQuestionTimeProgress(0);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // キーボードのキーが押されたときの処理
      if (currentQuestion?.romaji[idx] === e.key) {
        setIdx((prevIdx) => prevIdx + 1);
      }
    },
    [currentQuestion, idx],
  );

  useEffect(() => {
    // 初回のみ、クライアント側で値をセット
    setCurrentQuestion(getRandomQuestion());
  }, []);

  useEffect(() => {
    if (isGameFinished) return;

    window.addEventListener("keydown", handleKeyDown);

    // 正解判定
    if (currentQuestion && idx > 0 && idx === currentQuestion.romaji.length) {
      setScore((prevScore) => prevScore + currentQuestion.romaji.length);
      nextQuestion();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestion, idx, isGameFinished, handleKeyDown, nextQuestion]);

  useEffect(() => {
    // ゲームの制限時間を管理
    const durationInMs = GAME_DURATION_SECONDS * 1000;
    const increment = (TIMER_INTERVAL_MS / durationInMs) * 100;

    const timer = setInterval(() => {
      setGameTimeProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          setIsGameFinished(true);
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, TIMER_INTERVAL_MS);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // 1問の制限時間を管理
    if (isGameFinished) return;
    const durationInMs = QUESTION_DURATION_SECONDS * 1000;
    const increment = (TIMER_INTERVAL_MS / durationInMs) * 100;

    const timer = setInterval(() => {
      setQuestionTimeProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          nextQuestion();
          return 0;
        }
        return newProgress;
      });
    }, TIMER_INTERVAL_MS);

    return () => {
      clearInterval(timer);
    };
  }, [isGameFinished, nextQuestion]);

  return {
    question: currentQuestion?.text || "",
    romaji: currentQuestion?.romaji || "",
    idx: idx,
    questionTimeProgress: questionTimeProgress,
    gameTimeProgress: gameTimeProgress,
    score: score,
    isGameFinished: isGameFinished,
  };
};
