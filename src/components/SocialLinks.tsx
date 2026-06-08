const links = [
  {
    name: "WhatsApp",
    icon: "/assets/icon-whatsapp.svg",
    href: "https://wa.me/5500000000000",
  },
  {
    name: "Email",
    icon: "/assets/icon-email.svg",
    href: "mailto:vini.webd@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "/assets/icon-linkedin.svg",
    href: "https://linkedin.com/in/viniciusmachado",
  },
  {
    name: "GitHub",
    icon: "/assets/icon-github-social.svg",
    href: "https://github.com/viniwebd",
  },
  {
    name: "Behance",
    icon: "/assets/icon-behance.svg",
    href: "https://behance.net/viniciusmachado",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-[16px]">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="w-[28px] h-[28px] transition-opacity hover:opacity-70 flex-shrink-0"
        >
          <img
            src={link.icon}
            alt={link.name}
            className="w-full h-full object-contain"
          />
        </a>
      ))}
    </div>
  );
}
