import { ButtonDS } from "@/components/ui/ButtonDS";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[95vh] bg-[#1a1a1a] overflow-hidden flex items-center"
    >
      <div className="mx-auto max-w-[1440px] w-full px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[628px]">
          <h1
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.1] text-[#f0f0ee] mb-[20px] lg:mb-[24px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Olá, eu sou Vinicius.<br />Web Designer especialista em WordPress.
          </h1>
          <p
            className="text-[16px] lg:text-[18px] leading-[1.6] text-[rgba(240,240,238,0.8)] mb-[20px] lg:mb-[24px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Criando experiências digitais que convertem — sites rápidos, bonitos
            e otimizados para resultados reais.
          </p>
          <div className="flex gap-[12px] md:gap-[16px]">
            <ButtonDS variant="primary" size="md" href="/#portfolio">
              Ver Portfólio
            </ButtonDS>
            <ButtonDS
              variant="ghost"
              size="md"
              href="/Curriculo-Vinicius-Machado-WebDesginer.pdf"
              className="!text-[rgba(240,240,238,0.7)] hover:!text-[#aadf3a]"
            >
              Download CV
            </ButtonDS>
          </div>
        </div>
      </div>
    </section>
  );
}
