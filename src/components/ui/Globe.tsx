"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

type Props = {
  className?: string;
  size?: number;
};

export function Globe({ className = "", size = 300 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let phi = 0;
    let raf = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: size * dpr,
      height: size * dpr,
      phi: 0,
      theta: 0.2,
      dark: 0,
      diffuse: 1.15,
      mapSamples: 12000,
      mapBrightness: 5,
      baseColor: [0.85, 0.85, 0.85],
      markerColor: [170 / 255, 223 / 255, 58 / 255],
      glowColor: [1, 1, 1],
      markers: [{ location: [-29.9444, -50.9919], size: 0.08 }],
    });

    const tick = () => {
      phi += 0.004;
      globe.update({ phi });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: size, height: size, aspectRatio: "1", maxWidth: "100%" }}
    />
  );
}
