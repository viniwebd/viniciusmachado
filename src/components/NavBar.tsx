"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export function NavBar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 80);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-[40px] md:bottom-[60px] left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-[12px] md:gap-[24px] rounded-full border border-[rgba(240,240,238,0.42)] bg-[rgba(26,26,26,0.85)] px-[16px] md:px-[32px] py-[8px] backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-full border border-transparent px-[10px] md:px-[12px] py-[2px] text-[12px] md:text-[14px] font-medium text-[rgba(240,240,238,0.6)] transition-all duration-200 hover:border-[rgba(240,240,238,0.42)] hover:bg-[rgba(240,240,238,0.12)] hover:text-[#f0f0ee] active:border-[rgba(240,240,238,0.42)] active:bg-[rgba(240,240,238,0.12)] active:text-[#f0f0ee]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
