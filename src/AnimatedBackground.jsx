import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight - 60; // navbar height offset
    canvas.width = width;
    canvas.height = height;

    let waveHeight = 40;
    let waveLength = 0.015;
    let speed = 0.02;
    let offset = 0;

    function drawWave() {
      ctx.clearRect(0, 0, width, height);

      // Background fill (optional)
      ctx.fillStyle = "#f9f9fb";
      ctx.fillRect(0, 0, width, height);

      // Wave 1
      ctx.fillStyle = "rgba(47, 128, 237, 0.3)";
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = waveHeight * Math.sin(x * waveLength + offset) + height / 2 + 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();

      // Wave 2
      ctx.fillStyle = "rgba(86, 204, 242, 0.3)";
      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const y = waveHeight * 0.6 * Math.sin(x * waveLength * 1.5 + offset + 3) + height / 2 + 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();

      offset += speed;
      animationRef.current = requestAnimationFrame(drawWave);
    }

    drawWave();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight - 60;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 60, // navbar height
        left: 0,
        width: "100%",
        height: "calc(100vh - 60px)",
        zIndex: -1,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
