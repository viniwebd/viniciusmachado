import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  href?: string;
  className?: string;
};

export function Button({
  children,
  variant = "solid",
  href,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full h-[42px] px-[24px] text-[14px] font-medium leading-none transition-opacity hover:opacity-80 whitespace-nowrap";
  const variants = {
    solid: "bg-[#aadf3a] text-[#1a1a1a]",
    outline:
      "border border-[rgba(240,240,238,0.42)] text-[#f0f0ee] hover:bg-[rgba(240,240,238,0.08)]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return <button className={cls}>{children}</button>;
}
