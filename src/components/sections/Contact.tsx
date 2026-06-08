import { ButtonDS } from "@/components/ui/ButtonDS";

const contactLinks = [
  { label: "WhatsApp", href: "https://wa.me/5551994231006?text=Ol%C3%A1%20Vini.%20Vim%20pelo%20seu%20portfolio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vinicius-webdesigner/" },
  { label: "Email", href: "mailto:contato@viniciusmachado.com" },
  { label: "Download CV", href: "/Curriculo-Vinicius-Machado-WebDesginer.pdf" },
];

export function Contact() {
  return (
    <section id="contato" className="bg-[#1a1a1a] py-[80px] md:py-[100px] lg:py-[120px]">
      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto">
          <h2
            className="text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-[1.15] text-[#f0f0ee] mb-[32px] md:mb-[56px] lg:mb-[76px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Vamos trabalhar juntos?
          </h2>
          <p
            className="text-[16px] lg:text-[18px] leading-[1.6] text-[rgba(240,240,238,0.7)] mb-[40px] md:mb-[52px] max-w-[640px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Estou disponível para projetos freelance, contratos PJ e
            oportunidades internacionais.
          </p>
          <div className="flex gap-[16px] flex-wrap justify-center">
            {contactLinks.map((link) => (
              <ButtonDS
                key={link.label}
                variant="ghost"
                size="md"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="!text-[rgba(240,240,238,0.7)] hover:!text-[#aadf3a]"
              >
                {link.label}
              </ButtonDS>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
