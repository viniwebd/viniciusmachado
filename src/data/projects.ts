export type ProjectData = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  skills: string[];
  screenshots: string[];
  liveUrl?: string;
};

export const projects: ProjectData[] = [
  {
    id: "san-marino",
    title: "San Marino - Fiat e Multimarcas",
    image: "/assets/project-sanmarino.png",
    tags: ["WordPress", "Jet Engine", "UI Design", "Site Institucional", "Integrações"],
    description:
      "O site anterior era administrado e criado dentro da plataforma da própria agência que atendia a San Marino, uma solução que funcionava nos limites daquele ecossistema fechado. O time da concessionária não tinha controle real sobre o próprio site. Qualquer mudança dependia da agência, qualquer atualização virava um chamado. O visual também sofria com essa limitação: engessado, sem animações, sem identidade visual consistente. Para uma empresa que investe pesado em Google Ads, isso tinha um custo direto. Cada real gasto em mídia paga estava chegando em uma página que não convertia como deveria.",
    skills: ["WordPress", "Elementor", "Jet Engine", "Figma", "UI Design", "Site Institucional", "Integração n8n", "GTM", "Google Analytics"],
    screenshots: [
      "/assets/project-sanmarino.png",
    ],
    liveUrl: "#",
  },
  {
    id: "ogliari",
    title: "Ogliari & Carvalho Advocacia",
    image: "/assets/project-ogliari.png",
    tags: ["WordPress", "UI Design", "Site Institucional"],
    description:
      "Criação de site institucional para escritório de advocacia, com foco em transmitir credibilidade, profissionalismo e facilitar o contato com potenciais clientes. O projeto envolveu desde a concepção do layout no Figma até a implementação completa em WordPress.",
    skills: ["WordPress", "Elementor", "Figma", "UI Design", "Site Institucional"],
    screenshots: [
      "/assets/project-ogliari.png",
    ],
    liveUrl: "#",
  },
  {
    id: "izex",
    title: "Izex Services LLC",
    image: "/assets/project-izex.png",
    tags: ["WordPress", "UI Design", "Site Institucional", "Landing Page"],
    description:
      "Desenvolvimento de site institucional e landing page para empresa americana de serviços. Projeto internacional com foco em conversão e apresentação profissional para o mercado dos EUA.",
    skills: ["WordPress", "Elementor", "Figma", "UI Design", "Site Institucional", "Landing Page"],
    screenshots: [
      "/assets/project-izex.png",
    ],
    liveUrl: "#",
  },
];
