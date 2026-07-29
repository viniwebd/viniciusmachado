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
        className="relative flex min-h-[167px] flex-col gap-[12px] rounded-[16px] border border-black/10 bg-white p-[12px] transition-colors hover:border-[#aadf3a]"
      >
        <div className="flex items-start justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/user.svg" alt="" width={18} height={18} />
          <div className="relative h-[18px] w-[18px] overflow-hidden rounded-full bg-black/5">
            <Image
              src="/assets/andrews-barbosa.png"
              alt=""
              fill
              sizes="18px"
              className="object-cover"
            />
          </div>
        </div>
        <TextGradientScroll
          paragraphs={aboutParagraphs}
          className="text-[13px] leading-[18px] tracking-[-0.01em] md:text-[14px] md:leading-[20px]"
          dimmedClassName="text-[#706b6b]"
          boldClassName="font-medium text-black"
        />
      </div>

      <div
        ref={locationRef ?? locationInternalRef}
        className="relative flex min-h-[167px] flex-col overflow-hidden rounded-[16px] border border-black/10 bg-white p-[12px] transition-colors hover:border-[#aadf3a]"
      >
        <div className="flex items-start justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/navigation.svg" alt="" width={18} height={18} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/flag_brazil.svg"
            alt="Brasil"
            width={21}
            height={21}
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[42px] -translate-x-1/2"
        >
          <div className="h-[136px] w-[236px] overflow-hidden">
            <Globe size={236} className="translate-y-0" />
          </div>
        </div>

        <div className="relative z-10 mt-auto flex flex-col gap-[4px]">
          <p className="text-[13px] leading-[14px] tracking-[-0.01em] text-black md:text-[14px]">
            Gravataí, Brasil
          </p>
          <p
            className="text-[13px] leading-[14px] tracking-[-0.01em] text-[#706b6b] md:text-[14px]"
            suppressHydrationWarning
          >
            {time || " "}
          </p>
        </div>
      </div>
    </div>
  );
}
