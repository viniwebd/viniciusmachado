"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type ProjectData } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";
import { WhisperText } from "@/components/ui/WhisperText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ProjectCard({
  project,
  onClick,
}: {
  project: ProjectData;
  onClick: () => void;
}) {
  const imageRef = useRef<HTMLDivElement>(null);
  const subtitle = project.tags.slice(0, 2).join(" • ");

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      { scale: 0.82 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top 40%",
          scrub: 0.6,
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <button
      onClick={onClick}
      className="group flex w-full flex-col items-start gap-[16px] text-left"
    >
      <div
        ref={imageRef}
        className="relative aspect-[628/640] w-full overflow-hidden rounded-[16px] bg-black/5 will-change-transform"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 628px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-transparent from-[55%] to-black"
        />
      </div>

      <div className="flex flex-col gap-[4px]">
        <p className="text-[22px] font-medium leading-[22px] tracking-[-0.045em] text-black">
          {project.title}
        </p>
        <p className="text-[16px] font-medium leading-[18px] tracking-[-0.045em] text-[#706b6b]">
          {subtitle || "Web Design • UI Design"}
        </p>
      </div>
    </button>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <>
      <section id="projetos" className="w-full bg-white">
        <div className="container-page flex flex-col gap-[48px] py-[64px] md:py-[80px] lg:py-[96px]">
          <h2 className="text-[52px] font-medium leading-[52px] tracking-[-0.045em] text-black lg:leading-[62px]">
            <WhisperText text="Projetos" />
          </h2>

          <div className="grid grid-cols-1 gap-x-[24px] gap-y-[48px] md:grid-cols-2">
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
