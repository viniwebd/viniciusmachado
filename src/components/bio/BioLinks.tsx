"use client";

type LinkItem = {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
  action: "external" | "download";
};

const WHATSAPP_URL = `https://wa.me/554899456297?text=${encodeURIComponent(
  "Olá Vini! Vim do seu portfolio e gostaria de conversar mais"
)}`;

const items: LinkItem[] = [
  {
    icon: "/icons/whatsapp.svg",
    title: "Me chame no WhatsApp 👋",
    subtitle: "+55 48 99945-6297",
    href: WHATSAPP_URL,
    action: "external",
  },
  {
    icon: "/icons/email.svg",
    title: "Email",
    subtitle: "contato@viniciusmachado.com",
    href: "mailto:contato@viniciusmachado.com",
    action: "external",
  },
  {
    icon: "/icons/web.svg",
    title: "Portfólio",
    subtitle: "viniciusmachado.com",
    href: "https://viniciusmachado.com",
    action: "external",
  },
  {
    icon: "/icons/file.svg",
    title: "Download CV",
    subtitle: "Vinicius_Machado_Web_Desginer_CV.pdf",
    href: "/Vinicius_Machado_Web_Desginer_CV.pdf",
    action: "download",
  },
];

export function BioLinks({
  itemsRef,
}: {
  itemsRef?: React.MutableRefObject<(HTMLAnchorElement | null)[]>;
}) {
  return (
    <ul className="flex flex-col gap-[16px]">
      {items.map((item, i) => {
        const trailingIcon =
          item.action === "download" ? "/icons/download.svg" : "/icons/link.svg";
        return (
          <li key={item.title}>
            <a
              ref={(el) => {
                if (itemsRef) itemsRef.current[i] = el;
              }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-[16px] rounded-[10px] border border-[rgba(112,107,107,0.1)] bg-white p-[12px] transition-colors hover:border-[#aadf3a]"
            >
              <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-[#aadf3a]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.icon} alt="" width={20} height={20} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
                <p className="truncate text-[16px] font-normal leading-[18px] tracking-[-0.045em] text-black">
                  {item.title}
                </p>
                <p className="truncate text-[12px] font-normal leading-[12px] tracking-[-0.015em] text-[#706b6b]">
                  {item.subtitle}
                </p>
              </div>
              <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center rounded-full bg-[rgba(112,107,107,0.1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={trailingIcon} alt="" width={12} height={12} />
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
