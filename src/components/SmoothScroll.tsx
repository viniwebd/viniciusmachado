"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    // Intercept anchor clicks and hand off to Lenis
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const match = href.match(/^(?:\/)?#(.+)$/);
      if (!match) return;

      const el = document.getElementById(match[1]);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { duration: 1.2 });
    };

    document.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
