import { personal } from "@/data/personal";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center py-32">
      <div className="px-4 text-center">
        <p className="font-mono text-sm text-primary">{personal.location}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">{personal.name}</h1>
        <p className="mt-2 text-lg text-secondary">{personal.role}</p>
      </div>
    </div>
  );
}
