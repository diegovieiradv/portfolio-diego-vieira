export type ProjectStatus = "concluído" | "em desenvolvimento" | "planejado";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  problem?: string;
  solution?: string;
  audience?: string;
  benefits?: string[];
  features?: string[];
  highlights?: string[];
  technologies: string[];
  plannedTechnologies?: string[];
  architecture?: string;
  challenges?: string[];
  tests?: string[];
  learnings?: string[];
  roadmap?: string[];
  /** Grupos de tecnologias para a seção "Tecnologias" da página individual. */
  technologyGroups?: { label: string; items: string[] }[];
  /** Nota exibida abaixo dos grupos de tecnologias na página individual. */
  technologyGroupsNote?: string;
  /** Itens da seção "Segurança" da página individual. */
  security?: string[];
  /** Fatos e ressalvas da seção "Status do projeto". */
  statusDetails?: string[];
  /** Legendas alinhadas por índice a `images` (caption e alt na galeria). */
  imageCaptions?: string[];
  status: ProjectStatus;
  role?: string;
  github?: string;
  demo?: string;
  images: string[];
  date?: string;
  featured: boolean;
  category: string;
};
