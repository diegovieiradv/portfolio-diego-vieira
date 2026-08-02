"use client";

import { useState } from "react";
import type { Certification } from "@/types/certification";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { cn } from "@/lib/utils";

type FilterOption = {
  id: string;
  label: string;
  categories: Certification["category"][] | null;
};

const filterOptions: FilterOption[] = [
  { id: "todos", label: "Todos", categories: null },
  { id: "certificacoes", label: "Certificações", categories: ["certificação"] },
  { id: "formacoes", label: "Formações", categories: ["formação", "imersão", "programa"] },
  { id: "cursos", label: "Cursos", categories: ["curso"] },
  { id: "graduacao", label: "Graduação", categories: ["graduação"] },
];

type CertificationsListProps = {
  certifications: Certification[];
};

export function CertificationsList({ certifications }: CertificationsListProps) {
  const [activeFilter, setActiveFilter] = useState("todos");

  const active = filterOptions.find((option) => option.id === activeFilter) ?? filterOptions[0];

  const visible =
    active.categories === null
      ? certifications
      : certifications.filter((certification) =>
          active.categories!.includes(certification.category)
        );

  return (
    <>
      <div
        role="group"
        aria-label="Filtrar certificações e formações"
        className="flex flex-wrap gap-2"
      >
        {filterOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={activeFilter === option.id}
            onClick={() => setActiveFilter(option.id)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-xs font-medium uppercase tracking-wide transition-colors focus-visible:outline-none",
              activeFilter === option.id
                ? "border-primary bg-primary text-white"
                : "border-border bg-card text-secondary hover:border-primary/50 hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        Mostrando {visible.length} de {certifications.length}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </>
  );
}
