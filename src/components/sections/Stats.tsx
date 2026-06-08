const stats = [
  { number: "3+", label: "Anos de experiência", sub: "no mercado digital" },
  { number: "40+", label: "Projetos entregues", sub: "para clientes reais" },
  { number: "15+", label: "Clientes atendidos", sub: "em diversos segmentos" },
  { number: "10+", label: "Cursos concluídos", sub: "em design e tecnologia" },
];

function StatContent({ stat }: { stat: (typeof stats)[0] }) {
  return (
    <>
      <p className="text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.3] text-[#f0f0ee] mb-[4px]">
        {stat.number}
      </p>
      <p className="text-[16px] lg:text-[20px] font-medium leading-[1.3] text-[#f0f0ee]">
        {stat.label}
      </p>
      <p className="text-[13px] lg:text-[14px] leading-[1.6] text-[rgba(240,240,238,0.6)]">
        {stat.sub}
      </p>
    </>
  );
}

export function Stats() {
  return (
    <section className="bg-[#1a1a1a] py-[48px] md:py-[56px] lg:py-[64px]">
      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[40px] lg:px-[80px]">

        {/* Mobile / Tablet: grid 2×2 */}
        <div className="grid grid-cols-2 lg:hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-[24px] md:p-[32px] ${
                i < 2 ? "border-b border-[rgba(240,240,238,0.12)]" : ""
              } ${
                i % 2 === 0 ? "border-r border-[rgba(240,240,238,0.12)]" : ""
              }`}
            >
              <StatContent stat={stat} />
            </div>
          ))}
        </div>

        {/* Desktop: 4 colunas com VDiv verde */}
        <div className="hidden lg:flex">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-1">
              <div className="flex-1 px-[40px] py-[32px]">
                <StatContent stat={stat} />
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-[80px] self-center bg-[#aadf3a] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
