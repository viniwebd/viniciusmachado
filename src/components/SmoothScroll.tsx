"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll() {
  useEffect(() => {
    // GSAP-style easing (power4.out) with slightly longer duration for
    // that buttery ScrollSmoother feel.
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });

    // Bridge Lenis → ScrollTrigger so scroll-linked animations stay in sync.
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis with GSAP's ticker so RAF is single-sourced.
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Intercept anchor clicks and hand off to Lenis for smooth in-page nav.
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest(
        "a[href]"
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const match = href.match(/^(?:\/)?#(.+)$/);
      if (!match) return;

      // Footer is position: fixed — scrolling to it won't reveal it via the
      // peel effect. Route the Contato link to end-of-page instead.
      if (match[1] === "contato") {
        e.preventDefault();
        lenis.scrollTo(document.documentElement.scrollHeight, {
          duration: 1.4,
        });
        return;
      }

      const el = document.getElementById(match[1]);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { duration: 1.4 });
    };

    document.addEventListener("click", handleClick);

    return () => {
      gsap.ticker.remove(raf);
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
