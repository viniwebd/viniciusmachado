"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhisperText } from "@/components/ui/WhisperText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type WorkItem = {
  id: string;
  title: string;
  company: string;
  period: string;
};

const workItems: WorkItem[] = [
  {
    id: "n2b",
    title: "Web Designer Pleno",
    company: "N2B Digital",
    period: "Novembro 2025 - Atualmente",
  },
  {
    id: "aura",
    title: "Web Designer AI Developer - Freelancer",
    company: "Grupo Aura",
    period: "Novembro 2025 - Fevereiro 2026",
  },
  {
    id: "anbar",
    title: "Web Designer",
    company: "Grupo Anbar",
    period: "Maio 2023 - Abril 2026",
  },
];

export function WorkHistory() {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const animations = itemRefs.current
      .filter((el): el is HTMLLIElement => el !== null)
      .map((el) =>
        gsap.fromTo(
          el,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      );
    return () => {
      animations.forEach((anim) => {
        anim.scrollTrigger?.kill();
        anim.kill();
      });
    };
  }, []);

  return (
    <section id="experiencia" className="w-full bg-white">
      <div className="container-page flex flex-col gap-[32px] py-[64px] md:flex-row md:items-start md:justify-between md:gap-[48px] md:py-[80px] lg:py-[96px]">
        <h2 className="text-[52px] font-medium leading-[52px] tracking-[-0.045em] text-black lg:leading-[62px]">
          <WhisperText text="Experiência" />
        </h2>

        <ul className="flex w-full max-w-[758px] flex-col gap-[32px]">
          {workItems.map((item, i) => (
            <li
              key={item.id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex flex-col gap-[32px]"
              style={{ opacity: 0 }}
            >
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[24px] font-medium leading-[1.2] tracking-[-0.045em] text-black md:text-[28px] lg:text-[32px] lg:leading-[42px]">
                    {item.title}
                  </p>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.015em] text-[#706b6b] lg:text-[20px] lg:leading-[28px]">
                    {item.company}
                  </p>
                </div>
                <p className="text-[18px] leading-[1.4] tracking-[-0.015em] text-[#706b6b] lg:text-[20px] lg:leading-[28px]">
                  {item.period}
                </p>
              </div>
              {i < workItems.length - 1 && (
                <div className="h-px w-full bg-black/10" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
