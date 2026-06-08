import { Badge } from "@/components/ui/Badge";

type Course = {
  provider: string;
  description: string;
  year: string;
  status: "Concluído" | "Em andamento";
};

const courses: Course[] = [
  {
    provider: "Figmais - Thiago Medeiros",
    description:
      "Princípios do Design, Figma Básico ao Avançado (Auto Layout, Componentes, Prototipação), Landing Page no Figma, WordPress",
    year: "2026",
    status: "Em andamento",
  },
  {
    provider: "Formação Webp - Othon Ciparoni",
    description:
      "UI Design, WordPress + Elementor, Sites Dinâmicos com JetEngine, Figma, Infraestrutura, cPanel, Cloudflare, HTML/CSS, Performance",
    year: "2025",
    status: "Concluído",
  },
];

export function Courses() {
  return (
    <section className="bg-[#f0f0ee] py-[60px] md:py-[80px] lg:py-[96px]">
      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[40px] lg:px-[80px]">
        <h2
          className="text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-[1.15] text-[#1a1a1a] mb-[40px] md:mb-[56px] lg:mb-[76px]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          Cursos &amp; Certificações
        </h2>

        <div>
          {courses.map((course, i) => (
            <div key={course.provider}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[12px] md:gap-0 py-[24px]">
                <div className="md:pr-[40px]">
                  <p
                    className="text-[18px] md:text-[20px] font-medium leading-[1.3] text-[#1a1a1a] mb-[4px]"
                    style={{ fontVariationSettings: '"opsz" 14' }}
                  >
                    {course.provider}
                  </p>
                  <p
                    className="text-[14px] leading-[1.6] text-[rgba(26,26,26,0.6)]"
                    style={{ fontVariationSettings: '"opsz" 14' }}
                  >
                    {course.description}
                  </p>
                </div>
                <div className="flex items-center gap-[12px] md:gap-[16px] flex-shrink-0">
                  <span
                    className="text-[13px] md:text-[14px] leading-[1.6] text-[rgba(26,26,26,0.6)]"
                    style={{ fontVariationSettings: '"opsz" 14' }}
                  >
                    {course.year}
                  </span>
                  <Badge variant="green" size="sm">
                    {course.status}
                  </Badge>
                </div>
              </div>
              {i < courses.length - 1 && (
                <div className="h-px bg-[rgba(26,26,26,0.12)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
