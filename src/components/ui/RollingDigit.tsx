"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LOOP_SIZE = 10;
const TOTAL_LOOPS = 3;
const SEQUENCE_LENGTH = LOOP_SIZE * TOTAL_LOOPS;
const SAFE_BASE = LOOP_SIZE; // middle loop, so we can roll forward or land instantly either side

// Re-animates every time `digit` changes, always rolling forward (like a
// real odometer) instead of resetting to 0 and re-spinning — used for the
// header clock, where digits tick over live rather than on scroll-into-view.
export function RollingDigit({ digit }: { digit: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const positionRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const target = Number(digit);

    if (positionRef.current === null) {
      const initial = SAFE_BASE + target;
      positionRef.current = initial;
      gsap.set(el, { yPercent: -(100 / SEQUENCE_LENGTH) * initial });
      return;
    }

    const current = positionRef.current;
    let step = target - (current % LOOP_SIZE);
    if (step <= 0) step += LOOP_SIZE;
    const next = current + step;
    positionRef.current = next;

    gsap.to(el, {
      yPercent: -(100 / SEQUENCE_LENGTH) * next,
      duration: 0.7,
      ease: "power3.out",
      onComplete: () => {
        // Drifted more than a couple loops deep — snap back to an
        // equivalent index in the safe middle loop, instantly (same digit,
        // so no visible jump), keeping the position bounded forever.
        if (next > SAFE_BASE + LOOP_SIZE) {
          const normalized = SAFE_BASE + (next % LOOP_SIZE);
          positionRef.current = normalized;
          gsap.set(el, { yPercent: -(100 / SEQUENCE_LENGTH) * normalized });
        }
      },
    });
  }, [digit]);

  return (
    <span
      className="relative inline-block overflow-hidden align-bottom"
      style={{ height: "1em" }}
    >
      <span ref={ref} className="flex flex-col">
        {Array.from({ length: SEQUENCE_LENGTH }, (_, i) => i % LOOP_SIZE).map(
          (d, i) => (
            <span
              key={i}
              className="block"
              style={{ height: "1em", lineHeight: "1em" }}
            >
              {d}
            </span>
          )
        )}
      </span>
    </span>
  );
}
