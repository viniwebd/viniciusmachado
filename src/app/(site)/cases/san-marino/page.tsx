import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WhisperText } from "@/components/ui/WhisperText";
import { HoverRoll } from "@/components/ui/HoverRoll";
import { RollingNumber } from "@/components/ui/RollingNumber";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { projects } from "@/data/projects";

const currentIndex = projects.findIndex((p) => p.id === "san-marino");
const nextProject =
  projects[(currentIndex + 1) % projects.length] ?? projects[0];

export const metadata: Metadata = {
  title: "San Marino Fiat — Vinicius Machado",
  description:
    "Levando uma concessionária de 42% a 60% de Market Share no Rio Grande do Sul.",
};

const meta = [
  { label: "Cliente", value: "San Marino" },
  { label: "Segmento", value: "Concessionária" },
  { label: "Ano", value: "2025" },
  { label: "Duração", value: "12 meses" },
];

const results = [
  { value: "7,46% → 14,78%", label: "Conversão Google Ads (+100%)" },
  { value: "42% → 60%", label: "Market Share Fiat no RS" },
  { value: "0% → 5%", label: "Conversão Meta Ads" },
  { value: "12 meses", label: "Duração do projeto" },
];

const highlight = "font-medium text-black";

type SolutionBlock = {
  title: string;
  body: ReactNode;
  result?: string;
};

const solutionBlocks: SolutionBlock[] = [
  {
    title: "Concessionária no controle do próprio site",
    body: "Site reconstruído em WordPress: San Marino cadastra veículo, atualiza vitrine, decide campanha, sem abrir chamado pra ninguém. + Otimização de performance.",
    result:
      "Resultado: a conversão do Google Ads dobrou, saindo de 7,46% pra 14,78%.",
  },
  {
    title: "Formulário manda lead direto pro CRM",
    body: (
      <>
        O problema mais caro era esse: cada lead do formulário caía no
        sistema da agência antes de chegar na San Marino. Decidi resolver
        isso com{" "}
        <span className={highlight}>
          uma automação em n8n que manda os dados direto pro CRM através de
          API
        </span>
        .
      </>
    ),
  },
  {
    title: "WhatsApp que já sabe pra onde ir",
    body: (
      <>
        Usuário escolhe o setor que quer falar,{" "}
        <span className={highlight}>o botão já direciona pra pessoa certa</span>,
        e manda os dados para o CRM junto. Impossível no site antigo,
        resolvido com scripts adicionais.
      </>
    ),
  },
  {
    title: "Site que roda em qualquer tela da loja",
    body: (
      <>
        Responsividade pensada para{" "}
        <span className={highlight}>o tablet do vendedor e a TV vertical da entrada</span>
        , não só desktop e celular.
      </>
    ),
  },
  {
    title: "GA4 unificado entre os dois sites",
    body: (
      <>
        Quando o site Multimarcas entrou no ar, no início tivemos
        dificuldades para cruzar os leads, porque cada site tinha sua
        própria conta no GA4. Decidi unificar tudo em uma mesma propriedade
        e com UTMs, para{" "}
        <span className={highlight}>
          saber exatamente de onde veio cada acesso e cada conversão
        </span>
        , não importa se o caminho começou no site Fiat ou no Multimarcas.
      </>
    ),
  },
];

