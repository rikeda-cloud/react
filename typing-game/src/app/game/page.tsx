"use client";

import Game from "@/components/Game";
import Header from "@/components/Header";

function GamePage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Header />
      <Game />
    </div>
  );
}

export default GamePage;
