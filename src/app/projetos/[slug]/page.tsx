import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, FolderGit2, MonitorPlay } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import type { Project } from "@/types/project";
import { Container } from "@/components/ui/Container";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { ProjectNavigation } from "@/components/ui/ProjectNavigation";
import { statusStyles } from "@/lib/project-status";
import { cn } from "@/lib/utils";

function sectionId(title: string): string {
  const slug = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `secao-${slug}`;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Projeto não encontrado" };
  }

  const imageUrl = project.images[0] ?? "/projects/placeholder.png";
  const image = {
    url: imageUrl,
    width: 1200,
    height: 630,
    alt: `Imagem do projeto ${project.title}`,
  };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      type: "website",
      title: project.title,
      description: project.summary,
      url: `/projetos/${project.slug}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [imageUrl],
    },
  };
}

type ContentSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  groups?: NonNullable<Project["technologyGroups"]>;
  note?: string;
  preserveWhitespace?: boolean;
};

const bulletItemClass = "flex items-start gap-3 text-base leading-relaxed text-secondary";

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const sections: ContentSection[] = [
    {
      title: "Sobre o projeto",
      paragraphs: project.description.split("\n\n").filter(Boolean),
    },
    ...(project.problem
      ? [{ title: "Problema", paragraphs: project.problem.split("\n\n").filter(Boolean) }]
      : []),
    ...(project.solution
      ? [{ title: "Solução", paragraphs: project.solution.split("\n\n").filter(Boolean) }]
      : []),
    ...(project.audience ? [{ title: "Para quem é", paragraphs: [project.audience] }] : []),
    ...(project.features?.length
      ? [
          {
            title: "Funcionalidades",
            list: project.features,
            ...(project.status === "planejado"
              ? {
                  note: "Funcionalidades planejadas: ainda não foram implementadas.",
                }
              : {}),
          },
        ]
      : []),
    ...(project.benefits?.length
      ? [{ title: "Benefícios e diferenciais", list: project.benefits }]
      : []),
    ...(project.architecture
      ? [
          {
            title: "Arquitetura",
            paragraphs: project.architecture.split("\n\n").filter(Boolean),
            preserveWhitespace: true,
          },
        ]
      : []),
    ...(project.technologyGroups?.length
      ? [
          {
            title: "Tecnologias",
            groups: project.technologyGroups,
            note: project.technologyGroupsNote,
          },
        ]
      : []),
    ...(project.security?.length ? [{ title: "Segurança", list: project.security }] : []),
    ...(project.highlights?.length
      ? [{ title: "Destaques técnicos", list: project.highlights }]
      : []),
    ...(project.tests?.length ? [{ title: "Testes automatizados", list: project.tests }] : []),
    ...(project.statusDetails?.length
      ? [{ title: "Status do projeto", list: project.statusDetails }]
      : []),
    ...(project.challenges?.length
      ? [{ title: "Desafios técnicos", list: project.challenges }]
      : []),
    ...(project.learnings?.length ? [{ title: "Aprendizados", list: project.learnings }] : []),
    ...(project.roadmap?.length
      ? [
          {
            title: "Roadmap",
            list: project.roadmap,
            ...(project.status === "planejado"
              ? {
                  note: "Conteúdo planejado: estas etapas ainda não foram implementadas.",
                }
              : {}),
          },
        ]
      : []),
  ];

  const infoItems = [
    { label: "Status", value: project.status },
    { label: "Categoria", value: project.category },
    { label: "Data", value: project.date },
    { label: "Função", value: project.role },
  ].filter((item) => Boolean(item.value));

  const hasLinks = Boolean(project.github) || Boolean(project.demo);

  return (
    <>
      <section className="border-b border-border bg-surface py-14 sm:py-16">
        <Container>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para projetos
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide",
                statusStyles[project.status]
              )}
            >
              {project.status}
            </span>
          </div>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">{project.summary}</p>
        </Container>
      </section>

      <div className="py-14 sm:py-16">
        <Container>
          {project.images.length > 1 ? (
            <ProjectGallery
              images={project.images}
              captions={project.imageCaptions}
              projectName={project.title}
            />
          ) : (
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src={project.images[0] ?? "/projects/placeholder.png"}
                alt={`Imagem principal do projeto ${project.title}`}
                width={1200}
                height={675}
                sizes="(max-width: 1024px) 100vw, 1152px"
                loading="eager"
                className="aspect-video w-full object-cover"
              />
            </div>
          )}

          <ProjectNavigation currentSlug={project.slug} projects={projects} />

          {project.status === "planejado" ? (
            <aside
              role="note"
              className="mt-6 rounded-xl border border-border bg-card px-5 py-4 text-sm leading-relaxed text-secondary"
            >
              Projeto em planejamento. As informações abaixo descrevem o conceito previsto;
              funcionalidades, tecnologias e links serão adicionados conforme a implementação
              avançar.
            </aside>
          ) : null}

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.title} aria-labelledby={sectionId(section.title)}>
                  <h2
                    id={sectionId(section.title)}
                    className="text-2xl font-semibold text-foreground"
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={cn(
                        "mt-3 text-base leading-relaxed text-secondary",
                        section.preserveWhitespace && "whitespace-pre-line"
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="mt-4 space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className={bulletItemClass}>
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.groups?.length ? (
                    <div className="mt-5 space-y-5">
                      {section.groups.map((group) => (
                        <div key={group.label}>
                          <p className="font-mono text-xs uppercase tracking-widest text-muted">
                            {group.label}
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-xs text-secondary"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {section.note ? <p className="mt-3 text-sm text-muted">{section.note}</p> : null}
                </section>
              ))}
            </div>

            <aside aria-label="Informações do projeto">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground">Informações</h2>

                <dl className="mt-5 space-y-4">
                  {infoItems.map((item) => (
                    <div key={item.label}>
                      <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-foreground">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                {project.technologies.length > 0 ? (
                  <div className="mt-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">
                      Tecnologias
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-xs text-secondary"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.plannedTechnologies?.length ? (
                  <div className="mt-6">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">
                      Tecnologias <span className="text-primary">planejadas</span>
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.plannedTechnologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-dashed border-border bg-surface px-2 py-0.5 font-mono text-xs text-secondary"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {hasLinks ? (
                  <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-amber-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:from-primary-dark hover:to-primary"
                      >
                        <FolderGit2 className="h-4 w-4" aria-hidden="true" />
                        Ver no GitHub
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <MonitorPlay className="h-4 w-4" aria-hidden="true" />
                        Ver demonstração
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}
