"use client";

import Image from "next/image";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinicius-designer",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/viniciusmach",
    icon: "/icons/behance.svg",
  },
  {
    label: "Github",
    href: "https://github.com/viniwebd",
    icon: "/icons/github.svg",
  },
  {
    label: "Pinterest",
    href: "https://br.pinterest.com/viniciuswebdesigner/",
    icon: "/icons/pinterest.svg",
  },
];

export function BioHero() {
  return (
    <header className="flex flex-col items-start gap-[16px]">
      <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full bg-black/5">
        <Image
          src="/assets/andrews-barbosa.png"
          alt="Vinicius Machado"
          fill
          sizes="60px"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex w-full flex-col gap-[4px]">
        <h1 className="text-[40px] font-medium leading-[36px] tracking-[-0.045em] text-black">
          Vinicius Machado
        </h1>
        <p className="text-[20px] font-normal leading-[24px] tracking-[-0.015em] text-[#706b6b]">
          Web Designer &amp; UI Designer
        </p>
      </div>

      <ul className="flex items-center gap-[16px]">
        {socials.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[rgba(112,107,107,0.1)] transition-colors hover:bg-[#aadf3a]/30"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon} alt="" width={25} height={25} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
