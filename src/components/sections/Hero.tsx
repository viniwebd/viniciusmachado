import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative h-[80vh] bg-[#1a1a1a] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-[80px] pt-[207px]">
        <div className="max-w-[628px]">
          <h1 className="text-[48px] font-bold leading-[1.1] text-[#f0f0ee] mb-[24px]">
            Olá, eu sou Vinicius. Web Designer especialista em WordPress.
          </h1>
          <p className="text-[18px] leading-[1.6] text-[#f0f0ee] mb-[24px]">
            Criando experiências digitais que convertem — sites rápidos, bonitos
            e otimizados para resultados reais.
          </p>
          <div className="flex gap-[16px]">
            <Button href="#portfolio">Ver Portfólio</Button>
            <Button variant="outline" href="/cv.pdf">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
