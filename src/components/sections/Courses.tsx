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

function StatusBadge({ status }: { status: Course["status"] }) {
  const styles =
    status === "Concluído"
      ? "bg-[rgba(170,223,58,0.15)] border-[rgba(170,223,58,0.6)] text-[#1a1a1a]"
      : "bg-[rgba(255,165,0,0.12)] border-[rgba(255,165,0,0.5)] text-[#1a1a1a]";

  return (
    <span
      className={`inline-flex items-center px-[12px] py-[5px] rounded-full border text-[12px] font-medium leading-[1.4] ${styles}`}
      style={{ fontVariationSettings: '"opsz" 14' }}
    >
      {status}
    </span>
  );
}

export function Courses() {
  return (
    <section className="bg-[#f0f0ee] py-[96px]">
      <div className="mx-auto max-w-[1440px] px-[80px]">
        <h2
          className="text-[38px] font-bold leading-[1.15] text-[#1a1a1a] mb-[76px]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          Cursos &amp; Certificações
        </h2>

        <div>
          {courses.map((course, i) => (
            <div key={course.provider}>
              <div className="flex items-center justify-between py-[24px]">
                <div>
                  <p
                    className="text-[20px] font-medium leading-[1.3] text-[#1a1a1a] mb-[4px]"
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
                <div className="flex items-center gap-[16px] flex-shrink-0 ml-[40px]">
                  <span
                    className="text-[14px] leading-[1.6] text-[rgba(26,26,26,0.6)]"
                    style={{ fontVariationSettings: '"opsz" 14' }}
                  >
                    {course.year}
                  </span>
                  <StatusBadge status={course.status} />
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
