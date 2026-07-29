import { WhisperText } from "@/components/ui/WhisperText";
import {
  TextGradientScroll,
  type Paragraph,
} from "@/components/ui/TextGradientScroll";

const aboutParagraphs: Paragraph[] = [
  [
    { text: "Freelancer com " },
    { text: "cerca de 3 anos", bold: true },
    {
      text: " de experiência em web design e UI, ajudando marcas a transformar ideias em ",
    },
    { text: "sites e produtos digitais", bold: true },
    { text: " bonitos e funcionais." },
  ],
  [
    {
      text: "Trabalho lado a lado com o time, do wireframe ao deploy, para entregar interfaces que não só apresentam bem — mas que carregam rápido, convertem e são fáceis de manter no dia a dia.",
    },
  ],
  [
    {
      text: "Foco em WordPress, Figma e front-end moderno, sempre pensando em performance, acessibilidade e no impacto real que o projeto vai ter no negócio do cliente.",
    },
  ],
];

export function About() {
  return (
    <section id="sobre" className="w-full bg-white">
      <div className="container-page flex flex-col gap-[32px] py-[64px] md:flex-row md:items-start md:justify-between md:gap-[48px] md:py-[80px] lg:py-[96px]">
        <h2 className="text-[52px] font-medium leading-[52px] tracking-[-0.045em] text-black lg:leading-[62px]">
          <WhisperText text="Sobre mim" />
        </h2>

        <TextGradientScroll
          paragraphs={aboutParagraphs}
          className="flex max-w-[758px] flex-col gap-[24px] text-[18px] leading-[1.5] tracking-[-0.015em] lg:text-[20px] lg:leading-[28px]"
        />
      </div>
    </section>
  );
}
