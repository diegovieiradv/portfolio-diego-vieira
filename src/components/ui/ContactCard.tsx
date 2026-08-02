import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight } from "lucide-react";

type ContactCardProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  value: string;
  description: string;
  href?: string;
};

export function ContactCard({ icon: Icon, title, value, description, href }: ContactCardProps) {
  const Content = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-subtle">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </span>
      <h2 className="mt-4 text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-1 font-mono text-sm text-primary">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-secondary">{description}</p>
      {href ? (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          Acessar
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      ) : null}
    </>
  );

  const className =
    "group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {Content}
      </a>
    );
  }

  return <div className={className}>{Content}</div>;
}
