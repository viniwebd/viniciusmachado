"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { DragScroll } from "./DragScroll";

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

export const BioTestimonialsCarousel = forwardRef<HTMLDivElement>(
  function BioTestimonialsCarousel(_, ref) {
    return (
      <section ref={ref} className="flex flex-col gap-[16px]">
        <p className="text-[20px] font-normal leading-[18px] tracking-[-0.045em] text-black">
          Depoimentos
        </p>

        <DragScroll className="-mx-[20px] px-[20px]">
          <ul className="flex items-stretch gap-[16px]">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="flex w-[280px] flex-shrink-0 flex-col gap-[16px] rounded-[10px] border border-[rgba(112,107,107,0.1)] bg-[rgba(112,107,107,0.1)] p-[12px] transition-colors hover:border-[#aadf3a]"
              >
                <p className="text-[16px] font-normal leading-[22px] tracking-[-0.015em] text-black">
                  {t.quote}
                </p>
                <div className="flex items-center gap-[16px]">
                  <div className="relative h-[40px] w-[40px] flex-shrink-0 overflow-hidden rounded-full bg-black/5">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <p className="text-[16px] font-normal leading-[18px] tracking-[-0.045em] text-black">
                      {t.name}
                    </p>
                    <p className="text-[12px] font-normal leading-[12px] tracking-[-0.045em] text-[#706b6b]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </DragScroll>
      </section>
    );
  }
);
