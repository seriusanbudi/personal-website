"use client";

import { useEffect, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function HackerText(props: any) {
  const { children } = props;
  const [words, setWords] = useState(children);
  const [animating, setAnimating] = useState(false);

  function animate() {
    if (animating) return false;

    let iterations = -1;
    setAnimating(true);

    const interval = setInterval(() => {
      const newWords = words
        .split("")
        .map((_: string, index: number) => {
          if (index < iterations) return children[index];

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setWords(newWords);

      if (iterations > children.length) {
        clearInterval(interval);
        setAnimating(false);
      }

      iterations += 1 / 3;
    }, 50);
  }

  useEffect(() => {
    animate();
  }, []);

  return (
    <div
      className="cursor-default p-1 select-none w-fit text-black bg-transparent"
      onMouseEnter={animate}
    >
      {words.split("").map((word: string, i: number) => (
        <span key={`word-${word}-${i}`}>{word}</span>
      ))}
    </div>
  );
}
