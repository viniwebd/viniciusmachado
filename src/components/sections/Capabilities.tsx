import { WhisperText } from "@/components/ui/WhisperText";

const capacidades = ["UI design", "Prototipação", "Trabalho em equipe", "Atenção a detalhes"];
const ferramentas = ["Figma", "WordPress", "Elementor", "Jet Engine", "GSAP", "Claude Code"];

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="text-[16px] font-medium tracking-[-0.015em] text-black">{label}</p>
      <ul className="flex flex-col gap-[4px]">
        {items.map((item) => (
          <li
            key={item}
            className="text-[18px] leading-[1.5] tracking-[-0.015em] text-[#706b6b] xl:text-[20px] xl:leading-[28px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Capabilities() {
  return (
    <section id="capacidades" className="w-full bg-white">
      <div className="container-page grid grid-cols-1 gap-[32px] py-[64px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-[24px] lg:py-[96px]">
        <h2 className="max-w-[350px] text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[44px] lg:leading-[48px] xl:text-[52px] xl:leading-[62px]">
          <WhisperText text="Capacidades e Ferramentas" />
        </h2>

        <div className="flex w-full flex-col gap-[32px] sm:flex-row sm:gap-[38px]">
          <List label="Capacidades" items={capacidades} />
          <List label="Ferramentas" items={ferramentas} />
        </div>
      </div>
    </section>
  );
}
