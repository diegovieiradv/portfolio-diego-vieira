import type { Project } from "@/types/project";

export const statusStyles: Record<Project["status"], string> = {
  concluído: "bg-success/15 text-success",
  "em desenvolvimento": "bg-warning/15 text-warning",
  planejado: "bg-muted/15 text-muted",
};
