import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { StackPreview } from "@/components/sections/StackPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedCertifications } from "@/components/sections/FeaturedCertifications";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <StackPreview />
      <FeaturedProjects />
      <FeaturedCertifications />
    </>
  );
}
