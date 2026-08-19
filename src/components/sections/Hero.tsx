"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { HoverRoll } from "@/components/ui/HoverRoll";

const EMAIL = "contato@viniciusmachado.com";

export function Hero() {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard failures silently
    }
  };

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
      <div className="container-page flex flex-col items-start max-w-[855px] gap-[24px] pt-[64px] pb-[64px] min-[425px]:pt-[96px] md:pt-[124px] md:pb-[80px] lg:pt-[132px] lg:pb-[96px]">
        <p
          ref={labelRef}
          className="text-[14px] leading-[normal] tracking-[-0.045em] text-black lg:text-[24px]"
          style={{ opacity: 0 }}
        >
          Vinicius Machado | Web Designer
        </p>

        <div className="flex flex-col gap-[16px]">
          <h1
            ref={headingRef}
            className="max-w-[855px] text-[32px] font-medium leading-[38px] tracking-[-0.045em] text-black min-[425px]:text-[36px] min-[425px]:leading-[42px] lg:text-[52px] lg:leading-[56px]"
            style={{ opacity: 0 }}
          >
            Estudando para se tornar Product Designer, atuando em UI, do layout a implementação e uso de IA pra acelerar variações de layout.
          </h1>
          <p
            ref={subtextRef}
            className="max-w-[758px] text-[18px] leading-[24px] tracking-[-0.015em] text-[#706b6b] lg:text-[20px] lg:leading-[28px]"
            style={{ opacity: 0 }}
          >
            Dois anos dedicados a UI Design, entre agências e projetos próprios, sempre com atenção aos detalhes que fazem uma tela parecer fácil de usar.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="mt-[24px] flex flex-nowrap gap-[12px] min-[425px]:gap-[24px]"
          style={{ opacity: 0 }}
        >
          <a
            href="/Vinicius_Machado_Web_Desginer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-[8px] rounded-[16px] bg-[#aadf3a] px-[24px] py-[16px] text-[16px] font-medium leading-none tracking-[-0.045em] text-black lg:text-[18px]"
          >
            <HoverRoll text="Download CV" />
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group inline-flex cursor-pointer items-center gap-[8px] rounded-[16px] border border-black/10 bg-white px-[24px] py-[16px] text-[16px] font-medium leading-none tracking-[-0.045em] text-black transition-colors hover:bg-black/[0.03] lg:text-[18px]"
          >
            <span className="grid">
              <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
                Copiar e-mail
              </span>
              <span className="col-start-1 row-start-1">
                <HoverRoll text={copied ? "Copiado!" : "Copiar e-mail"} />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
