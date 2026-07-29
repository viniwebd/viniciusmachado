"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { WhisperText } from "@/components/ui/WhisperText";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "O Vinicius realizou um excelente trabalho tanto produzindo como otimizando as Landing Pages do projeto. Em diversas páginas ele melhorou muito a performance e taxa de conversão. Parabéns pelo excelente trabalho!",
    name: "Andrews Barbosa",
    role: "Fundador Grupo Anbar",
    avatar: "/assets/andrews-barbosa.png",
  },
  {
    quote:
      "Vinicius é um excelente profissional, uma pessoa que se pode confiar de olhos fechados quando o assunto é velocidade e excelência. Suas páginas aumentaram minhas conversões. Sou extremamente grato pelo trabalho e dedicação com a minha empresa, ficamos felizes de ter alguém como você na equipe podendo contar quando for preciso.",
    name: "Kauã",
    role: "Sócio Grupo Aura",
    avatar: "/assets/kaua.png",
  },
  {
    quote:
      "Contratei o Vinicius para o desenvolvimento de dois sites, e foi uma grande surpresa para mim ver o resultado final dos dois! O Vinicius me atendeu de forma profissional, cumpriu as datas de entrega definidas e manteve comunicação constante. Com certeza recomendo o seu trabalho.",
    name: "Bruna Silva",
    role: "Fundadora Bio Connect Marketing",
    avatar: "/assets/bruna-silva.png",
  },
];

function splitWithSpaces(text: string) {
  return text.split(/(\s+)/);
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [maxQuoteHeight, setMaxQuoteHeight] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const measureRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  const total = testimonials.length;
  const current = testimonials[index];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const measure = () => {
      const heights = measureRefs.current
        .filter((el): el is HTMLParagraphElement => el !== null)
        .map((el) => el.offsetHeight);
      if (heights.length === 0) return;
      setMaxQuoteHeight(Math.max(...heights));
    };
    measure();
    const observer = new ResizeObserver(measure);
    measureRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    const quoteEl = quoteRef.current;
    const authorEl = authorRef.current;
    if (!quoteEl && !authorEl) return;

    const words = quoteEl?.querySelectorAll("[data-word]") ?? [];
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (words.length) {
      tl.fromTo(
        words,
        { xPercent: 30, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.012,
          force3D: false,
        },
        0
      );
    }

    if (authorEl) {
      tl.fromTo(
        authorEl,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, force3D: false },
        "-=0.15"
      );
    }

    return () => {
      tl.kill();
    };
  }, [inView, index]);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const chunks = splitWithSpaces(current.quote);

  return (
    <section
      id="feedbacks"
      ref={sectionRef}
      className="w-full bg-white"
      style={{ contain: "layout paint" }}
    >
      <div className="container-page flex flex-col gap-[32px] py-[64px] md:flex-row md:items-start md:justify-between md:gap-[48px] md:py-[80px] lg:py-[96px]">
        <h2 className="text-[52px] font-medium leading-[52px] tracking-[-0.045em] text-black lg:leading-[62px]">
          <WhisperText text="Feedbacks" />
        </h2>

        <div className="relative flex w-full max-w-[758px] flex-col gap-[48px]">
          <div
            aria-hidden
            className="pointer-events-none invisible absolute inset-x-0 top-0 -z-10 flex flex-col"
          >
            {testimonials.map((t, i) => (
              <p
                key={i}
                ref={(el) => {
                  measureRefs.current[i] = el;
                }}
                className="text-[18px] leading-[1.5] tracking-[-0.015em] lg:text-[22px] lg:leading-[32px]"
              >
                {t.quote}
              </p>
            ))}
          </div>

          {inView && (
            <p
              key={`quote-${index}`}
              ref={quoteRef}
              className="text-[18px] leading-[1.5] tracking-[-0.015em] text-black lg:text-[22px] lg:leading-[32px]"
              style={{ minHeight: maxQuoteHeight || undefined }}
            >
              {chunks.map((chunk, i) => {
                if (chunk === "") return null;
                if (chunk.trim() === "") {
                  return <Fragment key={i}>{chunk}</Fragment>;
                }
                return (
                  <span
                    key={i}
                    data-word
                    className="inline-block"
                    style={{ opacity: 0 }}
                  >
                    {chunk}
                  </span>
                );
              })}
            </p>
          )}

          <div className="flex items-end justify-between gap-[24px]">
            {inView && (
              <div
                key={`author-${index}`}
                ref={authorRef}
                className="flex items-center gap-[24px]"
                style={{ opacity: 0 }}
              >
                <div className="relative flex-shrink-0">
                  <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full bg-black/5">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute -end-1 -top-1">
                    <span className="sr-only">Verificado</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="#ffffff"
                        d="M3.046 8.277A4.402 4.402 0 0 1 8.303 3.03a4.4 4.4 0 0 1 7.411 0 4.397 4.397 0 0 1 5.19 3.068c.207.713.23 1.466.067 2.19a4.4 4.4 0 0 1 0 7.415 4.403 4.403 0 0 1-3.06 5.187 4.398 4.398 0 0 1-2.186.072 4.398 4.398 0 0 1-7.422 0 4.398 4.398 0 0 1-5.257-5.248 4.4 4.4 0 0 1 0-7.437Z"
                      />
                      <path
                        fill="#aadf3a"
                        d="M4.674 8.954a3.602 3.602 0 0 1 4.301-4.293 3.6 3.6 0 0 1 6.064 0 3.598 3.598 0 0 1 4.3 4.302 3.6 3.6 0 0 1 0 6.067 3.6 3.6 0 0 1-4.29 4.302 3.6 3.6 0 0 1-6.074 0 3.598 3.598 0 0 1-4.3-4.293 3.6 3.6 0 0 1 0-6.085Z"
                      />
                      <path
                        fill="#000000"
                        d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <p className="text-[18px] leading-[20px] tracking-[-0.045em] text-black">
                    {current.name}
                  </p>
                  <p className="text-[16px] leading-[20px] tracking-[-0.045em] text-[#706b6b]">
                    {current.role}
                  </p>
                </div>
              </div>
            )}

            {total > 1 && (
              <div className="flex items-center gap-[16px]">
                <button
                  onClick={prev}
                  aria-label="Depoimento anterior"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-black transition-colors hover:bg-[#aadf3a]"
                >
                  <ChevronLeft size={32} strokeWidth={1.75} />
                </button>
                <button
                  onClick={next}
                  aria-label="Próximo depoimento"
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-black transition-colors hover:bg-[#aadf3a]"
                >
                  <ChevronRight size={32} strokeWidth={1.75} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
