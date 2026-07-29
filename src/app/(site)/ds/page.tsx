import type { Metadata } from "next";
import { ButtonDS } from "@/components/ui/ButtonDS";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

export default function DesignSystem() {
  return (
    <main className="bg-[#f0f0ee] min-h-screen pb-[120px]">

      {/* Header */}
      <div className="bg-[#1a1a1a] px-[24px] md:px-[40px] lg:px-[80px] py-[40px]">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[12px] font-medium text-[#aadf3a] mb-[4px] tracking-widest uppercase">
            Vinicius Machado
          </p>
          <h1
            className="text-[32px] md:text-[40px] font-bold text-[#f0f0ee] leading-[1.1]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Design System
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-[24px] md:px-[40px] lg:px-[80px] pt-[64px]">

        {/* Seção: Cores */}
        <DSSection title="Cores">
          <div className="flex flex-wrap gap-[16px]">
            <Swatch color="#1a1a1a" label="Dark" value="#1a1a1a" />
            <Swatch color="#f0f0ee" label="Light" value="#f0f0ee" border />
            <Swatch color="#aadf3a" label="Green" value="#aadf3a" />
            <Swatch color="rgba(240,240,238,0.6)" label="Light 60%" value="60%" border />
            <Swatch color="rgba(26,26,26,0.5)" label="Dark 50%" value="50%" />
          </div>
        </DSSection>

        {/* Seção: Tipografia */}
        <DSSection title="Tipografia">
          <div className="space-y-[24px]">
            {[
              { label: "H1 — 48px Bold", className: "text-[48px] font-bold leading-[1.1] text-[#1a1a1a]" },
              { label: "H2 — 38px Bold", className: "text-[38px] font-bold leading-[1.15] text-[#1a1a1a]" },
              { label: "H3 — 28px Bold", className: "text-[28px] font-bold leading-[1.2] text-[#1a1a1a]" },
              { label: "Body — 18px Regular", className: "text-[18px] leading-[1.6] text-[#1a1a1a]" },
              { label: "Small — 14px Regular", className: "text-[14px] leading-[1.6] text-[rgba(26,26,26,0.6)]" },
              { label: "Caption — 12px Medium", className: "text-[12px] font-medium leading-[1.4] text-[rgba(26,26,26,0.5)]" },
            ].map(({ label, className }) => (
              <div key={label} className="flex items-baseline gap-[24px]">
                <span className="text-[12px] text-[rgba(26,26,26,0.4)] w-[220px] flex-shrink-0">
                  {label}
                </span>
                <p
                  className={className}
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  DM Sans — Vinicius Machado
                </p>
              </div>
            ))}
          </div>
        </DSSection>

        {/* Seção: Buttons */}
        <DSSection title="Buttons">
          <div className="space-y-[40px]">

            {/* Grid header */}
            <div className="grid grid-cols-[120px_1fr_1fr_1fr] gap-x-[24px] gap-y-[0px] items-center">
              <span />
              {["SM", "MD", "LG"].map((s) => (
                <span
                  key={s}
                  className="text-[11px] font-medium tracking-widest uppercase text-[rgba(26,26,26,0.4)]"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Primary */}
            <div className="space-y-[16px]">
              <p className="text-[12px] font-medium text-[rgba(26,26,26,0.5)] tracking-wide uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
                Primary
              </p>
              {(["Default", "Hover *", "Disabled"] as const).map((state) => (
                <div key={state} className="grid grid-cols-[120px_1fr_1fr_1fr] gap-x-[24px] items-center">
                  <span className="text-[12px] text-[rgba(26,26,26,0.4)]" style={{ fontVariationSettings: '"opsz" 14' }}>{state}</span>
                  {(["sm", "md", "lg"] as const).map((size) => (
                    <div key={size}>
                      <ButtonDS
                        variant="primary"
                        size={size}
                        disabled={state === "Disabled"}
                        className={state === "Hover *" ? "brightness-105" : ""}
                      >
                        Button
                      </ButtonDS>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="h-px bg-[rgba(26,26,26,0.08)]" />

            {/* Secondary */}
            <div className="space-y-[16px]">
              <p className="text-[12px] font-medium text-[rgba(26,26,26,0.5)] tracking-wide uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
                Secondary
              </p>
              {(["Default", "Hover *", "Disabled"] as const).map((state) => (
                <div key={state} className="grid grid-cols-[120px_1fr_1fr_1fr] gap-x-[24px] items-center">
                  <span className="text-[12px] text-[rgba(26,26,26,0.4)]" style={{ fontVariationSettings: '"opsz" 14' }}>{state}</span>
                  {(["sm", "md", "lg"] as const).map((size) => (
                    <div key={size}>
                      <ButtonDS
                        variant="secondary"
                        size={size}
                        disabled={state === "Disabled"}
                        className={state === "Hover *" ? "!border-[#aadf3a] !text-[#aadf3a]" : ""}
                      >
                        Button
                      </ButtonDS>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="h-px bg-[rgba(26,26,26,0.08)]" />

            {/* Ghost */}
            <div className="space-y-[16px]">
              <p className="text-[12px] font-medium text-[rgba(26,26,26,0.5)] tracking-wide uppercase" style={{ fontVariationSettings: '"opsz" 14' }}>
                Ghost
              </p>
              {(["Default", "Hover *", "Disabled"] as const).map((state) => (
                <div key={state} className="grid grid-cols-[120px_1fr_1fr_1fr] gap-x-[24px] items-center">
                  <span className="text-[12px] text-[rgba(26,26,16,0.4)]" style={{ fontVariationSettings: '"opsz" 14' }}>{state}</span>
                  {(["sm", "md", "lg"] as const).map((size) => (
                    <div key={size}>
                      <ButtonDS
                        variant="ghost"
                        size={size}
                        disabled={state === "Disabled"}
                        className={state === "Hover *" ? "!text-[#aadf3a]" : ""}
                      >
                        Button
                      </ButtonDS>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <p className="text-[12px] text-[rgba(26,26,26,0.35)] italic" style={{ fontVariationSettings: '"opsz" 14' }}>
              * Estado hover simulado estaticamente. Hover real funciona ao passar o mouse.
            </p>
          </div>
        </DSSection>

        {/* Seção: Badges */}
        <DSSection title="Badges">
          <p
            className="text-[13px] text-[rgba(26,26,26,0.5)] mb-[32px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Usado para tecnologias, categorias e tags de projetos.
          </p>
          <div className="space-y-[32px]">
            {(["green", "outline", "dark"] as const).map((variant) => (
              <div key={variant} className="flex items-center gap-[40px]">
                <span
                  className="text-[12px] font-medium text-[rgba(26,26,26,0.4)] w-[72px] flex-shrink-0 capitalize"
                  style={{ fontVariationSettings: '"opsz" 14' }}
                >
                  {variant}
                </span>
                <div className="flex items-center gap-[16px]">
                  <Badge variant={variant} size="sm">WordPress</Badge>
                  <Badge variant={variant} size="lg">WordPress</Badge>
                </div>
              </div>
            ))}
          </div>
        </DSSection>

      </div>
    </main>
  );
}

function DSSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-[72px]">
      <div className="flex items-center gap-[16px] mb-[32px]">
        <h2
          className="text-[13px] font-medium tracking-widest uppercase text-[rgba(26,26,26,0.4)]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          {title}
        </h2>
        <div className="flex-1 h-px bg-[rgba(26,26,26,0.12)]" />
      </div>
      {children}
    </section>
  );
}

function Swatch({
  color,
  label,
  value,
  border,
}: {
  color: string;
  label: string;
  value: string;
  border?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div
        className={`w-[80px] h-[80px] rounded-[12px] ${border ? "border border-[rgba(26,26,26,0.12)]" : ""}`}
        style={{ background: color }}
      />
      <p
        className="text-[13px] font-medium text-[#1a1a1a]"
        style={{ fontVariationSettings: '"opsz" 14' }}
      >
        {label}
      </p>
      <p
        className="text-[12px] text-[rgba(26,26,26,0.5)]"
        style={{ fontVariationSettings: '"opsz" 14' }}
      >
        {value}
      </p>
    </div>
  );
}
