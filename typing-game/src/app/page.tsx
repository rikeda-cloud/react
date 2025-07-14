'use client';

import Header from "@/components/Header";
import HomePageButtons from "@/components/HomePageButtons";

function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-8 py-12">
      <Header />

      <section className="h-3/6 flex items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold">
          Welcome to the<br />
          Typing Game
        </h1>
      </section>

      <div className="h-2/6 flex gap-4 items-center justify-center">
        <HomePageButtons />
      </div>
    </main>
  )
}

export default Home;
