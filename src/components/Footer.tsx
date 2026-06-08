import { SocialLinks } from "@/components/SocialLinks";

const sobreMimLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
];

const esteSiteLinks = [
  { label: "Código-fonte", href: "https://github.com/viniwebd/viniciusmachado" },
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos de Uso", href: "/termos" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-[80px] pt-[64px]">
        {/* Main row */}
        <div className="flex gap-[80px] mb-[64px]">
          {/* Coluna esquerda */}
          <div className="flex-1">
            <p
              className="text-[28px] font-bold leading-[1.2] text-[#f0f0ee] mb-[4px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Vinicius Machado
            </p>
            <p
              className="text-[14px] leading-[1.6] text-[rgba(240,240,238,0.5)] mb-[24px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Vinicius Machado
            </p>
            <SocialLinks />
          </div>

          {/* Sobre mim */}
          <div className="w-[180px] flex-shrink-0">
            <p
              className="text-[20px] font-medium leading-[1.3] text-[#f0f0ee] mb-[11px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Sobre mim
            </p>
            <ul className="space-y-[11px]">
              {sobreMimLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] leading-[1.6] text-[rgba(240,240,238,0.5)] hover:text-[#f0f0ee] transition-colors"
                    style={{ fontVariationSettings: '"opsz" 14' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Este site */}
          <div className="w-[150px] flex-shrink-0">
            <p
              className="text-[20px] font-medium leading-[1.3] text-[#f0f0ee] mb-[12px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Este site
            </p>
            <ul className="space-y-[11px]">
              {esteSiteLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-[14px] leading-[1.6] text-[rgba(240,240,238,0.5)] hover:text-[#f0f0ee] transition-colors"
                    style={{ fontVariationSettings: '"opsz" 14' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(240,240,238,0.12)] py-[24px] flex items-center justify-between">
          <p
            className="text-[12px] leading-[1.4] text-[rgba(240,240,238,0.4)]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            © 2026 Vinicius Machado. Todos os direitos reservados.
          </p>
          <p
            className="text-[12px] leading-[1.4] text-[rgba(240,240,238,0.4)]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Última atualização por Vinicius em 08/06/2026
          </p>
        </div>
      </div>
    </footer>
  );
}
