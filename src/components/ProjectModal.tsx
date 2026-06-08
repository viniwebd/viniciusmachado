"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { ProjectData } from "@/data/projects";
import Image from "next/image";

type Props = {
  project: ProjectData | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  const rightColRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // Trigger enter animation after mount
  useEffect(() => {
    if (!project) return;
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [project]);

  // Lock body scroll
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  // Close with exit animation
  const handleClose = useCallback(() => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      onClose();
    }, 220);
  }, [closing, onClose]);

  // Escape key
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, handleClose]);

  // Reset scroll on project change
  useEffect(() => {
    if (project && rightColRef.current) rightColRef.current.scrollTop = 0;
  }, [project]);


  if (!project) return null;

  const isShown = visible && !closing;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm transition-opacity duration-[220ms] ease-out ${
          isShown ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className={`fixed inset-[16px] md:inset-[24px] lg:inset-[40px] z-[201] flex flex-col bg-[#1a1a1a] border-[0.5px] border-[rgba(240,240,238,0.42)] rounded-[24px] overflow-hidden transition-all duration-[220ms] ease-out ${
          isShown ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Header — fixo */}
        <div className="flex-shrink-0 flex items-center justify-between px-[24px] py-[24px] lg:py-[32px] border-b-[0.5px] border-[#aadf3a] bg-[#1a1a1a]">
          <h2
            className="text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[1.2] text-[#f0f0ee] pr-[16px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {project.title}
          </h2>
          <button
            onClick={handleClose}
            aria-label="Fechar"
            className="flex-shrink-0 w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full bg-[rgba(240,240,238,0.08)] border border-[rgba(240,240,238,0.2)] flex items-center justify-center hover:bg-[rgba(240,240,238,0.14)] transition-colors cursor-pointer"
          >
            <X size={20} className="text-[#aadf3a]" strokeWidth={2} />
          </button>
        </div>

        {/* Body — scroll único */}
        <div
          ref={rightColRef}
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[32px] px-[24px] py-[32px]">

            {/* Coluna esquerda — info */}
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p
                  className="text-[20px] font-medium leading-[1.3] text-[#f0f0ee]"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  Descrição do projeto:
                </p>
                <p
                  className="text-[14px] leading-[1.6] text-[rgba(240,240,238,0.7)]"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-[16px]">
                <p
                  className="text-[20px] font-medium leading-[1.3] text-[#f0f0ee]"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  Skills
                </p>
                <div className="flex flex-wrap gap-[8px]">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[rgba(240,240,238,0.12)] border-[0.5px] border-[rgba(240,240,238,0.42)] rounded-full px-[12px] py-[4px] text-[12px] font-medium text-[#f0f0ee]"
                      style={{ fontVariationSettings: '"opsz" 14' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna direita — screenshots */}
            <div className="flex flex-col gap-[24px]">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="relative w-full rounded-[12px] overflow-hidden bg-[rgba(240,240,238,0.04)]"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} — screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
