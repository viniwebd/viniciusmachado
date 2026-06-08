const links = [
  {
    name: "WhatsApp",
    icon: "/assets/icon-whatsapp.svg",
    href: "https://wa.me/5551994231006?text=Ol%C3%A1%20Vini.%20Vim%20pelo%20seu%20portfolio",
  },
  {
    name: "Email",
    icon: "/assets/icon-email.svg",
    href: "mailto:contato@viniciusmachado.com",
  },
  {
    name: "LinkedIn",
    icon: "/assets/icon-linkedin.svg",
    href: "https://www.linkedin.com/in/vinicius-webdesigner/",
  },
  {
    name: "GitHub",
    icon: "/assets/icon-github-social.svg",
    href: "https://github.com/viniwebd",
  },
  {
    name: "Behance",
    icon: "/assets/icon-behance.svg",
    href: "https://www.behance.net/viniciusmach",
  },
];

type Props = { light?: boolean; iconSize?: number; gap?: number };

export function SocialLinks({ light = false, iconSize = 28, gap = 16 }: Props) {
  return (
    <div className="flex items-center" style={{ gap }}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="flex-shrink-0 transition-opacity hover:opacity-70"
          style={{ width: iconSize, height: iconSize }}
        >
          <img
            src={link.icon}
            alt={link.name}
            className={`w-full h-full object-contain ${
              light ? "brightness-0 invert" : ""
            }`}
          />
        </a>
      ))}
    </div>
  );
}
