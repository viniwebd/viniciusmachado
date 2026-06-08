"use client";

import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "WordPress", icon: "/assets/tool-wordpress.svg", parts: 1 },
  { name: "Figma", icon: "/assets/tool-figma.svg", parts: 1 },
  { name: "PHP", icon: "/assets/tool-php.svg", parts: 1 },
  { name: "HTML5", icon: "/assets/tool-html5.svg", parts: 1 },
  { name: "CSS3", icon: "/assets/tool-css3.svg", parts: 1 },
  { name: "JavaScript", icon: "/assets/tool-javascript.svg", parts: 1 },
  { name: "Git", icon: "/assets/tool-git.svg", parts: 1 },
  { name: "GitHub", icon: "/assets/tool-github.svg", parts: 1 },
];

function ToolCard({ tool }: { tool: (typeof tools)[0] }) {
  return (
    <div className="group/tool relative flex flex-col items-center gap-[8px]">
      <div className="w-[72px] h-[72px] flex-shrink-0 bg-[#1a1a1a] rounded-[16px] flex items-center justify-center p-[16px]">
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
          <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
        )}
      </div>

      {/* Tooltip */}
      <div
        className="pointer-events-none absolute top-full mt-[8px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[6px] bg-[#1a1a1a] px-[10px] py-[4px] text-[11px] font-medium text-[#f0f0ee] opacity-0 transition-opacity duration-150 group-hover/tool:opacity-100"
        style={{ fontVariationSettings: '"opsz" 14' }}
      >
        {tool.name}
      </div>
    </div>
  );
}

type WorkItem = {
  id: string;
  letter?: string;
  logo?: string;
  logoSize?: { w: number; h: number };
  period: string;
  title: string;
  company: string;
  description: string;
};

const workItems: WorkItem[] = [
  {
    id: "freelancer",
    logo: "/assets/logo-freelancer.svg",
    logoSize: { w: 16, h: 24 },
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

const NODE_SIZE = 56;
const CONTENT_PB = 64;

export function WorkHistory() {
  const [lineProgress, setLineProgress] = useState(0);
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-based line fill
  useEffect(() => {
    const handleScroll = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = (windowH - rect.top) / (rect.height + windowH);
      setLineProgress(Math.max(0, Math.min(100, progress * 100)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Content fade-in per item
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    workItems.forEach((item, i) => {
      const el = rowRefs.current[i];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIds((prev) => new Set([...prev, item.id]));
            obs.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-[#f0f0ee] py-[60px] md:py-[80px] lg:py-[96px]">
      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[80px] items-start">

          {/* Left column — sticky on desktop */}
          <div className="w-full lg:w-[560px] flex-shrink-0 lg:sticky lg:top-[96px]">
            <h2
              className="text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-[1.15] text-[#1a1a1a] mb-[20px] lg:mb-[24px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Trajetória Profissional
            </h2>
            <p
              className="text-[16px] lg:text-[18px] leading-[1.6] text-[#1a1a1a] mb-[24px]"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              Minha trajetória no design de produtos não foi linear. Comecei
              pela área técnica e gradualmente me aproximei dos usuários, dos
              produtos e da estratégia. Veja como essa jornada se desenrolou.
            </p>
            <div className="group relative overflow-x-clip pb-[36px]">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[60px] bg-gradient-to-r from-[#f0f0ee] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[60px] bg-gradient-to-l from-[#f0f0ee] to-transparent" />
              <div
                className="flex animate-marquee group-hover:[animation-play-state:paused]"
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

          {/* Right column — vertical timeline */}
          <div ref={timelineRef} className="flex-1 min-w-0 relative">

            {/* Continuous vertical line (absolute, behind nodes) */}
            <div
              className="absolute w-[2px] bg-[rgba(26,26,26,0.12)]"
              style={{
                left: NODE_SIZE / 2 - 1,
                top: NODE_SIZE / 2,
                bottom: CONTENT_PB + NODE_SIZE / 2,
              }}
            >
              <div
                className="absolute inset-x-0 top-0 bg-[#1a1a1a]"
                style={{ height: `${lineProgress}%` }}
              />
            </div>

            {workItems.map((item, i) => {
              const isActive = activeIds.has(item.id);

              return (
                <div key={item.id} className="flex gap-[24px] md:gap-[32px]">

                  {/* Node — sticky, bg masks the line behind it */}
                  <div
                    className="flex-shrink-0 sticky self-start bg-[#f0f0ee]"
                    style={{ width: NODE_SIZE, top: 24, zIndex: 10 }}
                  >
                    <div
                      style={{
                        width: NODE_SIZE,
                        height: NODE_SIZE,
                        borderRadius: 10,
                        background: "#1a1a1a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        opacity: isActive ? 1 : 0.3,
                        filter: isActive ? "none" : "grayscale(1)",
                        transition: "opacity 0.4s ease-out, filter 0.4s ease-out",
                      }}
                    >
                      {item.letter ? (
                        <span
                          style={{
                            color: "#f0f0ee",
                            fontWeight: 700,
                            fontSize: 22,
                            lineHeight: 1,
                          }}
                        >
                          {item.letter}
                        </span>
                      ) : item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.company}
                          style={{
                            width: item.logoSize?.w,
                            height: item.logoSize?.h,
                            objectFit: "contain",
                          }}
                        />
                      ) : null}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    ref={(el) => { rowRefs.current[i] = el; }}
                    className="flex-1 min-w-0"
                    style={{
                      paddingBottom: CONTENT_PB,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.4s ease-out 0.2s, transform 0.4s ease-out 0.2s",
                    }}
                  >
                    <p
                      className="text-[13px] leading-[1.3] text-[rgba(26,26,26,0.5)] mb-[12px]"
                      style={{ fontVariationSettings: '"opsz" 14' }}
                    >
                      {item.period}
                    </p>
                    <p
                      className="text-[22px] font-bold leading-[1.32] text-[#1a1a1a] mb-[12px]"
                      style={{ fontVariationSettings: '"opsz" 14' }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-[16px] font-medium leading-[1.31] text-[#aadf3a] mb-[12px]"
                      style={{ fontVariationSettings: '"opsz" 14' }}
                    >
                      {item.company}
                    </p>
                    <p
                      className="text-[14px] leading-[1.6] text-[rgba(26,26,26,0.7)]"
                      style={{ fontVariationSettings: '"opsz" 14' }}
                    >
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
