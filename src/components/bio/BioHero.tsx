"use client";

import Image from "next/image";
import {
  BehanceIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
} from "./BrandIcons";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinicius-designer",
    Icon: LinkedInIcon,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/viniciusmach",
    Icon: BehanceIcon,
  },
  {
    label: "Github",
    href: "https://github.com/viniwebd",
    Icon: GithubIcon,
  },
  {
    label: "Pinterest",
    href: "https://br.pinterest.com/viniciuswebdesigner/",
    Icon: PinterestIcon,
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

      <div className="flex flex-col gap-[4px]">
        <h1 className="text-[32px] font-medium leading-[36px] tracking-[-0.045em] text-black md:text-[36px] md:leading-[40px]">
          Vinicius Machado
        </h1>
        <p className="text-[18px] leading-[24px] tracking-[-0.015em] text-[#706b6b] md:text-[20px]">
          Web Designer &amp; UI Designer
        </p>
      </div>

      <ul className="mt-[8px] flex items-center gap-[16px]">
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:border-[#aadf3a] hover:bg-black/[0.03]"
            >
              <Icon size={20} />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
