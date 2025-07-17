"use client";

interface ProgressBarProps {
  progress: number;
  color?: string;
}

function ProgressBar({ progress, color = "#0000FF" }: ProgressBarProps) {
  return (
    <div className="dark:bg-gray-700 w-full bg-gray-200 rounded-full h-4">
      <div
        className="h-4 rounded-full transition-all duration-100 ease-linear"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ProgressBar;
