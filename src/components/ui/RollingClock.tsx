"use client";

import { RollingDigit } from "@/components/ui/RollingDigit";

export function RollingClock({ text }: { text: string }) {
  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>
      {Array.from(text).map((char, i) =>
        /\d/.test(char) ? (
          <RollingDigit key={i} digit={char} />
        ) : (
          <span
            key={i}
            className="inline-block align-bottom"
            style={{ height: "1em", lineHeight: "1em" }}
          >
            {char}
          </span>
        )
      )}
    </span>
  );
}
