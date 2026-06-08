import Image from "next/image";

const tools = [
  { name: "WordPress", icon: "/assets/tool-wordpress.svg", parts: 1 },
  {
    name: "Figma",
    icon: "/assets/tool-figma",
    parts: 5,
  },
  { name: "PHP", icon: "/assets/tool-php.svg", parts: 1 },
  {
    name: "HTML5",
    icon: "/assets/tool-html5",
    parts: 4,
  },
  { name: "CSS3", icon: "/assets/tool-css3.svg", parts: 1 },
  { name: "JavaScript", icon: "/assets/tool-javascript.svg", parts: 1 },
  { name: "Git", icon: "/assets/tool-git.svg", parts: 1 },
  { name: "GitHub", icon: "/assets/tool-github.svg", parts: 1 },
];

function ToolCard({ tool }: { tool: (typeof tools)[0] }) {
  return (
    <div
      title={tool.name}
      className="w-[72px] h-[72px] flex-shrink-0 bg-[#1a1a1a] rounded-[16px] flex items-center justify-center p-[16px]"
    >
      {tool.parts > 1 ? (
        <div className="relative w-full h-full">
          {Array.from({ length: tool.parts }, (_, i) => (
            <img
              key={i}
              src={`${tool.icon}-${i + 1}.svg`}
              alt={i === 0 ? tool.name : ""}
              className="absolute inset-0 w-full h-full object-contain"
            />
          ))}
        </div>
      ) : (
        <img
          src={tool.icon}
          alt={tool.name}
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
}

type WorkItem = {
  id: string;
  letter?: string;
  logo?: string;
  logoSize?: { w: number; h: number };
  containerSize?: number;
  period: string;
  title: string;
  company: string;
  description: string;
};

const workItems: WorkItem[] = [
  {
    id: "freelancer",
    letter: "F",
    period: "2024 — Presente",
    title: "Web Designer e UI Design",
    company: "Freelancer",
    description:
      "Criação de layouts de sites e landing pages no Figma com protótipo para aprovação do cliente. Desenvolvimento de sites com WordPress + Elementor, Wix e código (HTML, CSS, JS e React). Criação de sites dinâmicos com WordPress + Elementor + JetEngine. Atendimento a clientes internacionais via agência parceira.",
  },
  {
    id: "n2b",
    logo: "/assets/logo-n2b.png",
    logoSize: { w: 35, h: 16 },
    period: "Out 2025 — Presente",
    title: "Web Designer Pleno",
    company: "N2B Digital",
    description:
      "Agência digital especializada em tráfego pago para negócios locais. Construção de layout no Figma e implementação realizada em WordPress e GreatPages. Análise de briefing e pesquisa de mercado para criar páginas alinhadas ao nicho e ao público-alvo. Uso de IA generativa para criação de banners e imagens. Manutenção técnica de páginas: performance, atualizações e infraestrutura.",
  },
  {
    id: "aura",
    logo: "/assets/logo-aura.png",
    logoSize: { w: 34, h: 35 },
    containerSize: 50,
    period: "Nov 2025 – Fev 2026",
    title: "Web Designer - Freelancer",
    company: "Grupo Aura",
    description:
      "Operação de direct response com funis de vendas para infoprodutos e ofertas digitais. Criação de funis completos: página de vendas, upsell, downsell, obrigado e white pages para redirect. Integração com gateways de pagamento e configuração de redirects entre etapas do funil. Criação de banners para checkout e slides para apresentações. Manutenção e gestão de infraestrutura de domínios.",
  },
  {
    id: "anbar",
    logo: "/assets/logo-anbar.png",
    logoSize: { w: 35, h: 18 },
    period: "Mai 2023 – Abr 2026",
    title: "Web Designer & Gestor de Tráfego Sênior",
    company: "Grupo Anbar",
    description:
      "Agência de performance digital com gestão de tráfego pago e presença digital para PMEs. Criação, atualização e otimização de sites e landing pages dos clientes no WordPress + Elementor. Análise de mapa de calor com Microsoft Clarity e taxa de cliques para identificar gargalos de conversão. Realização de CROs em páginas em colaboração com o time de tráfego, baseado em dados de performance. Setup técnico de tags analíticas, integrações e automações com n8n. Condução de calls de onboarding e feedback com clientes; liderança de analista de tráfego júnior. Progressão: Gestor de Tráfego Jr. → Pleno → Sênior → Web Designer ao longo do período.",
  },
  {
    id: "rb",
    logo: "/assets/logo-rb.png",
    logoSize: { w: 35, h: 24 },
    period: "Ago 2023 – Mai 2025",
    title: "Gestor de Tráfego e Web Designer",
    company: "RB Digital",
    description:
      "Agência digital com foco em campanhas de tráfego pago e geração de leads para clientes locais. Criação e otimização de landing pages para suporte às campanhas de Google Ads dos clientes. Setup técnico completo: compra de domínio, configuração de hospedagem até publicação da página. Gestão de campanhas de Meta Ads e Google Ads com foco em geração de leads qualificados. Escrita de orientações para criativos estáticos e roteiros de anúncios. Participação em reuniões de feedback com clientes sobre performance e estratégias de campanha.",
  },
];

function WorkItemCard({ item, isLast }: { item: WorkItem; isLast: boolean }) {
  const size = item.containerSize ?? 45;

  return (
    <>
      <div className="flex gap-[48px]">
        {/* Logo */}
        <div
          className="flex-shrink-0 bg-[#1a1a1a] rounded-[8px] flex items-center justify-center overflow-hidden"
          style={{ width: size, height: size }}
        >
          {item.letter ? (
            <span className="text-[#f0f0ee] text-[24px] font-bold leading-none">
              {item.letter}
            </span>
          ) : item.logo ? (
            <img
              src={item.logo}
              alt={item.company}
              className="object-contain"
              style={{
                width: item.logoSize?.w,
                height: item.logoSize?.h,
              }}
            />
          ) : null}
        </div>

        {/* Conteúdo */}
        <div className="flex-1">
          <p className="text-[13px] leading-[1.3] text-[rgba(26,26,26,0.5)] mb-[12px]">
            {item.period}
          </p>
          <p className="text-[22px] font-bold leading-[1.32] text-[#1a1a1a] mb-[12px]">
            {item.title}
          </p>
          <p className="text-[16px] font-medium leading-[1.31] text-[#aadf3a] mb-[12px]">
            {item.company}
          </p>
          <p className="text-[14px] leading-[1.6] text-[rgba(26,26,26,0.7)]">
            {item.description}
          </p>
        </div>
      </div>

      {!isLast && (
        <div className="my-[32px] h-px bg-[rgba(26,26,26,0.12)]" />
      )}
    </>
  );
}

export function WorkHistory() {
  return (
    <section className="bg-[#f0f0ee] py-[96px]">
      <div className="mx-auto max-w-[1440px] px-[80px]">
        <div className="flex gap-[80px] items-start">
          {/* Coluna esquerda — sticky */}
          <div className="w-[560px] flex-shrink-0 sticky top-[96px]">
            <h2
              className="text-[38px] font-bold leading-[1.15] text-[#1a1a1a] mb-[24px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Trajetória Profissional
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#1a1a1a] mb-[24px]">
              Minha trajetória no design de produtos não foi linear. Comecei
              pela área técnica e gradualmente me aproximei dos usuários, dos
              produtos e da estratégia. Veja como essa jornada se desenrolou.
            </p>

            {/* Carrossel de ferramentas */}
            <div className="group relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[60px] bg-gradient-to-r from-[#f0f0ee] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[60px] bg-gradient-to-l from-[#f0f0ee] to-transparent" />
              <div
                className="flex animate-[marquee_18s_linear_infinite] group-hover:[animation-play-state:paused]"
                style={{ width: "max-content" }}
              >
                {[...tools, ...tools].map((tool, i) => (
                  <div key={i} className="mr-[24px]">
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lista de experiências */}
          <div className="flex-1">
            {workItems.map((item, i) => (
              <WorkItemCard
                key={item.id}
                item={item}
                isLast={i === workItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
