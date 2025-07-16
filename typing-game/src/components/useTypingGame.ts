"use client";

import { useState, useEffect } from "react";
import { typingQuestions, TypingQuestion } from "@/data/typingData";

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
}

const getRandomQuestion = () => {
  return typingQuestions[Math.floor(Math.random() * typingQuestions.length)];
}

export const useTypingGame = (): TypingGameResult => {
  const [currentQuestion, setCurrentQuestion] = useState<TypingQuestion | null>(null);
  const [idx, setIdx] = useState(0);
  const [questionTimeProgress, setQuestionTimeProgress]
    = useState(0); // 1問のタイマー
  const [gameTimeProgress, setGameTimeProgress]
    = useState(0); // ゲーム全体のタイマー

  const [score, setScore] = useState(0);

  const nextQuestion = () => { // 次の問題に移る
    setCurrentQuestion(getRandomQuestion());
    setIdx(0);
    setQuestionTimeProgress(0);
  }

  useEffect(() => { // 初回のみ、クライアント側で値をセット
    setCurrentQuestion(getRandomQuestion());
  }, []);

  useEffect(() => { // キーボードイベントのリスナーを設定
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

  useEffect(() => { // idxがcurrentQuestionのromajiの長さに達したら次の問題へ
    if (idx === currentQuestion?.romaji.length) {
      setScore(prevScore => prevScore + currentQuestion?.romaji.length);
      nextQuestion();
    }
  }, [currentQuestion, idx]);

  useEffect(() => { // ゲームの制限時間を管理
    const durationInMs = GAME_DURATION_SECONDS * 1000;
    const decrement = (TIMER_INTERVAL_MS / durationInMs) * 100;

    const timer = setInterval(() => {
      setGameTimeProgress((prevProgress) => {
        const newProgress = prevProgress + decrement;
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, TIMER_INTERVAL_MS);

    return () => { clearInterval(timer); }
  }, [gameTimeProgress]);

  useEffect(() => { // 1問の制限時間を管理
    const durationInMs = QUESTION_DURATION_SECONDS * 1000;
    const decrement = (TIMER_INTERVAL_MS / durationInMs) * 100;

    const timer = setInterval(() => {
      setQuestionTimeProgress((prevProgress) => {
        const newProgress = prevProgress + decrement;
        if (newProgress >= 100) {
          clearInterval(timer);
          nextQuestion();
          return 100;
        }
        return newProgress;
      });
    }, TIMER_INTERVAL_MS);

    return () => { clearInterval(timer); }
  }, [questionTimeProgress]);

  return {
    question: currentQuestion?.text || "",
    romaji: currentQuestion?.romaji || "",
    idx: idx,
    questionTimeProgress: questionTimeProgress,
    gameTimeProgress: gameTimeProgress,
    score: score,
  };
}
