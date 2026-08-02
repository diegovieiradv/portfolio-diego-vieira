import type { TechLevel } from "@/types";

export type Technology = {
  name: string;
  level: TechLevel;
  description: string;
};

export type TechnologyCategory = {
  category: string;
  items: Technology[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    category: "Stack principal",
    items: [
      {
        name: "Java",
        level: "foco principal",
        description:
          "Linguagem principal nos meus estudos, com foco em aplicações back-end orientadas a objetos.",
      },
      {
        name: "Spring Boot",
        level: "foco principal",
        description:
          "Framework usado para construir APIs REST e aplicações com injeção de dependência e Spring Data.",
      },
      {
        name: "APIs REST",
        level: "foco principal",
        description:
          "Desenvolvimento de endpoints, validação de entrada e documentação de contratos HTTP.",
      },
      {
        name: "Node.js",
        level: "conhecimento intermediário",
        description:
          "Uso no lado full stack para explorar JavaScript no servidor e complementar os estudos em back-end.",
      },
      {
        name: "PostgreSQL",
        level: "experiência prática",
        description:
          "Banco relacional utilizado em projetos com modelagem de dados e consultas SQL.",
      },
      {
        name: "Docker",
        level: "conhecimento intermediário",
        description:
          "Containerização de aplicações e serviços para facilitar o ambiente de desenvolvimento.",
      },
      {
        name: "Git",
        level: "experiência prática",
        description:
          "Controle de versão no dia a dia, com commits, branches e resolução de conflitos.",
      },
      {
        name: "GitHub",
        level: "experiência prática",
        description: "Hospedagem de repositórios, colaboração em equipe e publicação de projetos.",
      },
    ],
  },
];
