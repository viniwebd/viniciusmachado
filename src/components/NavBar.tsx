"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Portfólio", href: "#portfolio", sectionId: "portfolio" },
  { label: "Sobre", href: "#sobre", sectionId: "sobre" },
  { label: "Contato", href: "#contato", sectionId: "contato" },
];

export function NavBar() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("home");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setVisible(y < lastY.current || y < 80);
      lastY.current = y;

      // Detecta seção ativa
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.sectionId);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActive(item.sectionId);
          return;
        }
      }
      setActive("home");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-[60px] left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-[24px] rounded-full border border-[rgba(240,240,238,0.42)] bg-[rgba(26,26,26,0.85)] px-[32px] py-[8px] backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`rounded-full border px-[12px] py-[2px] text-[14px] font-medium transition-all duration-200 ${
              active === item.sectionId
                ? "border-[rgba(240,240,238,0.42)] bg-[rgba(240,240,238,0.12)] text-[#f0f0ee]"
                : "border-transparent text-[rgba(240,240,238,0.6)] hover:border-[rgba(240,240,238,0.42)] hover:bg-[rgba(240,240,238,0.12)] hover:text-[#f0f0ee]"
            }`}
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
