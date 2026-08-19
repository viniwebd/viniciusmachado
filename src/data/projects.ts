export type ProjectData = {
  id: string;
  title: string;
  pitch: string;
  result?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
};

export const projects: ProjectData[] = [
  {
    id: "san-marino",
    title: "San Marino Fiat",
    pitch:
      "Tirando concessionária de plataforma fechada de agência: site institucional que a equipe opera sozinha, com Google Ads convertendo.",
    result: "Resultado: conversão de Ads dobrou (+100%)",
    image: "/assets/project-sanmarino.png",
    tags: ["WordPress", "Jet Engine", "UI Design", "Site Institucional", "Integrações"],
    liveUrl: "#",
  },
  {
    id: "ogliari",
    title: "Ogliari & Carvalho Advocacia",
    pitch:
      "Site que transforma busca por advogado em contato, com credibilidade B2C pro escritório de advocacia.",
    image: "/assets/project-ogliari.png",
    tags: ["WordPress", "UI Design", "Site Institucional"],
    liveUrl: "#",
  },
  {
    id: "izex",
    title: "Izex Services LLC",
    pitch:
      "Landing page bilíngue que converte lead US para PME brasileira de serviços.",
    image: "/assets/project-izex.png",
    tags: ["WordPress", "UI Design", "Site Institucional", "Landing Page"],
    liveUrl: "#",
  },
];
