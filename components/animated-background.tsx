'use client';
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer32 = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer32.length; i++) {
        const isPurple = Math.random() < 0.25; // 50% chance for purple or black
        const color = isPurple
          ? (255 << 24) | (128 << 16) | (50 << 8) | 128 // Purple
          : (255 << 24) | (0 << 16) | (0 << 8) | 0; // Black

        buffer32[i] = color;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      generateNoise();
      animationFrameId = requestAnimationFrame(loop);
    };

    resizeCanvas();
    loop();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default AnimatedBackground;
