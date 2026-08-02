import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "[ADICIONAR PROJETO]",
    slug: "projeto-exemplo",
    summary: "[Descreva o projeto em uma ou duas frases.]",
    description: "[Descreva o projeto com mais detalhes: contexto, funcionalidades e propósito.]",
    problem: "[Descreva o problema que motivou o projeto.]",
    solution: "[Descreva como o projeto resolve esse problema.]",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    architecture: "[Descreva brevemente a arquitetura utilizada.]",
    challenges: ["[Descreva um desafio técnico enfrentado.]"],
    learnings: ["[Descreva o que você aprendeu com o projeto.]"],
    status: "em desenvolvimento",
    role: "[Função exercida no projeto]",
    github: "[ADICIONAR GITHUB DO PROJETO]",
    demo: undefined,
    images: ["/projects/placeholder.png"],
    date: "[MÊS/ANO]",
    featured: true,
    category: "Back-end",
  },
  {
    title: "[ADICIONAR PROJETO]",
    slug: "projeto-exemplo-2",
    summary: "[Descreva o projeto em uma ou duas frases.]",
    description: "[Descreva o projeto com mais detalhes: contexto, funcionalidades e propósito.]",
    problem: "[Descreva o problema que motivou o projeto.]",
    solution: "[Descreva como o projeto resolve esse problema.]",
    technologies: ["Node.js", "React", "MongoDB"],
    architecture: "[Descreva brevemente a arquitetura utilizada.]",
    challenges: ["[Descreva um desafio técnico enfrentado.]"],
    learnings: ["[Descreva o que você aprendeu com o projeto.]"],
    status: "em desenvolvimento",
    role: "[Função exercida no projeto]",
    github: "[ADICIONAR GITHUB DO PROJETO]",
    demo: undefined,
    images: ["/projects/placeholder.png"],
    date: "[MÊS/ANO]",
    featured: true,
    category: "Full stack",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
