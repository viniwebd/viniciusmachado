const contactLinks = [
  { label: "WhatsApp", href: "https://wa.me/5500000000000" },
  { label: "LinkedIn", href: "https://linkedin.com/in/viniciusmachado" },
  { label: "Email", href: "mailto:vini.webd@gmail.com" },
  { label: "Download CV", href: "/cv.pdf" },
];

export function Contact() {
  return (
    <section id="contato" className="bg-[#1a1a1a] py-[120px]">
      <div className="mx-auto max-w-[1440px] px-[80px]">
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto">
          <h2
            className="text-[38px] font-bold leading-[1.15] text-[#f0f0ee] mb-[76px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Vamos trabalhar juntos?
          </h2>
          <p
            className="text-[18px] leading-[1.6] text-[rgba(240,240,238,0.7)] mb-[52px] max-w-[640px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Estou disponível para projetos freelance, contratos PJ e
            oportunidades internacionais.
          </p>
          <div className="flex gap-[16px] flex-wrap justify-center">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center justify-center rounded-full h-[42px] px-[24px] text-[14px] font-medium border border-[rgba(240,240,238,0.42)] text-[#f0f0ee] hover:bg-[rgba(240,240,238,0.08)] transition-colors whitespace-nowrap"
                style={{ fontVariationSettings: '"opsz" 14' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
