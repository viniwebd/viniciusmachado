import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso — Vinicius Machado",
  description: "Termos de uso do site viniciusmachado.com.",
};

export default function TermosDeUso() {
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
          Termos de Uso
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
              1. Aceitação dos termos
            </h2>
            <p>
              Ao acessar e navegar em{" "}
              <span className="font-medium text-[#1a1a1a]">
                viniciusmachado.com
              </span>
              , você concorda com os termos descritos nesta página. Caso não
              concorde, por favor, não utilize este site.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              2. Propriedade intelectual
            </h2>
            <p>
              Todo o conteúdo presente neste site — incluindo, mas não se
              limitando a textos, layouts, identidade visual, imagens,
              ilustrações, projetos do portfólio e materiais de design — é de{" "}
              <strong className="text-[#1a1a1a]">
                propriedade exclusiva de Vinicius Machado
              </strong>{" "}
              e protegido pelas leis de direito autoral vigentes.
            </p>
            <p className="mt-[16px]">
              É expressamente proibido reproduzir, copiar, distribuir, publicar
              ou utilizar qualquer material deste site, no todo ou em parte, sem
              autorização prévia e por escrito do titular.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              3. Projetos do portfólio
            </h2>
            <p>
              Os projetos exibidos no portfólio foram desenvolvidos por Vinicius
              Machado e são apresentados exclusivamente para fins de demonstração
              profissional. Alguns projetos podem ter sido desenvolvidos em
              contexto de prestação de serviços a clientes, sendo que os
              créditos de autoria do design e desenvolvimento pertencem a
              Vinicius Machado.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              4. Uso permitido
            </h2>
            <p>
              Este site destina-se exclusivamente à apresentação profissional de
              Vinicius Machado e à facilitação de contato para projetos
              freelance, contratos PJ e oportunidades de colaboração. Qualquer
              uso fora desse escopo sem autorização é vedado.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              5. Isenção de responsabilidade
            </h2>
            <p>
              As informações deste site são fornecidas &quot;como estão&quot;,
              sem garantias de qualquer natureza. Vinicius Machado não se
              responsabiliza por eventuais imprecisões ou pela indisponibilidade
              temporária do site.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-[#1a1a1a] mb-[12px]">
              6. Contato
            </h2>
            <p>
              Para solicitar permissão de uso de qualquer material ou para
              qualquer outra dúvida, entre em contato pelos canais disponíveis
              na{" "}
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
              7. Alterações nestes termos
            </h2>
            <p>
              Estes termos podem ser atualizados a qualquer momento. A versão
              mais recente estará sempre disponível nesta página, com a data de
              atualização indicada.
            </p>
          </section>
        </div>

        <p
          className="mt-[64px] text-[13px] text-[rgba(26,26,26,0.4)]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          © 2026 Vinicius Machado. Todos os direitos reservados.
        </p>
      </div>
    </main>
  );
}
