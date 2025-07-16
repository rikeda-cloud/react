"use client";

import React from "react";

interface TimeProgressBarProps {
  duration: number;
  onComplete: () => void;
}

function TimeProgressBar({ duration, onComplete }: TimeProgressBarProps) {
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    const durationInMs = duration * 1000;
    const intervalTime = 100;
    const decrement = (intervalTime / durationInMs) * 100;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress - decrement;
        if (newProgress <= 0) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return newProgress;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
    }
  }, [duration, onComplete]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
      <div className="bg-blue-500 h-4 rounded-full transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default TimeProgressBar;
