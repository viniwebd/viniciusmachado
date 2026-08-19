import { WhisperText } from "@/components/ui/WhisperText";

export function About() {
  return (
    <section id="sobre" className="w-full bg-white">
      <div className="container-page grid grid-cols-1 gap-[32px] py-[64px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-[24px] lg:py-[96px]">
        <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[44px] lg:leading-[48px] xl:text-[52px] xl:leading-[62px]">
          <WhisperText text="Sobre mim" />
        </h2>

        <div className="flex flex-col gap-[24px] text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b] xl:text-[20px] xl:leading-[28px]">
          <p>
            Nos últimos anos, divido meu tempo entre agências de mídia paga e projetos próprios, sempre no lado prático de transformar uma ideia em interface publicada. Trabalho bem sob pressão e gosto de manter contato direto com o time,{" "}
            <span className="font-medium text-black">mesmo quando o projeto é 100% remoto</span>.
          </p>
          <p>
            Do Figma até o site no ar, cuido de UI, prototipação e implementação em WordPress, sempre buscando entregar{" "}
            <span className="font-medium text-black">websites com boa usabilidade</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
