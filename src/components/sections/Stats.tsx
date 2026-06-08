const stats = [
  { number: "3+", label: "Anos de experiência", sub: "no mercado digital" },
  { number: "40+", label: "Projetos entregues", sub: "para clientes reais" },
  { number: "15+", label: "Clientes atendidos", sub: "em diversos segmentos" },
  { number: "10+", label: "Cursos concluídos", sub: "em design e tecnologia" },
];

export function Stats() {
  return (
    <section className="bg-[#1a1a1a] py-[64px]">
      <div className="mx-auto max-w-[1440px] px-[80px]">
        <div className="flex">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-1">
              <div className="flex-1 px-[40px] py-[32px]">
                <p className="text-[56px] font-bold leading-[1.3] text-[#f0f0ee] mb-[4px]">
                  {stat.number}
                </p>
                <p className="text-[20px] font-medium leading-[1.3] text-[#f0f0ee]">
                  {stat.label}
                </p>
                <p className="text-[14px] leading-[1.6] text-[rgba(240,240,238,0.6)]">
                  {stat.sub}
                </p>
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
