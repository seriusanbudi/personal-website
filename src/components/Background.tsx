"use client";

import React, { useRef, useEffect } from "react";

export default function Background() {
  const canvasRef = useRef();
  const gridSize = 80;

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");

    const drawGrid = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.strokeStyle = "rgba(204, 204, 204, 0.15)"; // 20% opacity
      context.lineWidth = 2;

      for (let x = 0; x < canvas.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.stroke();
      }
    };

    const resizeCanvas = () => {
      drawGrid();
    };

    drawGrid();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      className="fixed inset-0 z-[-1]"
      ref={canvasRef as any}
      style={{ display: "block" }}
    />
  );
}
