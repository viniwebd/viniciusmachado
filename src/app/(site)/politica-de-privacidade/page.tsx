import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Vinicius Machado",
  description: "Política de privacidade do site viniciusmachado.com.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="bg-[#f0f0ee] min-h-screen">
      <div className="mx-auto max-w-[800px] px-[24px] md:px-[40px] py-[80px] md:py-[96px]">

        <Link
          href="/"
          className="inline-flex items-center gap-[8px] text-[14px] text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors mb-[48px]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          Voltar
        </Link>

        <h1
          className="text-[32px] md:text-[38px] font-bold leading-[1.15] text-[#1a1a1a] mb-[8px]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          Política de Privacidade
        </h1>
        <p
          className="text-[14px] text-[rgba(26,26,26,0.5)] mb-[48px]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          Última atualização: junho de 2026
        </p>

        <div
          className="space-y-[40px] text-[16px] leading-[1.7] text-[rgba(26,26,26,0.8)]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              1. Quem somos
            </h2>
            <p>
              Este site é operado por Vinicius Machado, web designer e
              desenvolvedor, acessível em{" "}
              <span className="font-medium text-[#1a1a1a]">
                viniciusmachado.com
              </span>
              . Caso tenha dúvidas sobre esta política, entre em contato pelos
              canais disponíveis na página inicial.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              2. Dados coletados
            </h2>
            <p>
              Este site <strong className="text-[#1a1a1a]">não coleta dados pessoais</strong>. Não há
              formulários de contato, pixels de rastreamento, Google Tag Manager
              ou qualquer ferramenta de analytics ativa. Nenhuma informação sua
              é armazenada ao navegar por este site.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              3. Cookies
            </h2>
            <p>
              Este site não utiliza cookies próprios para rastreamento ou
              personalização. Caso o seu navegador armazene dados de sessão
              automaticamente, isso ocorre por comportamento padrão do browser,
              sem qualquer coleta ou processamento por parte deste site.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              4. Links externos
            </h2>
            <p>
              Este site contém links para plataformas externas como LinkedIn,
              GitHub e WhatsApp. Ao acessar esses links, você estará sujeito às
              políticas de privacidade de cada plataforma, sobre as quais não
              temos controle ou responsabilidade.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              5. Contato
            </h2>
            <p>
              Para qualquer dúvida relacionada a esta política ou ao site, entre
              em contato pelos botões disponíveis na{" "}
              <Link
                href="/#contato"
                className="font-medium text-[#1a1a1a] underline underline-offset-2 hover:text-[#aadf3a] transition-colors"
              >
                página de contato
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              6. Alterações nesta política
            </h2>
            <p>
              Esta política pode ser atualizada eventualmente. Quaisquer
              mudanças serão refletidas nesta página com a data de atualização
              revisada.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
