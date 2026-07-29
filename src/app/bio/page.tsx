"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BioHero } from "@/components/bio/BioHero";
import { BioCards } from "@/components/bio/BioCards";
import { BioLinks } from "@/components/bio/BioLinks";
import { BioProjectsCarousel } from "@/components/bio/BioProjectsCarousel";
import { BioTestimonialsCarousel } from "@/components/bio/BioTestimonialsCarousel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BioPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const linkItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];

    const make = (
      target: gsap.TweenTarget | null,
      from: gsap.TweenVars,
      opts: { trigger?: Element | null } = {}
    ) => {
      if (!target) return;
      const t = gsap.fromTo(
        target,
        from,
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: (opts.trigger ?? (target as Element)) as Element,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
      tweens.push(t);
    };

    make(aboutRef.current, { x: -50, opacity: 0 });
    make(locationRef.current, { x: 50, opacity: 0 });

    const items = linkItemsRef.current.filter(Boolean) as HTMLElement[];
    items.forEach((el, i) => {
      const t = gsap.fromTo(
        el,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
      tweens.push(t);
    });

    make(projectsRef.current, { y: 60, opacity: 0 });
    make(testimonialsRef.current, { y: 60, opacity: 0 });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-black">
      <div className="mx-auto flex w-full max-w-[620px] flex-col gap-[32px] px-[24px] pt-[64px] pb-[48px] md:pt-[80px]">
        <BioHero />
        <BioCards aboutRef={aboutRef} locationRef={locationRef} />
        <BioLinks itemsRef={linkItemsRef} />
      </div>

      <div className="mx-auto flex w-full max-w-[620px] flex-col gap-[32px] px-[24px] pb-[48px]">
        <BioProjectsCarousel ref={projectsRef} />
        <BioTestimonialsCarousel ref={testimonialsRef} />
      </div>

      <footer className="mx-auto w-full max-w-[620px] px-[24px] pb-[48px]">
        <p className="text-center text-[13px] leading-[16px] tracking-[-0.01em] text-[#706b6b]">
          © 2026 Vinicius Machado. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
