type BadgeProps = {
  children: React.ReactNode;
  variant?: "green" | "outline" | "dark";
  size?: "sm" | "lg";
  className?: string;
};

const variantMap = {
  green: "bg-[#aadf3a] text-[#1a1a1a]",
  outline: "border border-[#1a1a1a] text-[#1a1a1a]",
  dark: "bg-[#1a1a1a] text-[#f0f0ee]",
};

const sizeMap = {
  sm: "px-[10px] py-[4px] text-[11px]",
  lg: "px-[14px] py-[6px] text-[13px]",
};

export function Badge({
  children,
  variant = "green",
  size = "sm",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center rounded-[999px] font-medium whitespace-nowrap",
        variantMap[variant],
        sizeMap[size],
        className,
      ].join(" ")}
      style={{ fontVariationSettings: '"opsz" 14' }}
    >
      {children}
    </span>
  );
}
