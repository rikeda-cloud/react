"use client";

import { useState, useEffect } from "react";
import { typingQuestions, TypingQuestion } from "@/data/typingData";

const getRandomQuestion = () => {
  return typingQuestions[Math.floor(Math.random() * typingQuestions.length)];
}

export const useTypingGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState<TypingQuestion | null>(null);
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextQuestion = () => { // 次の問題に移る
    setCurrentQuestion(getRandomQuestion());
    setIdx(0);
    setProgress(0);
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
      nextQuestion();
    }
  }, [currentQuestion, idx]);

  useEffect(() => {
    const duration = 10; // タイピングの制限時間（秒）
    const durationInMs = duration * 1000; // タイピングの制限時間をミリ秒に変換
    const intervalTime = 100; // タイマーの更新間隔（100ミリ秒）
    const decrement = (intervalTime / durationInMs) * 100; // 進捗バーの減少量

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + decrement;
        if (newProgress >= 100) {
          clearInterval(timer);
          nextQuestion();
          return 100; // 進捗が100%を超えないようにする
        }
        return newProgress; // 進捗を更新
      });
    }, intervalTime);

    return () => { clearInterval(timer); }
  }, [progress]);

  return {
    text: currentQuestion?.text,
    romaji: currentQuestion?.romaji,
    idx: idx,
    progress: progress,
  };
}
