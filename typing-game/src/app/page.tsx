"use client";

import Header from "@/components/Header";
import HomePageButtons from "@/components/HomePageButtons";

function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main
        className="flex flex-col items-center justify-center min-h-screen
  pt-24 md:pt-32"
      >
        <section
          className="flex-grow flex items-center justify-center
  text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold">
            Welcome to the
            <br />
            Typing Game
          </h1>
        </section>
        <div className="flex gap-4 pb-12">
          <HomePageButtons />
        </div>
      </main>
    </div>
  );
}

export default Home;
