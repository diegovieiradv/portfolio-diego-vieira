import Image from "next/image";
import { ArrowUpRight, Award, Clock, Sparkles, UserRound } from "lucide-react";
import type { Certification, CertificationStatus } from "@/types/certification";
import { cn } from "@/lib/utils";

const statusStyles: Record<CertificationStatus, string> = {
  concluída: "bg-success/15 text-success",
  "em andamento": "bg-warning/15 text-warning",
};

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border bg-card p-5 transition-colors hover:border-primary/60",
        certification.featured
          ? "border-primary/40 bg-gradient-to-br from-card to-surface"
          : "border-border"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-primary-subtle text-primary">
          {certification.image ? (
            <Image
              src={certification.image}
              alt={`Logo da instituição ${certification.institution ?? ""}`}
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          ) : (
            <Award className="h-5 w-5" aria-hidden="true" />
          )}
        </div>

        <div className="flex flex-col items-end gap-1.5">
          {certification.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary-subtle px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide text-primary">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Destaque
            </span>
          ) : null}
          <span className="inline-flex items-center rounded-full bg-surface-secondary px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide text-secondary">
            {certification.category}
          </span>
        </div>
      </div>

      <h3 className="mt-4 font-semibold leading-snug text-foreground">{certification.title}</h3>

      {certification.institution ? (
        <p className="mt-1 text-sm text-muted">
          {certification.institution}
          {certification.date ? ` · ${certification.date}` : ""}
        </p>
      ) : null}

      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-secondary">
        {certification.area}
      </p>

      {certification.description ? (
        <p className="mt-3 text-sm leading-relaxed text-secondary">{certification.description}</p>
      ) : null}

      {certification.instructor || certification.duration ? (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
          {certification.instructor ? (
            <span className="inline-flex items-center gap-1.5">
              <UserRound className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {certification.instructor}
            </span>
          ) : null}
          {certification.duration ? (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {certification.duration}
            </span>
          ) : null}
        </div>
      ) : null}

      {certification.skills && certification.skills.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-xs text-secondary"
            >
              {skill}
            </li>
          ))}
        </ul>
      ) : null}

      {certification.status || certification.credentialUrl ? (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          {certification.status ? (
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide",
                statusStyles[certification.status]
              )}
            >
              {certification.status}
            </span>
          ) : null}

          {certification.credentialUrl ? (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-primary"
            >
              Ver certificação
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
