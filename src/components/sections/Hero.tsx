"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      labelRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      0
    )
      .fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.1
      )
      .fromTo(
        subtextRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.25
      )
      .fromTo(
        buttonsRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.4
      );
  }, []);

  return (
    <section id="home" className="w-full bg-white">
      <div className="container-page flex flex-col items-start gap-[24px] py-[64px] md:py-[80px] lg:py-[96px]">
        <p
          ref={labelRef}
          className="text-[14px] leading-[normal] tracking-[-0.045em] text-black"
          style={{ opacity: 0 }}
        >
          Web Designer • UI Designer
        </p>

        <div className="flex flex-col gap-[16px]">
          <h1
            ref={headingRef}
            className="max-w-[987px] text-[40px] font-medium leading-[46px] tracking-[-0.045em] text-black lg:text-[62px] lg:leading-[64px]"
            style={{ opacity: 0 }}
          >
            Sou Vinicius — Web Designer que transforma ideias em interfaces que convertem para marcas e negócios.
          </h1>
          <p
            ref={subtextRef}
            className="max-w-[758px] text-[18px] leading-[24px] tracking-[-0.015em] text-[#706b6b] lg:text-[20px] lg:leading-[28px]"
            style={{ opacity: 0 }}
          >
            Freelancer com cerca de 3 anos de experiência em web design e UI, ajudando marcas a transformar ideias em sites e produtos digitais bonitos e funcionais.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="mt-[24px] flex flex-wrap gap-[24px]"
          style={{ opacity: 0 }}
        >
          <a
            href="/#projetos"
            className="inline-flex items-center gap-[8px] rounded-[16px] bg-[#aadf3a] px-[24px] py-[16px] text-[16px] font-medium leading-none tracking-[-0.045em] text-black transition-transform hover:-translate-y-[2px] lg:text-[18px]"
          >
            Projetos
            <ArrowUpRight
              className="h-[22px] w-[22px] lg:h-[24px] lg:w-[24px]"
              strokeWidth={1.75}
            />
          </a>
          <a
            href="/Curriculo-Vinicius-Machado-WebDesginer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] rounded-[16px] border border-black/10 bg-white px-[24px] py-[16px] text-[16px] font-medium leading-none tracking-[-0.045em] text-black transition-colors hover:bg-black/[0.03] lg:text-[18px]"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
