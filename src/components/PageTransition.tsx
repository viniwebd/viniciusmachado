"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

// Module scope survives client-side route changes (only resets on a full
// page reload), so the very first mount of the session gets the same
// fade/slide-down entrance as the NavBar, while every later route change
// (including back-to-home from a case page) gets the horizontal slide.
let hasMounted = false;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!hasMounted) {
      hasMounted = true;
      gsap.fromTo(
        el,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
      );
      return;
    }

    gsap.fromTo(
      el,
      { xPercent: 100 },
      { xPercent: 0, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      className="relative z-10 overflow-hidden bg-white"
      style={{ marginBottom: "var(--footer-height, 0px)" }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}
