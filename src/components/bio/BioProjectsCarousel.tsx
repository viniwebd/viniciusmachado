"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { DragScroll } from "./DragScroll";

export const BioProjectsCarousel = forwardRef<HTMLDivElement>(
  function BioProjectsCarousel(_, ref) {
    return (
      <section ref={ref} className="flex flex-col gap-[16px]">
        <p className="text-[16px] font-medium leading-[18px] tracking-[-0.015em] text-black">
          Projetos em destaque
        </p>

        <DragScroll className="-mx-[24px] px-[24px]">
          <ul className="flex gap-[16px]">
            {projects.map((project) => {
              const subtitle = project.tags.slice(0, 2).join(" • ");
              return (
                <li
                  key={project.id}
                  className="flex w-[280px] flex-shrink-0 flex-col gap-[8px] rounded-[16px] border border-black/10 bg-white p-[8px] transition-colors hover:border-[#aadf3a]"
                >
                  <div className="relative aspect-[264/232] w-full overflow-hidden rounded-[10px] bg-black/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="264px"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                  <div className="flex flex-col gap-[2px] px-[4px] pb-[4px]">
                    <p className="truncate text-[16px] font-medium leading-[22px] tracking-[-0.02em] text-black">
                      {project.title}
                    </p>
                    <p className="truncate text-[13px] leading-[18px] tracking-[-0.01em] text-[#706b6b]">
                      {subtitle || "Web Design • UI Design"}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </DragScroll>
      </section>
    );
  }
);
