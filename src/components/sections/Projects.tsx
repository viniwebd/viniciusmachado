import Image from "next/image";

type Project = {
  title: string;
  image: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "San Marino",
    image: "/assets/project-sanmarino.png",
    tags: ["WordPress", "Jet Engine", "UI Design", "Site Institucional", "Integrações"],
    href: "#",
  },
  {
    title: "Ogliari & Carvalho Advocacia",
    image: "/assets/project-ogliari.png",
    tags: ["WordPress", "UI Design", "Site Institucional"],
    href: "#",
  },
  {
    title: "Izex Services LLC",
    image: "/assets/project-izex.png",
    tags: ["WordPress", "UI Design", "Site Institucional", "Landing Page"],
    href: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="relative flex flex-col justify-end gap-[10px] overflow-hidden rounded-[16px] p-[20px] h-[520px] flex-1 group"
    >
      {/* Imagem de fundo */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay escuro na base */}
      <div className="absolute inset-x-0 bottom-0 h-[116px] bg-[#1a1a1a]" />

      {/* Título */}
      <p
        className="relative text-[28px] font-bold leading-[1.2] text-[#f0f0ee]"
        style={{ fontVariationSettings: '"opsz" 14' }}
      >
        {project.title}
      </p>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-[8px]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[rgba(240,240,238,0.12)] border-[0.5px] border-[rgba(240,240,238,0.42)] rounded-full px-[12px] py-[4px] text-[12px] font-medium leading-[1.4] text-[#f0f0ee]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Ver case */}
      <div className="relative flex items-center gap-[4px]">
        <span
          className="text-[14px] leading-[1.6] text-[#f0f0ee]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          Ver case
        </span>
        <div className="w-[22px] h-[22px] flex-shrink-0">
          <img
            src="/assets/icon-arrow-case.svg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <section id="portfolio" className="bg-[#f0f0ee] py-[96px]">
      <div className="mx-auto max-w-[1440px] px-[80px]">
        <h2
          className="text-[38px] font-bold leading-[1.15] text-[#1a1a1a] text-center mb-[76px]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          Portfólio
        </h2>
        <div className="flex gap-[24px]">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
