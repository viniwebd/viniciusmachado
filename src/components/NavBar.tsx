"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { HoverRoll } from "@/components/ui/HoverRoll";

const navItems = [
  { label: "Projetos", href: "/#projetos" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/vinicius-designer",
    external: true,
  },
  { label: "Contato", href: "/#contato" },
];

function useLocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const suffix = now.getHours() >= 12 ? "PM" : "AM";
      setTime(`${hours}:${minutes} ${suffix}`);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const time = useLocalTime();

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 w-full bg-white/70 backdrop-blur-xl"
      style={{ opacity: 0 }}
    >
      <div className="container-page flex items-center justify-between gap-[16px] py-[16px]">
        <Link
          href="/#home"
          className="text-[18px] font-normal leading-[20px] tracking-[-0.045em] text-black md:text-[16px] lg:text-[18px]"
        >
          Vinicius Machado
        </Link>

        <div className="hidden items-center gap-[24px] text-[16px] leading-[20px] tracking-[-0.045em] text-black md:flex lg:text-[18px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group inline-block"
            >
              <HoverRoll text={item.label} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-end gap-[4px] text-right text-[14px] leading-[20px] tracking-[-0.045em] text-black min-[425px]:flex-row min-[425px]:items-center min-[425px]:gap-[16px] min-[425px]:text-[16px] lg:text-[18px]">
          <span suppressHydrationWarning>{time || " "}</span>
          <span>Gravataí, RS</span>
        </div>
      </div>
    </nav>
  );
}
