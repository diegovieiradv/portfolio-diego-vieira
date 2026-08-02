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
          "Linguagem principal dos meus estudos, com foco em aplicações back-end orientadas a objetos.",
      },
      {
        name: "Spring Boot",
        level: "foco principal",
        description:
          "Framework usado para construir APIs REST, com injeção de dependência e Spring Data JPA.",
      },
      {
        name: "APIs REST",
        level: "foco principal",
        description:
          "Desenvolvimento de endpoints, validação de entrada, tratamento de erros e contratos HTTP.",
      },
      {
        name: "Node.js",
        level: "conhecimento intermediário",
        description:
          "Uso no lado full stack para explorar JavaScript no servidor e ampliar os conhecimentos em back-end.",
      },
      {
        name: "PostgreSQL",
        level: "experiência prática",
        description: "Banco relacional usado em projetos com modelagem de dados e consultas SQL.",
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
          "Controle de versão no dia a dia, com commits, branches e colaboração em equipe.",
      },
      {
        name: "GitHub",
        level: "experiência prática",
        description: "Hospedagem de repositórios, versionamento e publicação de projetos.",
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        level: "experiência prática",
        description:
          "Estruturação semântica de páginas, com atenção à acessibilidade e boas práticas.",
      },
      {
        name: "CSS",
        level: "experiência prática",
        description:
          "Estilização e layouts responsivos, utilizando Flexbox, Grid e customizações de tema.",
      },
      {
        name: "JavaScript",
        level: "conhecimento intermediário",
        description: "Interatividade no navegador e base para os estudos em Node.js e React.",
      },
      {
        name: "TypeScript",
        level: "em aprendizado",
        description:
          "Tipagem estática para escrever código mais seguro e previsível, aplicada neste portfólio.",
      },
      {
        name: "React",
        level: "conhecimento intermediário",
        description: "Construção de interfaces componentizadas em projetos full stack.",
      },
      {
        name: "Next.js",
        level: "em aprendizado",
        description: "Framework React com App Router, utilizado na construção deste portfólio.",
      },
      {
        name: "Tailwind CSS",
        level: "em aprendizado",
        description: "Estilização utilitária e rápida, aplicada neste portfólio.",
      },
    ],
  },
  {
    category: "Banco de dados",
    items: [
      {
        name: "MySQL",
        level: "conhecimento intermediário",
        description: "Banco relacional utilizado em estudos de modelagem e consultas SQL.",
      },
      {
        name: "MongoDB",
        level: "em aprendizado",
        description: "Banco de documentos NoSQL, explorado em projetos full stack.",
      },
    ],
  },
  {
    category: "Ferramentas e infraestrutura",
    items: [
      {
        name: "Postman",
        level: "experiência prática",
        description: "Testes, validação e documentação de APIs REST durante o desenvolvimento.",
      },
      {
        name: "Insomnia",
        level: "em aprendizado",
        description: "Ferramenta alternativa para testar e explorar APIs REST.",
      },
      {
        name: "Oracle Cloud Infrastructure",
        level: "em aprendizado",
        description: "Nuvem utilizada em estudos de infraestrutura e hospedagem de serviços.",
      },
      {
        name: "Vercel",
        level: "experiência prática",
        description: "Plataforma de deploy para projetos Next.js, incluindo este portfólio.",
      },
    ],
  },
];
