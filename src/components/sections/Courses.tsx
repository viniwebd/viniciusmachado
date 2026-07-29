"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhisperText } from "@/components/ui/WhisperText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Course = {
  title: string;
  provider: string;
  description: string;
};

const courses: Course[] = [
  {
    title: "UX Light",
    provider: "Design Circuit",
    description:
      "Curso introdutório em UX/UI Design abordando pesquisa com usuários, usabilidade, design de interfaces e fundamentos do processo de design de produtos digitais.",
  },
  {
    title: "Figmais",
    provider: "Thiago Medeiros",
    description:
      "Princípios do Design, Figma Básico ao Avançado (Auto Layout, Componentes, Prototipação), Landing Page no Figma, WordPress.",
  },
  {
    title: "Formação WebP",
    provider: "Othon Ciparoni",
    description:
      "UI Design, WordPress + Elementor, Sites Dinâmicos com JetEngine, Figma, Infraestrutura, cPanel, Cloudflare, HTML/CSS, Performance.",
  },
];

export function Courses() {
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
    <section id="certificacoes" className="w-full bg-white">
      <div className="container-page flex flex-col gap-[32px] py-[64px] md:flex-row md:items-start md:justify-between md:gap-[48px] md:py-[80px] lg:py-[96px]">
        <h2 className="text-[52px] font-medium leading-[52px] tracking-[-0.045em] text-black lg:leading-[62px]">
          <WhisperText text="Certificações" />
        </h2>

        <ul className="flex w-full max-w-[758px] flex-col gap-[32px]">
          {courses.map((course, i) => (
            <li
              key={course.title}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex flex-col gap-[32px]"
              style={{ opacity: 0 }}
            >
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[24px] font-medium leading-[1.2] tracking-[-0.045em] text-black md:text-[28px] lg:text-[32px] lg:leading-[42px]">
                    {course.title}
                  </p>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.015em] text-[#706b6b] lg:text-[20px] lg:leading-[28px]">
                    {course.provider}
                  </p>
                </div>
                <p className="text-[15px] leading-[1.4] tracking-[-0.015em] text-[#706b6b] lg:text-[16px] lg:leading-[20px]">
                  {course.description}
                </p>
              </div>
              {i < courses.length - 1 && (
                <div className="h-px w-full bg-black/10" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
