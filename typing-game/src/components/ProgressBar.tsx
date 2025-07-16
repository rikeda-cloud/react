"use client";

import React from "react";

interface ProgressBarProps {
  progress: number;
}

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="dark:bg-gray-700 w-full bg-gray-200 rounded-full h-4">
      <div className="bg-blue-500 h-4 rounded-full transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ProgressBar;
