"use client";

import { Fragment, useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

export function WhisperText({
  text,
  className = "",
  delay = 40,
  duration = 0.6,
  x = -12,
  y = 0,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(" ");
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
  let charIndex = 0;

  return (
    <span ref={ref} className={className}>
      {words.map((word, wi) => {
        const startIdx = charIndex;
        charIndex += word.length;
        return (
          <Fragment key={wi}>
            {wi > 0 && " "}
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, ci) => {
                const idx = startIdx + ci;
                return (
                  <span
                    key={ci}
                    className="inline-block"
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView
                        ? "translate(0, 0)"
                        : `translate(${x}px, ${y}px)`,
                      transition: `opacity ${duration}s ${ease} ${idx * delay}ms, transform ${duration}s ${ease} ${idx * delay}ms`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </Fragment>
        );
      })}
    </span>
  );
}
