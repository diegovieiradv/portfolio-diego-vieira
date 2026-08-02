# Portfólio — Diego Vieira de Souza

Portfólio profissional de [Diego Vieira de Souza](https://github.com/diegovieiradv), desenvolvedor
Java com foco em back-end e full stack. Construído com **Next.js**, **React**, **TypeScript** e
**Tailwind CSS**, com identidade visual escura e laranja.

## Funcionalidades

- Página inicial com hero, resumo, stack principal, projetos em destaque, certificações e trajetória.
- Páginas de trajetória, experiências, tecnologias, projetos (com páginas individuais), certificações e contato.
- Integração com a API pública do GitHub: estatísticas do perfil e repositórios em destaque.
- Contato direto por e-mail, LinkedIn e WhatsApp (com mensagem pré-preenchida).
- Download de currículo em PDF.
- SEO: metadados, Open Graph, Twitter Card, sitemap e `robots.txt`.
- Acessibilidade: skip link, foco visível, `aria-label`, suporte a `prefers-reduced-motion`.
- Responsivo do mobile ao desktop.

## Stack

- [Next.js](https://nextjs.org) (App Router) — 16
- [React](https://react.dev) — 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) — 4
- [lucide-react](https://lucide.dev) — ícones
- ESLint, Prettier e `tsc` para qualidade de código

## Estrutura

```
src/
├── app/                 # Rotas e páginas (App Router)
│   ├── layout.tsx       # Layout global (navbar, footer, metadados)
│   ├── page.tsx         # Página inicial
│   ├── sobre/           # Trajetória
│   ├── experiencia/     # Experiências profissionais
│   ├── tecnologias/     # Stack
│   ├── projetos/        # Listagem + páginas individuais ([slug])
│   ├── certificacoes/   # Certificações
│   ├── contato/         # Contato, WhatsApp e currículo
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/          # Navbar, Footer, ScrollProgress, BackToTop
│   ├── sections/        # Seções da página inicial
│   ├── shared/          # Ícones e links sociais
│   └── ui/              # Componentes reutilizáveis (cards, botões, timeline)
├── config/              # Configurações do site (nome, URL, SEO)
├── data/                # Dados centralizados (pessoais, projetos, etc.)
├── services/            # Integração com a API do GitHub
├── types/               # Tipos TypeScript
└── lib/                 # Utilitários
public/
├── images/              # Fotos
├── projects/            # Imagens de projetos
├── og/                  # Imagem Open Graph
└── curriculo-*.pdf      # Currículo em PDF
```

## Como rodar

Pré-requisitos: Node.js 20+.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando             | Descrição                   |
| ------------------- | --------------------------- |
| `npm run dev`       | Servidor de desenvolvimento |
| `npm run build`     | Build de produção           |
| `npm start`         | Servidor de produção        |
| `npm run lint`      | ESLint                      |
| `npm run typecheck` | Verificação de tipos        |
| `npm run format`    | Prettier                    |

## Personalizando

Os dados pessoais e do portfólio ficam centralizados em `src/data/`, com placeholders
(`[ADICIONAR ...]`) para você preencher:

- **`src/data/personal.ts`** — nome, e-mail, telefone, WhatsApp, LinkedIn, GitHub e currículo.
- **`src/data/projects.ts`** — projetos, páginas individuais e categorias.
- **`src/data/technologies.ts`** — categorias e níveis da stack.
- **`src/data/certifications.ts`** — certificações (status e link de validação).
- **`src/data/experience.ts`** — experiências profissionais e entregas.

Para ativar as seções do GitHub, substitua `[ADICIONAR GITHUB]` pelo seu usuário (ex.:
`diegovieiradv`). As seções aparecem automaticamente.

## Deploy

Recomendado na [Vercel](https://vercel.com). Importe o repositório e a plataforma detecta o
Next.js automaticamente.

## Licença

Este projeto é de uso pessoal.
