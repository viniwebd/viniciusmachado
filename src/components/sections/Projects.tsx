"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type ProjectData } from "@/data/projects";
import { WhisperText } from "@/components/ui/WhisperText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ProjectCard({
  project,
  priority,
}: {
  project: ProjectData;
  priority?: boolean;
}) {
  const imageRef = useRef<HTMLDivElement>(null);

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
    <Link
      href={`/cases/${project.id}`}
      className="group flex w-full flex-col items-start text-left"
    >
      <div
        ref={imageRef}
        className="relative aspect-[628/640] w-full overflow-hidden rounded-[16px] bg-black/5 will-change-transform"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 628px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-transparent from-[55%] to-black"
        />
      </div>
    </Link>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="w-full bg-white">
      <div className="container-page flex flex-col gap-[48px] py-[64px] md:py-[80px] lg:py-[96px]">
        <h2 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black lg:text-[44px] lg:leading-[48px] xl:text-[52px] xl:leading-[62px]">
          <WhisperText text="Projetos" />
        </h2>

        <div className="grid grid-cols-1 gap-x-[24px] gap-y-[48px] lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
