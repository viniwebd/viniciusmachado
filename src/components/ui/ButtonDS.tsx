import type { ReactNode } from "react";

type ButtonDSProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
};

const sizeMap = {
  sm: "px-[12px] py-[8px] rounded-[4px] text-[12px]",
  md: "px-[24px] py-[12px] rounded-[8px] text-[14px]",
  lg: "px-[32px] py-[16px] rounded-[16px] text-[16px]",
};

const variantMap = {
  primary:
    "bg-[#aadf3a] text-[#1a1a1a] hover:brightness-105 disabled:bg-[#1a1a1a] disabled:text-[#f0f0ee] disabled:pointer-events-none",
  secondary:
    "bg-[#1a1a1a] border border-[#f0f0ee] text-[#f0f0ee] hover:border-[#aadf3a] hover:text-[#aadf3a] disabled:border-[#1a1a1a] disabled:pointer-events-none",
  ghost:
    "text-[#1a1a1a] hover:text-[#aadf3a] disabled:opacity-40 disabled:pointer-events-none",
};

export function ButtonDS({
  children,
  variant = "primary",
  size = "md",
  href,
  disabled = false,
  className = "",
  target,
  rel,
}: ButtonDSProps) {
  const cls = [
    "inline-flex items-center justify-center font-medium leading-none transition-all whitespace-nowrap",
    sizeMap[size],
    variantMap[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled}
        target={target}
        rel={rel}
        className={cls}
        style={{ fontVariationSettings: '"opsz" 14' }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={cls}
      style={{ fontVariationSettings: '"opsz" 14' }}
    >
      {children}
    </button>
  );
}
