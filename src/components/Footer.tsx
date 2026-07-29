"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { ArrowDownRight, ArrowUpRight, Copy } from "lucide-react";
import { WhisperText } from "@/components/ui/WhisperText";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Portfolio", href: "/#projetos" },
  { label: "Sobre", href: "/#sobre" },
];

const socialLinks = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/vinicius-designer",
  },
  { label: "Instagram", href: "https://www.instagram.com/vini.webd/" },
  { label: "Behance", href: "https://www.behance.net/viniciusmach" },
  {
    label: "Pinterest",
    href: "https://br.pinterest.com/viniciuswebdesigner/",
  },
  { label: "Github", href: "https://github.com/viniwebd" },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01225aab22889c4b30?mp_source=share",
  },
];

const EMAIL = "contato@viniciusmachado.com";
const PHONE_DISPLAY = "+55 48 9 9945-6297";
const WHATSAPP_MESSAGE =
  "Olá Vini! Vim do seu portfolio e gostaria de conversar mais";
const WHATSAPP_URL = `https://wa.me/554899456297?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

type Side = "above" | "below";

function useMouseTooltip(buttonRef: RefObject<HTMLElement | null>) {
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const rotationTimer = useRef<number | null>(null);

  const [hover, setHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [entered, setEntered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [side, setSide] = useState<Side>("above");

  useEffect(() => {
    if (hover) {
      setMounted(true);
      const id = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(id);
    }
    setEntered(false);
    setRotation(0);
    const t = window.setTimeout(() => setMounted(false), 180);
    return () => window.clearTimeout(t);
  }, [hover]);

  useEffect(() => {
    return () => {
      if (rotationTimer.current) window.clearTimeout(rotationTimer.current);
    };
  }, []);

  const updatePos = (mouseX: number, currentSide: Side) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const y = currentSide === "above" ? rect.top - 8 : rect.bottom + 8;
    setPos({ x: mouseX, y });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nextSide: Side =
      e.clientY < rect.top + rect.height / 2 ? "below" : "above";
    setSide(nextSide);
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    setRotation(0);
    updatePos(e.clientX, nextSide);
    setHover(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0 && lastTime.current > 0) {
      const dx = e.clientX - lastX.current;
      const velocity = dx / dt;
      const rot = Math.max(-14, Math.min(14, -velocity * 5));
      setRotation(rot);
      if (rotationTimer.current) window.clearTimeout(rotationTimer.current);
      rotationTimer.current = window.setTimeout(() => setRotation(0), 90);
    }
    lastX.current = e.clientX;
    lastTime.current = now;
    updatePos(e.clientX, side);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const restingOffset = side === "above" ? "-100%" : "0%";
  const initialOffset =
    side === "above" ? "calc(-100% + 6px)" : "calc(0% - 6px)";
  const transformOrigin = side === "above" ? "50% 100%" : "50% 0%";

  const style: React.CSSProperties = {
    left: pos.x,
    top: pos.y,
    transformOrigin,
    transform: entered
      ? `translate(-50%, ${restingOffset}) rotate(${rotation}deg)`
      : `translate(-50%, ${initialOffset}) rotate(0deg)`,
    opacity: entered ? 1 : 0,
    transition:
      "opacity 150ms ease-out, transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1)",
  };

  return {
    mounted,
    style,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  };
}

function TooltipPill({
  icon,
  label,
  style,
}: {
  icon?: React.ReactNode;
  label: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="pointer-events-none fixed z-[100] flex items-center gap-[4px] rounded-[4px] bg-white px-[8px] py-[4px] text-[14px] font-normal leading-none tracking-[-0.015em] text-black shadow-[0_4px_16px_rgba(0,0,0,0.24)]"
      style={style}
      aria-hidden
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function CopyEmail() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const tooltip = useMouseTooltip(buttonRef);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard failures silently
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        {...tooltip.handlers}
        onMouseLeave={(e) => {
          tooltip.handlers.onMouseLeave();
          setCopied(false);
          void e;
        }}
        onClick={handleClick}
        className="cursor-pointer text-left text-[16px] font-normal leading-[19px] tracking-[-0.015em] text-[#c3c0c0] transition-colors hover:text-white"
      >
        {EMAIL}
      </button>

      {tooltip.mounted && (
        <TooltipPill
          icon={<Copy size={18} strokeWidth={1.75} />}
          label={copied ? "Copiado!" : "Copiar"}
          style={tooltip.style}
        />
      )}
    </>
  );
}

function WhatsAppPhone() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const tooltip = useMouseTooltip(buttonRef);

  return (
    <>
      <a
        ref={buttonRef}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        {...tooltip.handlers}
        className="cursor-pointer text-left text-[16px] font-normal leading-[19px] tracking-[-0.015em] text-[#c3c0c0] transition-colors hover:text-white"
      >
        {PHONE_DISPLAY}
      </a>

      {tooltip.mounted && (
        <TooltipPill
          label="Me chama no WhatsApp 👋"
          style={tooltip.style}
        />
      )}
    </>
  );
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const update = () => {
      document.documentElement.style.setProperty(
        "--footer-height",
        `${el.offsetHeight}px`
      );
    };
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contato"
      className="fixed inset-x-0 bottom-0 z-0 w-full bg-black text-white"
    >
      <div className="container-page flex flex-col gap-[32px] py-[64px] md:py-[80px] lg:gap-[48px] lg:py-[96px]">
        <div className="flex flex-col gap-[32px] lg:flex-row lg:items-start lg:justify-between lg:gap-[80px]">
          <div className="flex flex-col items-start gap-[24px] lg:gap-[48px]">
            <h2 className="max-w-[298px] text-[52px] font-medium leading-[52px] tracking-[-0.045em] text-white lg:text-[62px] lg:leading-[64px]">
              <WhisperText text="Vamos conversar" />
            </h2>
            <a
              href="/Curriculo-Vinicius-Machado-WebDesginer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[8px] rounded-[16px] bg-[#aadf3a] px-[24px] py-[16px] text-[16px] font-medium leading-none tracking-[-0.045em] text-black transition-transform hover:-translate-y-[2px] lg:text-[18px]"
            >
              Download CV
              <ArrowDownRight
                className="h-[22px] w-[22px] lg:h-[24px] lg:w-[24px]"
                strokeWidth={1.75}
              />
            </a>
          </div>

          <div className="flex items-start justify-between lg:justify-start lg:gap-[80px]">
            <ul className="flex flex-col gap-[16px]">
              {navLinks.map((link) => (
                <li key={link.label} className="flex h-[24px] items-center">
                  <a
                    href={link.href}
                    className="text-[16px] font-medium leading-[16px] tracking-[-0.045em] text-white transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex w-[110px] flex-col gap-[16px]">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-[16px] font-medium leading-[16px] tracking-[-0.045em] text-white transition-opacity hover:opacity-70"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className="h-[22px] w-[24px] lg:h-[24px]"
                      strokeWidth={1.75}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-[32px] lg:flex-row lg:flex-wrap lg:gap-[48px]">
          <div className="flex flex-col gap-[4px]">
            <p className="text-[16px] font-medium leading-[19px] tracking-[-0.015em] text-white">
              E-mail
            </p>
            <CopyEmail />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="text-[16px] font-medium leading-[19px] tracking-[-0.015em] text-white">
              Endereço
            </p>
            <p className="text-[16px] font-normal leading-[19px] tracking-[-0.015em] text-[#c3c0c0]">
              Gravataí, RS
            </p>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="text-[16px] font-medium leading-[19px] tracking-[-0.015em] text-white">
              Telefone
            </p>
            <WhatsAppPhone />
          </div>
        </div>

        <div className="h-px w-full bg-white" />

        <p className="text-right text-[14px] leading-none tracking-[-0.015em] text-[#c3c0c0]">
          © 2026 Vinicius Machado. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
