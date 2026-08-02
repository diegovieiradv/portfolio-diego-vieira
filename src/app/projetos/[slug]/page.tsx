import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, FolderGit2, MonitorPlay } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

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
  return { title: project.title, description: project.summary };
}

const statusStyles: Record<string, string> = {
  concluído: "bg-success/15 text-success",
  "em desenvolvimento": "bg-warning/15 text-warning",
};

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const sections = [
    {
      title: "Contexto e descrição",
      paragraphs: [project.description],
    },
    {
      title: "Problema",
      paragraphs: [project.problem],
    },
    {
      title: "Solução",
      paragraphs: [project.solution],
    },
    {
      title: "Arquitetura",
      paragraphs: [project.architecture],
    },
  ];

  const infoItems = [
    { label: "Status", value: project.status },
    { label: "Categoria", value: project.category },
    { label: "Data", value: project.date },
    { label: "Função", value: project.role },
  ];

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

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.title}
                  aria-labelledby={`secao-${section.title.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <h2
                    id={`secao-${section.title.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-2xl font-semibold text-foreground"
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-base leading-relaxed text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section aria-labelledby="secao-desafios-tecnicos">
                <h2 id="secao-desafios-tecnicos" className="text-2xl font-semibold text-foreground">
                  Desafios técnicos
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex items-start gap-3 text-base leading-relaxed text-secondary"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="secao-aprendizados">
                <h2 id="secao-aprendizados" className="text-2xl font-semibold text-foreground">
                  Aprendizados
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.learnings.map((learning) => (
                    <li
                      key={learning}
                      className="flex items-start gap-3 text-base leading-relaxed text-secondary"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {learning}
                    </li>
                  ))}
                </ul>
              </section>

              {project.images.length > 1 ? (
                <section aria-labelledby="secao-galeria">
                  <h2 id="secao-galeria" className="text-2xl font-semibold text-foreground">
                    Galeria
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {project.images.map((image, index) => (
                      <div key={image} className="overflow-hidden rounded-xl border border-border">
                        <Image
                          src={image}
                          alt={`Captura de tela ${index + 1} do projeto ${project.title}`}
                          width={600}
                          height={338}
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="aspect-video w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
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

                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
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
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}
