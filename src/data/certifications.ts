import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    title: "[ADICIONAR CERTIFICAÇÃO 1]",
    institution: "[ADICIONAR INSTITUIÇÃO]",
    date: "[MÊS/ANO]",
    status: "concluída",
    skills: ["[Habilidade 1]", "[Habilidade 2]", "[Habilidade 3]"],
    link: undefined,
  },
  {
    title: "[ADICIONAR CERTIFICAÇÃO 2]",
    institution: "[ADICIONAR INSTITUIÇÃO]",
    date: "[MÊS/ANO]",
    status: "em andamento",
    skills: ["[Habilidade 1]", "[Habilidade 2]", "[Habilidade 3]"],
    link: undefined,
  },
  {
    title: "[ADICIONAR CERTIFICAÇÃO 3]",
    institution: "[ADICIONAR INSTITUIÇÃO]",
    date: "[MÊS/ANO]",
    status: "em andamento",
    skills: ["[Habilidade 1]", "[Habilidade 2]", "[Habilidade 3]"],
    link: undefined,
  },
];

export function getFeaturedCertifications(limit = 3): Certification[] {
  return certifications.slice(0, limit);
}
