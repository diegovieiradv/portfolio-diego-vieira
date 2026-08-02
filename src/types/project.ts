export type ProjectStatus = "concluído" | "em desenvolvimento";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  architecture: string;
  challenges: string[];
  learnings: string[];
  status: ProjectStatus;
  role: string;
  github: string;
  demo?: string;
  images: string[];
  date: string;
  featured: boolean;
  category: string;
};
