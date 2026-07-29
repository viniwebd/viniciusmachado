"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe } from "@/components/ui/Globe";
import {
  TextGradientScroll,
  type Paragraph,
} from "@/components/ui/TextGradientScroll";

const aboutParagraphs: Paragraph[] = [
  [
    {
      text: "Dois anos de experiência em web design e UI design, ajudando empresas a transformarem ideias em produtos digitais funcionais.",
    },
  ],
];

function useLocalTime() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function BioCards({
  aboutRef,
  locationRef,
}: {
  aboutRef?: React.Ref<HTMLDivElement>;
  locationRef?: React.Ref<HTMLDivElement>;
}) {
  const time = useLocalTime();
  const aboutInternalRef = useRef<HTMLDivElement>(null);
  const locationInternalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-2 gap-[16px]">
      <div
        ref={aboutRef ?? aboutInternalRef}
        className="relative h-[167px] rounded-[10px] border border-[rgba(112,107,107,0.1)] bg-white transition-colors hover:border-[#aadf3a]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/user.svg"
          alt=""
          width={18}
          height={18}
          className="absolute left-[12px] top-[12px]"
        />
        <div className="absolute right-[12px] top-[12px] h-[18px] w-[18px] overflow-hidden rounded-full bg-black/5">
          <Image
            src="/assets/andrews-barbosa.png"
            alt=""
            fill
            sizes="18px"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-x-[12px] bottom-[12px]">
          <TextGradientScroll
            paragraphs={aboutParagraphs}
            className="text-[12px] leading-[14px] tracking-[-0.045em]"
            dimmedClassName="text-[#706b6b]"
            boldClassName="font-medium text-black"
          />
        </div>
      </div>

      <div
        ref={locationRef ?? locationInternalRef}
        className="relative h-[167px] overflow-hidden rounded-[10px] border border-[rgba(112,107,107,0.1)] bg-white transition-colors hover:border-[#aadf3a]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/navigation.svg"
          alt=""
          width={18}
          height={18}
          className="absolute left-[12px] top-[12px] z-10"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/flag_brazil.svg"
          alt="Brasil"
          width={21}
          height={21}
          className="absolute right-[12px] top-[11px] z-10"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[57px] -translate-x-1/2"
        >
          <Globe size={168} />
        </div>

        {/* Glass overlay at the bottom to fade the globe behind the text */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[40px]"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        />

        <div className="absolute inset-x-[12px] bottom-[12px] z-10 flex flex-col gap-[4px]">
          <p className="text-[12px] leading-[14px] tracking-[-0.015em] text-black">
            Gravataí, Brasil
          </p>
          <p
            className="text-[12px] leading-[14px] tracking-[-0.015em] text-[#706b6b]"
            suppressHydrationWarning
          >
            {time || " "}
          </p>
        </div>
      </div>
    </div>
  );
}
