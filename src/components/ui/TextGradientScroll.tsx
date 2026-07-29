"use client";

import { Fragment, useEffect, useRef, useState } from "react";

export type Segment = { text: string; bold?: boolean };
export type Paragraph = Segment[];

type Props = {
  paragraphs: Paragraph[];
  className?: string;
  paragraphClassName?: string;
  dimmedClassName?: string;
  boldClassName?: string;
  minOpacity?: number;
};

export function TextGradientScroll({
  paragraphs,
  className = "",
  paragraphClassName = "",
  dimmedClassName = "text-[#706b6b]",
  boldClassName = "font-medium text-black",
  minOpacity = 0.18,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress = 0 when element's top hits viewport bottom
      // progress = 1 when element's bottom hits viewport center
      const p = (vh - rect.top) / (vh / 2 + rect.height);
      setProgress(Math.max(0, Math.min(1, p)));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const totalWords = paragraphs.reduce(
    (sum, para) =>
      sum +
      para.reduce(
        (s, seg) => s + seg.text.trim().split(/\s+/).filter(Boolean).length,
        0
      ),
    0
  );

  let globalIdx = 0;
  const stagger = 0.6;

  return (
    <div ref={ref} className={className}>
      {paragraphs.map((para, pi) => (
        <p key={pi} className={paragraphClassName}>
          {para.map((seg, si) => {
            const chunks = seg.text.split(/(\s+)/);
            return (
              <Fragment key={si}>
                {chunks.map((chunk, ci) => {
                  if (chunk === "") return null;
                  if (chunk.trim() === "") {
                    return <span key={ci}>{chunk}</span>;
                  }
                  const idx = globalIdx++;
                  const start = idx / totalWords;
                  const end = (idx + stagger) / totalWords;
                  const rawT = (progress - start) / (end - start);
                  const t = Math.max(0, Math.min(1, rawT));
                  const opacity = minOpacity + t * (1 - minOpacity);
                  return (
                    <span
                      key={ci}
                      className={seg.bold ? boldClassName : dimmedClassName}
                      style={{
                        opacity,
                        transition: "opacity 180ms ease-out",
                      }}
                    >
                      {chunk}
                    </span>
                  );
                })}
              </Fragment>
            );
          })}
        </p>
      ))}
    </div>
  );
}
