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
  learnings?: string[];
  roadmap?: string[];
  status: ProjectStatus;
  role?: string;
  github?: string;
  demo?: string;
  images: string[];
  date?: string;
  featured: boolean;
  category: string;
};
