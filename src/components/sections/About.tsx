import { ButtonDS } from "@/components/ui/ButtonDS";
import { SocialLinks } from "@/components/SocialLinks";

export function About() {
  return (
    <section id="sobre" className="bg-[#f0f0ee] py-[60px] md:py-[80px] lg:py-[96px]">
      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-start gap-[40px] lg:gap-[80px] lg:justify-center">
          {/* Foto */}
          <div className="order-2 lg:order-1 w-full lg:w-[420px] h-[280px] md:h-[360px] lg:h-[447px] flex-shrink-0 rounded-[16px] bg-[#ededed] flex items-center justify-center">
            <span className="text-[#808080] text-[14px]">Sua foto aqui</span>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2 w-full lg:w-[557px] flex-shrink-0">
            <h2
              className="text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-[1.15] text-[#1a1a1a] mb-[20px] lg:mb-[24px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Sobre
            </h2>
            <p
              className="text-[16px] lg:text-[18px] leading-[1.6] text-[#1a1a1a] mb-[24px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
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
              <ButtonDS variant="primary" size="md" href="/Curriculo-Vinicius-Machado-WebDesginer.pdf">Download CV</ButtonDS>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
