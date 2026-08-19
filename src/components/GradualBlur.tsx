"use client";

import { useEffect, useState } from "react";

const layers = [
  {
    blur: "0.083rem",
    mask: "transparent 0%, black 20%, black 40%, transparent 60%",
  },
  {
    blur: "0.166rem",
    mask: "transparent 20%, black 40%, black 60%, transparent 80%",
  },
  {
    blur: "0.377rem",
    mask: "transparent 40%, black 60%, black 80%, transparent 100%",
  },
  {
    blur: "0.749rem",
    mask: "transparent 60%, black 80%, black 100%",
  },
  {
    blur: "1.000rem",
    mask: "transparent 80%, black 100%",
  },
];

function getFooterHeight() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(
    "--footer-height"
  );
  return parseFloat(raw) || 0;
}

export function GradualBlur() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const check = () => {
      const footerHeight = getFooterHeight();
      const scrollBottom = window.scrollY + window.innerHeight;
      const revealStart = document.documentElement.scrollHeight - footerHeight;
      setHidden(scrollBottom >= revealStart);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-[100px] transition-opacity duration-300"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <div className="relative h-full w-full">
        {layers.map((l, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              maskImage: `linear-gradient(to bottom, ${l.mask})`,
              WebkitMaskImage: `linear-gradient(to bottom, ${l.mask})`,
              backdropFilter: `blur(${l.blur})`,
              WebkitBackdropFilter: `blur(${l.blur})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
