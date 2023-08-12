"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef: any = useRef(null);

  let cursorX = 0;
  let cursorY = 0;

  let targetCursorX = 0;
  let targetCursorY = 0;

  const cursorSpeed = 0.05;

  function updateCursorPosition({ clientX, clientY }: MouseEvent) {
    targetCursorX = clientX - 10;
    targetCursorY = clientY - 10;
  }

  function animateCursor() {
    const dx = targetCursorX - cursorX;
    const dy = targetCursorY - cursorY;

    cursorX += dx * cursorSpeed;
    cursorY += dy * cursorSpeed;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }

    requestAnimationFrame(animateCursor);
  }

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);
    animateCursor();

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:flex fixed items-center justify-center h-[20px] w-[20px] left-0 top-0 rounded-full bg-transparent border-2 border-black pointer-events-none z-[99999]"
    >
      <div className="h-[4px] w-[4px] bg-black rounded-full" />
    </div>
  );
}
