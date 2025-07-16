"use client";

import { useRouter } from "next/navigation";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import SimpleButton from '@/components/SimpleButton';

function ResultPage() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <Header />
      <div className="text-center w-full max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Result</h1>
        <p className="text-2xl font-bold text-white mb-4">Your Score: <span className="text-yellow-400">{score}</span></p>
        <SimpleButton height={50} width={100} onClick={() => router.push("/game")}>
          Play Again
        </SimpleButton>
      </div>
    </div>
  );
}

export default ResultPage;
