"use client";

import React from 'react';

function Game() {
  const text = "隣の客はよく柿食う客だ";
  const ans = "abc";
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (ans[idx] === e.key) {
        setIdx((prevIdx) => prevIdx + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [idx]);

  return (
    <>
      <p>{text}</p>
      <p>{idx === 0 ? "" : ans.slice(0, idx)}</p>
    </>
  )
}

export default Game;
