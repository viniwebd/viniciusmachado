import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/SocialLinks";

export function About() {
  return (
    <section id="sobre" className="bg-[#f0f0ee] py-[96px]">
      <div className="mx-auto max-w-[1440px] px-[80px]">
        <div className="flex items-start gap-[80px] justify-center">
          {/* Foto */}
          <div className="w-[420px] h-[447px] flex-shrink-0 rounded-[16px] bg-[#ededed] flex items-center justify-center">
            <span className="text-[#808080] text-[14px]">Sua foto aqui</span>
          </div>

          {/* Conteúdo */}
          <div className="w-[557px] flex-shrink-0">
            <h2 className="text-[38px] font-bold leading-[1.15] text-[#1a1a1a] mb-[24px]">
              Sobre
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#1a1a1a] mb-[24px]">
              Sou web designer especializado em WordPress com foco em criar
              experiências digitais que equilibram estética e performance.
              Trabalho desde a concepção visual até a entrega final, garantindo
              que cada projeto comunique com clareza e converta visitantes em
              clientes. Atualmente estudando programação e inglês para expandir
              minha atuação para o mercado internacional, trabalhando como
              contractor e freelancer.
            </p>
            <SocialLinks />
            <div className="mt-[24px]">
              <Button href="/cv.pdf">Download CV</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
