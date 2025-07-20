"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import GameResult from "./GameResult";

function ResultPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Header />
      <Suspense fallback={<>スコア計算中...</>}>
        <GameResult />
      </Suspense>
    </div>
  );
}

export default ResultPage;
