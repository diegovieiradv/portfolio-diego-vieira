import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/projetos",
    "/tecnologias",
    "/certificacoes",
    "/experiencia",
    "/contato",
  ];

  const staticEntries = routes.map<MetadataRoute.Sitemap[number]>((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const projectEntries = projects.map<MetadataRoute.Sitemap[number]>((project) => ({
    url: `${siteConfig.url}/projetos/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...projectEntries];
}
