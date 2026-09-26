"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

type ProjectCatalogProps = {
  projects: Project[];
};

const ALL = "Todos";

export function ProjectCatalog({ projects }: ProjectCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const categories = useMemo(
    () => Array.from(new Set(projects.map((project) => project.category))).sort(),
    [projects]
  );

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const project of projects) {
      map.set(project.category, (map.get(project.category) ?? 0) + 1);
    }
    return map;
  }, [projects]);

  const visibleProjects =
    activeCategory === ALL
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const filters = [ALL, ...categories];

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((category) => {
          const isActive = category === activeCategory;
          const count = category === ALL ? projects.length : (counts.get(category) ?? 0);
          const label = `${category} (${count})`;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "cursor-pointer rounded-full border border-border bg-card px-3 py-1 font-mono text-xs transition-colors",
                isActive
                  ? "border-primary text-primary"
                  : "text-secondary hover:border-primary/60 hover:text-primary"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Exibindo {visibleProjects.length} projetos
        {activeCategory === ALL ? "" : ` na categoria ${activeCategory}`}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
