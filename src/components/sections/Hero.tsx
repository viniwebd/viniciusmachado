import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Hero() {
  return (
    <section id="home" className="relative h-[720px] bg-[#1a1a1a] overflow-hidden">
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

      <nav className="absolute bottom-[60px] left-0 right-0 flex justify-center">
        <div className="flex items-center gap-[24px] px-[32px] py-[8px] rounded-full border border-[rgba(240,240,238,0.42)]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[14px] font-medium px-[12px] py-[2px] rounded-full transition-colors ${
                item.active
                  ? "bg-[rgba(240,240,238,0.12)] border border-[rgba(240,240,238,0.42)] text-[#f0f0ee]"
                  : "text-[#f0f0ee] hover:text-[#aadf3a]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}
