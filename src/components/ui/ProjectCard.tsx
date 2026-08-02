import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, MonitorPlay } from "lucide-react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  concluído: "bg-success/15 text-success",
  "em desenvolvimento": "bg-warning/15 text-warning",
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/60">
      <Link
        href={`/projetos/${project.slug}`}
        className="group relative block aspect-video overflow-hidden border-b border-border"
        aria-label={`Ver detalhes do projeto ${project.title}`}
      >
        <Image
          src={project.images[0] ?? "/projects/placeholder.png"}
          alt={`Imagem do projeto ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide",
            statusStyles[project.status]
          )}
        >
          {project.status}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {project.category} · {project.date}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-foreground">
          <Link href={`/projetos/${project.slug}`} className="transition-colors hover:text-primary">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary line-clamp-2">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-xs text-secondary"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex items-center gap-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              <FolderGit2 className="h-4 w-4" aria-hidden="true" />
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-primary"
              >
                <MonitorPlay className="h-4 w-4" aria-hidden="true" />
                Demo
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </div>
          <Link
            href={`/projetos/${project.slug}`}
            aria-label={`Ver detalhes do projeto ${project.title}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            Detalhes
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
