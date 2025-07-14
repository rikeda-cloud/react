'use client';

import { useRouter } from 'next/navigation';
import SimpleButton from "@/components/SimpleButton";

function Home() {
  const router = useRouter();
  const btnSize = { h: 100, w: 200 };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-8 py-12">
      <header className="h-1/6 w-full flex items-center justify-start">
        Logo
      </header>

      <section className="h-3/6 flex items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold">
          Welcome to the<br />Typing Game
        </h1>
      </section>

      <div className="h-2/6 flex gap-4 items-center justify-center">
        <SimpleButton height={btnSize.h} width={btnSize.w} onClick={() => router.push("/login")}>
          Login
        </SimpleButton>
        <SimpleButton height={btnSize.h} width={btnSize.w} onClick={() => router.push("/signin")}>
          Signin
        </SimpleButton>
        <SimpleButton height={btnSize.h} width={btnSize.w}
          textColor="#FFFFFF" backgroundColor="#2563F0" onClick={() => router.push("/typing")}>
          Play
        </SimpleButton>
      </div>
    </main>
  )
}

export default Home;
