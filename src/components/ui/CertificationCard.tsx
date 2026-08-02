import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import type { Certification } from "@/types/certification";
import { cn } from "@/lib/utils";

const statusStyles: Record<Certification["status"], string> = {
  concluída: "bg-success/15 text-success",
  "em andamento": "bg-warning/15 text-warning",
};

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/60">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-primary-subtle text-primary">
          {certification.image ? (
            <Image
              src={certification.image}
              alt={`Logo da instituição ${certification.institution}`}
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          ) : (
            <Award className="h-5 w-5" aria-hidden="true" />
          )}
        </div>
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide",
            statusStyles[certification.status]
          )}
        >
          {certification.status}
        </span>
      </div>

      <h3 className="mt-4 font-semibold leading-snug text-foreground">{certification.title}</h3>
      <p className="mt-1 text-sm text-muted">
        {certification.institution} · {certification.date}
      </p>

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

      {certification.link ? (
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-primary"
        >
          Ver certificação
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}
