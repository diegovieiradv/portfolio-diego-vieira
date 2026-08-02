import type { ReactNode } from "react";

export type TimelineItem = {
  title: string;
  description?: string;
  date?: string;
};

type TimelineProps = {
  items: TimelineItem[];
  marker?: ReactNode;
};

export function Timeline({ items, marker }: TimelineProps) {
  return (
    <ol className="relative border-l border-border pl-6">
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className="relative pb-10 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[12px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>

          {item.date ? (
            <p className="font-mono text-xs uppercase tracking-widest text-primary">{item.date}</p>
          ) : null}

          <h3 className="mt-1 font-semibold text-foreground">
            {marker ? <span className="mr-2 text-primary">{marker}</span> : null}
            {item.title}
          </h3>

          {item.description ? (
            <p className="mt-1.5 text-sm leading-relaxed text-secondary">{item.description}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
