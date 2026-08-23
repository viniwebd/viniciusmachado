"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LOOPS = 3;
const SEQUENCE = Array.from({ length: LOOPS * 10 }, (_, i) => i % 10);

function DigitReel({
  digit,
  active,
  delay,
}: {
  digit: string;
  active: boolean;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const played = useRef(false);

  useEffect(() => {
    if (!active || played.current) return;
    played.current = true;
    const el = ref.current;
    if (!el) return;
    // yPercent is relative to the reel's OWN height (all 30 stacked rows),
    // not a single row — so each step is 100 / (LOOPS * 10) percent, not 100.
    const targetIndex = (LOOPS - 1) * 10 + Number(digit);
    const yPercent = -(100 / (LOOPS * 10)) * targetIndex;
    gsap.fromTo(
      el,
      { yPercent: 0 },
      { yPercent, duration: 1.4, delay, ease: "power4.out" }
    );
  }, [active, digit, delay]);

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom"
      style={{ height: "1em" }}
    >
      <span ref={ref} className="flex flex-col">
        {SEQUENCE.map((d, i) => (
          <span key={i} className="block" style={{ height: "1em", lineHeight: "1em" }}>
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

export function RollingNumber({ value }: { value: string }) {
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  let digitIndex = 0;

  return (
    <span ref={wrapperRef} style={{ fontVariantNumeric: "tabular-nums" }}>
      {Array.from(value).map((char, i) => {
        if (/\d/.test(char)) {
          const delay = digitIndex * 0.06;
          digitIndex += 1;
          return (
            <DigitReel key={i} digit={char} active={active} delay={delay} />
          );
        }
        return <span key={i}>{char}</span>;
      })}
    </span>
  );
}
