"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type ProjectData } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";

function ProjectCard({
  project,
  onClick,
}: {
  project: ProjectData;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col justify-end gap-[10px] overflow-hidden rounded-[16px] p-[20px] h-[400px] md:h-[460px] lg:h-[520px] group text-left w-full cursor-pointer"
    >
      {/* Imagem de fundo */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[280px] bg-gradient-to-t from-[#1a1a1a] to-transparent" />

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
          <img src="/assets/icon-arrow-case.svg" alt="" className="w-full h-full" />
        </div>
      </div>
    </button>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <>
      <section id="portfolio" className="bg-[#f0f0ee] py-[60px] md:py-[80px] lg:py-[96px]">
        <div className="mx-auto max-w-[1440px] px-[24px] md:px-[40px] lg:px-[80px]">
          <h2
            className="text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-[1.15] text-[#1a1a1a] text-center mb-[40px] md:mb-[56px] lg:mb-[76px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Portfólio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[20px] lg:gap-[24px]">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
