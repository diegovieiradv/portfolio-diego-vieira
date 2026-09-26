import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/types/project";

type ProjectNavigationProps = {
  currentSlug: string;
  projects: Project[];
};

const zoneClasses =
  "flex min-w-0 items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium transition-colors";

export function ProjectNavigation({ currentSlug, projects }: ProjectNavigationProps) {
  const index = projects.findIndex((project) => project.slug === currentSlug);

  if (index < 0) {
    return null;
  }

  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <nav aria-label="Navegação entre projetos" className="mt-12 border-t border-border pt-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center">
        {prev ? (
          <Link
            href={`/projetos/${prev.slug}`}
            aria-label={`Projeto anterior: ${prev.title}`}
            className={`${zoneClasses} justify-start text-secondary hover:text-primary`}
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="min-w-0 truncate">{prev.title}</span>
          </Link>
        ) : (
          <span aria-disabled="true" className={`${zoneClasses} justify-start text-muted`}>
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="min-w-0 truncate">Início da lista</span>
          </span>
        )}

        <p
          role="status"
          aria-label={`Posição ${index + 1} de ${projects.length} na lista de projetos`}
          className="text-center font-mono text-xs uppercase tracking-widest text-muted"
        >
          {index + 1} de {projects.length}
        </p>

        {next ? (
          <Link
            href={`/projetos/${next.slug}`}
            aria-label={`Próximo projeto: ${next.title}`}
            className={`${zoneClasses} justify-end text-secondary hover:text-primary`}
          >
            <span className="min-w-0 truncate">{next.title}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        ) : (
          <span aria-disabled="true" className={`${zoneClasses} justify-end text-muted`}>
            <span className="min-w-0 truncate">Fim da lista</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </span>
        )}
      </div>
    </nav>
  );
}