export default function SanMarinoCase() {
  return (
    <>
      <PageTransition>
      <section id="hero" className="w-full bg-white">
        <div className="container-page flex flex-col gap-[32px] pt-[96px] pb-[64px] md:pt-[124px] md:pb-[80px] lg:pt-[132px] lg:pb-[96px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="max-w-[855px] text-[32px] font-medium leading-[38px] tracking-[-0.045em] text-black min-[425px]:text-[36px] min-[425px]:leading-[42px] lg:text-[52px] lg:leading-[56px]">
              Levando uma concessionária de 42% a 60% de Market Share.
            </h1>
            <p className="max-w-[758px] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b]">
              Site institucional preso à agência de tráfego, reconstruído em
              WordPress com automação própria do formulário ao CRM, em cerca
              de 12 meses.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[24px] min-[425px]:flex-row min-[425px]:items-end min-[425px]:justify-between">
            <div className="flex flex-wrap gap-[24px] min-[425px]:gap-[32px] lg:gap-[48px]">
              {meta.map((item) => (
                <div key={item.label} className="flex flex-col gap-[4px]">
                  <p className="text-[14px] leading-[20px] tracking-[-0.015em] text-[#706b6b]">
                    {item.label}
                  </p>
                  <p className="text-[18px] leading-[24px] tracking-[-0.045em] text-black">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://sanmarinofiat.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-[8px] text-[16px] leading-[20px] tracking-[-0.045em] text-black"
            >
              <HoverRoll text="Ver projeto no ar" />
              <ArrowUpRight
                className="h-[16px] w-[16px] transition-transform duration-300 group-hover:rotate-45"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </div>
      </section>

      <section id="contexto" className="w-full bg-white">
        <div className="container-page grid grid-cols-1 gap-[32px] py-[64px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-[24px] lg:py-[96px]">
          <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[52px] lg:leading-[62px]">
            <WhisperText text="Contexto" />
          </h2>

          <div className="flex flex-col gap-[24px] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b]">
            <p>
              A San Marino é a{" "}
              <span className="font-medium text-black">
                maior concessionária Fiat do Rio Grande do Sul
              </span>
              , com mais de 40 anos de mercado e cinco lojas: quatro de
              veículos 0km e uma de seminovos premium. O site institucional
              rodava dentro da plataforma fechada da agência de mídia paga
              que cuidava da empresa.
            </p>
            <p>
              Isso travava o design, limitava a responsividade a formatos
              fixos e, principalmente,{" "}
              <span className="font-medium text-black">
                fazia os leads caírem no sistema da agência em vez do CRM da
                própria San Marino
              </span>
              . Levei 12 meses
              nesse projeto e, na sequência, construí também o site da{" "}
              <a
                href="https://sanmarinomultimarcas.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#706b6b] underline underline-offset-2 transition-colors hover:text-black"
              >
                San Marino Multimarcas
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="problema" className="w-full bg-white">
        <div className="container-page grid grid-cols-1 gap-[32px] py-[64px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-[24px] lg:py-[96px]">
          <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[52px] lg:leading-[62px]">
            <WhisperText text="Problema" />
          </h2>

          <p className="max-w-[758px] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b]">
            &quot;Preciso abrir chamado só pra trocar uma foto&quot; virou
            rotina na concessionária, enquanto cada lead do formulário ia
            direto pro sistema da agência,{" "}
            <span className="font-medium text-black">
              nunca pro CRM da San Marino
            </span>
            .
          </p>
        </div>
      </section>

      <section id="solucao" className="w-full bg-white">
        <div className="container-page grid grid-cols-1 gap-[32px] py-[64px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-[24px] lg:py-[96px]">
          <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[52px] lg:leading-[62px]">
            <WhisperText text="Solução" />
          </h2>

          <div className="flex flex-col gap-[64px]">
            <p className="text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b]">
              A solução não foi só deixar o site mais bonito. Antes de
              desenhar qualquer tela,{" "}
              <span className="font-medium text-black">
                mapeei onde cada problema realmente morava
              </span>
              : os leads não chegavam na San Marino, o site não era da San
              Marino de fato, e não dava pra saber de onde vinha cada
              conversão.
            </p>

            {solutionBlocks.map((block) => (
              <div key={block.title} className="flex flex-col gap-[16px]">
                <h3 className="text-[24px] font-medium leading-[28px] tracking-[-0.045em] text-black">
                  {block.title}
                </h3>
                <div className="flex flex-col gap-[8px] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b]">
                  <p>{block.body}</p>
                  {block.result && (
                    <p className="font-medium text-black">{block.result}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="w-full bg-white">
        <div className="container-page grid grid-cols-1 gap-[32px] py-[64px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-[24px] lg:py-[96px]">
          <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[52px] lg:leading-[62px]">
            <WhisperText text="Resultados" />
          </h2>

          <div className="grid grid-cols-1 gap-[32px] min-[425px]:grid-cols-2 lg:gap-x-[48px]">
            {results.map((item) => (
              <div key={item.label} className="flex flex-col gap-[8px]">
                <p className="text-[40px] font-medium leading-[44px] tracking-[-0.045em] text-black">
                  <RollingNumber value={item.value} />
                </p>
                <p className="text-[16px] leading-[20px] tracking-[-0.015em] text-[#706b6b]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="meu-papel" className="w-full bg-white">
        <div className="container-page grid grid-cols-1 gap-[32px] py-[64px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-[24px] lg:py-[96px]">
          <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[52px] lg:leading-[62px]">
            <WhisperText text="Meu papel" />
          </h2>

          <p className="max-w-[758px] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b]">
            Fui responsável pelo UI Design, pela implementação (WordPress +
            Elementor + JetEngine) e pelas{" "}
            <span className="font-medium text-black">
              automações do projeto, do formulário até o CRM, rastreamento
              entre site e ao roteamento do WhatsApp
            </span>
            . Trabalhei direto com a equipe de tráfego pago da San Marino,
            que cuidava da mídia enquanto eu cuidava do site e das
            integrações.
          </p>
        </div>
      </section>

      <section id="reflexao" className="w-full bg-white">
        <div className="container-page grid grid-cols-1 gap-[32px] py-[64px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-[24px] lg:py-[96px]">
          <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[52px] lg:leading-[62px]">
            <WhisperText text="Reflexão" />
          </h2>

          <div className="flex flex-col gap-[24px] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b]">
            <p>
              O maior aprendizado desse projeto foi entender que resultado de
              negócio, Market Share, conversão em Ads,{" "}
              <span className="font-medium text-black">
                nunca é mérito só do site
              </span>
              . Foi um trabalho em conjunto com a equipe de tráfego pago da
              San Marino.
            </p>
            <p>
              O projeto inteiro foi construído em cima do feedback
              qualitativo do cliente, sem pesquisa real com quem usa o site
              no dia a dia. Se fosse hoje, eu faria{" "}
              <span className="font-medium text-black">
                acompanhamento direto na loja pra entender como clientes e
                vendedores interagem de verdade com o site
              </span>
              , e testaria a página antes de ter uma versão final.
            </p>
          </div>
        </div>
      </section>

      <section id="proximo-projeto" className="w-full bg-white">
        <div className="container-page grid grid-cols-1 gap-[32px] lg:grid-cols-2 lg:items-center lg:gap-[24px]">
          <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[52px] lg:leading-[62px]">
            <WhisperText text="Próximo projeto" />
          </h2>

          <Link
            href={`/cases/${nextProject.id}`}
            className="group flex items-center justify-between py-[48px] text-[18px] leading-[1.5] tracking-[-0.015em] text-black xl:text-[20px]"
          >
            <HoverRoll text={nextProject.title} />
            <ArrowUpRight
              className="h-[48px] w-[48px] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
              strokeWidth={1.75}
            />
          </Link>
        </div>
      </section>
      </PageTransition>
      <Footer />
    </>
  );
}
