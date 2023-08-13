"use client";

import React, { useRef, useEffect } from "react";

export default function Background() {
  const canvasRef = useRef();
  const gridSize = 100;
  const parallaxFactor = 0.05; // Adjust this to control the parallax effect

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");

    const drawGrid = (mouseX: number, mouseY: number) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.strokeStyle = "rgba(204, 204, 204, 0.1)";
      context.lineWidth = 2;

      for (let x = 0; x < canvas.width * 2; x += gridSize) {
        context.beginPath();
        context.moveTo(x - mouseX * parallaxFactor, 0);
        context.lineTo(x - mouseX * parallaxFactor, canvas.height);
        context.stroke();
      }

      for (let y = 0; y < canvas.height * 2; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y - mouseY * parallaxFactor);
        context.lineTo(canvas.width, y - mouseY * parallaxFactor);
        context.stroke();
      }
    };

    const resizeCanvas = () => {
      drawGrid(0, 0);
    };

    drawGrid(0, 0);
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (event: MouseEvent) => {
      drawGrid(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
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
