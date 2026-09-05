import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Voll.med API",
    slug: "voll-med-api",
    summary:
      "API RESTful para gerenciamento de clínica médica com autenticação JWT, validações customizadas e regras de negócio.",
    description:
      "API completa para clínica médica desenvolvida durante o Oracle Next Education (ONE) da Alura. O sistema permite gerenciar médicos, pacientes e consultas com autenticação JWT, validações customizadas (CPF, CEP) e regras de negócio como agendamento e cancelamento de consultas.",
    problem:
      "Necessidade de uma API robusta para gerenciar operações de clínica médica, com controle de acesso, validação de dados e regras de negócio específicas do domínio.",
    solution:
      "API RESTful com Spring Boot, Spring Security JWT, Flyway para migrations, validações customizadas e integração com ViaCEP para consulta de endereços.",
    technologies: [
      "Java 17",
      "Spring Boot 3.2.5",
      "Spring Security",
      "JWT",
      "MySQL",
      "Flyway",
      "SpringDoc OpenAPI",
      "Maven",
    ],
    architecture:
      "Arquitetura em camadas com separação de domínio e infraestrutura, utilizando DTOs, Services, Repositories e Spring Data JPA.",
    challenges: [
      "Implementação de autenticação JWT com refresh token e expiração de 2 horas.",
      "Criação de validações customizadas para CPF e CEP utilizando Jakarta Bean Validation.",
      "Implementação de regras de negócio para agendamento (horário comercial, antecedência mínima).",
    ],
    learnings: [
      "Arquitetura limpa com separação de domínio e infraestrutura.",
      "Autenticação e autorização com Spring Security e JWT.",
      "Migrations com Flyway para versionamento do banco de dados.",
      "Documentação automática com SpringDoc OpenAPI.",
    ],
    status: "concluído",
    role: "Desenvolvedor Back-end",
    github: "https://github.com/diegovieiradv/project-api",
    images: ["/projects/voll-med-api.png"],
    date: "Dez/2025",
    featured: true,
    category: "Back-end",
  },
  {
    title: "Astra Artillery",
    slug: "astra-artillery",
    summary:
      "Jogo web de artilharia 2D em turnos com Next.js 15, Phaser 3 e TypeScript, incluindo 246 testes unitários.",
    description:
      "Jogo web original de artilharia 2D inspirado em DDTank, Worms e Gunbound. Desenvolvido com Next.js 15 (App Router), React 18, TypeScript 5 e Phaser 3.88. Possui 8 personagens, 24 estágios, 6 chefes, IA com 3 níveis de dificuldade, terreno destrutível, habilidades especiais e sistema de save/export/import.",
    problem:
      "Criar um jogo web completo e acessível que funcione em desktop e mobile, com jogabilidade estratégica, física arcade e sistema de progressão.",
    solution:
      "Arquitetura com Next.js 15 para SSR/SSG, Phaser 3 para o engine de jogo, Zustand para estado global, sistema de PWA para instalação offline e suporte a gamepad.",
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript 5",
      "Phaser 3.88",
      "Zustand 5",
      "Tailwind CSS 3.4",
      "Vitest 2",
      "Playwright 1.47",
      "PWA",
    ],
    architecture:
      "Arquitetura modular com App Router, componentes React para UI, scenes Phaser para gameplay, e Zustand para estado global compartilhado.",
    challenges: [
      "Integração entre React (UI) e Phaser (game engine) com sincronização de estado.",
      "Implementação de terreno destrutível com deformação dinâmica.",
      "Sistema de IA com 3 níveis de dificuldade e comportamento estratégico.",
      "Acessibilidade: alto contraste, texto grande, redução de movimento.",
    ],
    learnings: [
      "Desenvolvimento de jogos web com Phaser 3 e TypeScript.",
      "Arquitetura de aplicações híbridas (React + game engine).",
      "Testes unitários (246 testes) e E2E com Vitest e Playwright.",
      "PWA e suporte a gamepad para experiências cross-platform.",
    ],
    status: "em desenvolvimento",
    role: "Desenvolvedor Full Stack",
    github: "https://github.com/diegovieiradv/astra-artillery",
    demo: "https://astra-artillery.vercel.app",
    images: ["/projects/astra-artillery.png"],
    date: "Ago/2026",
    featured: true,
    category: "Full stack",
  },
  {
    title: "Voll.med Frontend",
    slug: "voll-med-frontend",
    summary:
      "Frontend em React para a API Voll.med, com interface responsiva para gerenciamento de médicos e pacientes.",
    description:
      "Aplicação frontend desenvolvida em React para consumir a API Voll.med. Interface responsiva para gerenciamento de médicos, pacientes e consultas, com autenticação JWT e rotas protegidas.",
    problem:
      "Necessidade de uma interface web intuitiva para interagir com a API Voll.med, permitindo que usuários gestionem operações de clínica médica de forma visual.",
    solution:
      "Aplicação React com rotas protegidas, formulários validados, integração com a API backend e design responsivo.",
    technologies: ["React", "JavaScript", "CSS", "REST API"],
    architecture:
      "Aplicação SPA com componentização, rotas protegidas e consumo de API RESTful.",
    challenges: [
      "Integração autenticada com a API backend via JWT.",
      "Formulários com validação de entrada em tempo real.",
      "Design responsivo para diferentes dispositivos.",
    ],
    learnings: [
      "Consumo de APIs REST autenticadas no frontend.",
      "Gerenciamento de estado em aplicações React.",
      "Componentização e reutilização de código.",
    ],
    status: "em desenvolvimento",
    role: "Desenvolvedor Full Stack",
    github: "https://github.com/diegovieiradv/project-api-med-fisio-web",
    images: ["/projects/voll-med-frontend.png"],
    date: "Jul/2026",
    featured: true,
    category: "Full stack",
  },
  {
    title: "ScreenMatch Frases",
    slug: "screenmatch-frases",
    summary:
      "API Spring Boot para frases de séries e filmes, com integração PostgreSQL e endpoints para consumo de frontend.",
    description:
      "API RESTful desenvolvida com Spring Boot para servir frases aleatórias de séries e filmes. O backend fornece dados como título, frase, personagem e URL do poster para um frontend de exibição.",
    problem:
      "Criar uma API que sirva dados de frases de séries e filmes para um frontend de exibição, com CORS configurado para integração.",
    solution:
      "API Spring Boot com Spring Data JPA, PostgreSQL e endpoint único que retorna frases aleatórias com dados completos.",
    technologies: ["Java 17", "Spring Boot 3.2.3", "Spring Data JPA", "PostgreSQL", "Maven"],
    architecture:
      "API simples com um endpoint REST, camada de persistência com Spring Data JPA e banco PostgreSQL.",
    challenges: [
      "Configuração de CORS para integração com frontend.",
      "Modelagem de dados para séries, frases e personagens.",
      "Implementação de endpoint para seleção aleatória.",
    ],
    learnings: [
      "Configuração de CORS em APIs Spring Boot.",
      "Integração backend-frontend em projetos full stack.",
      "Uso de PostgreSQL em projetos de médio porte.",
    ],
    status: "concluído",
    role: "Desenvolvedor Back-end",
    github: "https://github.com/diegovieiradv/project-frases-series-filmes",
    images: ["/projects/screenmatch-frases.png"],
    date: "Jul/2026",
    featured: true,
    category: "Back-end",
  },
  {
    title: "Alurabooks API",
    slug: "alurabooks-api",
    summary:
      "API Node.js com autenticação JWT e rotas protegidas para catálogo de livros, usando json-server.",
    description:
      "API desenvolvida com Node.js e json-server para simular um catálogo de livros com autenticação JWT. Inclui rotas protegidas para livros, autores, categorias, lançamentos e bestsellers.",
    problem:
      "Criar uma API mockada com autenticação real para estudar rotas protegidas e JWT em Node.js.",
    solution:
      "API com json-server para dados, jsonwebtoken para autenticação JWT e body-parser para processamento de requisições.",
    technologies: ["Node.js", "json-server", "jsonwebtoken", "body-parser", "REST API"],
    architecture:
      "API mockada com json-server como banco de dados em memória, middleware de autenticação JWT e rotas organizadas por recurso.",
    challenges: [
      "Implementação de autenticação JWT com registro e login.",
      "Proteção de rotas com verificação de token.",
      "Organização de endpoints para múltiplos recursos.",
    ],
    learnings: [
      "Autenticação JWT em APIs Node.js.",
      "Proteção de rotas com middleware.",
      "Uso de json-server para prototipagem rápida.",
    ],
    status: "concluído",
    role: "Desenvolvedor Back-end",
    github: "https://github.com/diegovieiradv/project-api-alurabooks",
    images: ["/projects/alurabooks-api.png"],
    date: "Jul/2026",
    featured: false,
    category: "Back-end",
  },
  {
    title: "NLW Sports IA",
    slug: "nlw-sports-ia",
    summary:
      "Assistente de gaming com IA (Gemini) para 8 jogos, com interface glass morphism e deploy na Vercel.",
    description:
      "Assistente de meta para gamers desenvolvido durante o NLW Sports da Rocketseat. Utiliza a API do Google Gemini para gerar estratégias, builds e dicas para 8 jogos: Warframe, Valorant, LoL, CS:GO, Dota 2, Overwatch, PUBG e Apex Legends.",
    problem:
      "Criar um assistente de IA acessível que ajude jogadores a encontrar estratégias e builds para seus jogos favoritos.",
    solution:
      "Interface web com HTML/CSS/JS que consome a API do Google Gemini, com design glass morphism, responsivo e deploy na Vercel.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Google Gemini API", "Showdown.js", "Vercel"],
    architecture:
      "Aplicação frontend estática com consumo de API externa (Gemini), markdown renderizado com Showdown.js e deploy estático.",
    challenges: [
      "Integração com a API do Google Gemini para geração de conteúdo.",
      "Design glass morphism com gradientes e efeitos de brilho.",
      "Responsividade para desktop e mobile.",
    ],
    learnings: [
      "Integração com APIs de Inteligência Artificial.",
      "Design moderno com glass morphism e gradientes.",
      "Deploy de aplicações estáticas na Vercel.",
    ],
    status: "concluído",
    role: "Desenvolvedor Front-end",
    github: "https://github.com/diegovieiradv/project-nlw-sports-ia",
    demo: "https://project-nlw-sports-ia.vercel.app",
    images: ["/projects/nlw-sports-ia.png"],
    date: "Jul/2025",
    featured: true,
    category: "Front-end",
  },
  {
    title: "Busca CEP",
    slug: "busca-cep",
    summary:
      "Aplicação Java para consulta de endereços via API ViaCEP, com exportação de dados para JSON.",
    description:
      "Aplicação console em Java para consulta de endereços a partir de CEP utilizando a API ViaCEP. Demonstra uso de records, HttpClient e serialização JSON com Gson.",
    problem:
      "Criar uma ferramenta simples para consultar endereços por CEP e exportar os dados formatados.",
    solution:
      "Aplicação Java que consome a API ViaCEP via HttpClient, utiliza records para modelagem de dados e Gson para serialização JSON.",
    technologies: ["Java 16+", "HttpClient", "Gson", "ViaCEP API"],
    architecture:
      "Aplicação console com modelo de dados baseado em records, consumo de API REST externa e exportação de dados.",
    challenges: [
      "Uso de Java Records para modelagem imutável de dados.",
      "Consumo de API externa com HttpClient nativo do Java.",
      "Serialização e desserialização de JSON com Gson.",
    ],
    learnings: [
      "Java Records e suas vantagens sobre classes tradicionais.",
      "HttpClient nativo do Java 11+.",
      "Integração com APIs REST externas.",
    ],
    status: "concluído",
    role: "Desenvolvedor Back-end",
    github: "https://github.com/diegovieiradv/project-busca-cep",
    images: ["/projects/busca-cep.png"],
    date: "Nov/2025",
    featured: false,
    category: "Back-end",
  },
  {
    title: "Clone Instagram",
    slug: "clone-instagram",
    summary:
      "Recriação da página de login do Instagram com HTML, CSS e JavaScript, deploy na Vercel.",
    description:
      "Clone fiel da página de login do Instagram, desenvolvido com HTML5 semântico, CSS3 (Flexbox, Media Queries) e JavaScript para animações. Inclui layout responsivo e seção de preview do app mobile.",
    problem:
      "Praticar habilidades de frontend recriando uma interface real e popular para estudar layouts responsivos.",
    solution:
      "Página estática com HTML semântico, CSS Flexbox para layout, media queries para responsividade e JavaScript para animação de imagens.",
    technologies: ["HTML5", "CSS3", "Flexbox", "Media Queries", "JavaScript", "Vercel"],
    architecture:
      "Página estática com estrutura semântica, layout Flexbox responsivo e animações CSS/JavaScript.",
    challenges: [
      "Recriação fiel do design original do Instagram.",
      "Layout responsivo para múltiplos tamanhos de tela.",
      "Animação de rotação automática de imagens.",
    ],
    learnings: [
      "HTML semântico e acessibilidade.",
      "CSS Flexbox e Media Queries para responsividade.",
      "Animações CSS e JavaScript.",
    ],
    status: "concluído",
    role: "Desenvolvedor Front-end",
    github: "https://github.com/diegovieiradv/project-instagram",
    demo: "https://project-instagram-blond.vercel.app",
    images: ["/projects/clone-instagram.png"],
    date: "Fev/2025",
    featured: false,
    category: "Front-end",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit?: number): Project[] {
  const featured = projects.filter((project) => project.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getProjectCategories(): string[] {
  return Array.from(new Set(projects.map((project) => project.category))).sort();
}
