import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { StackPreview } from "@/components/sections/StackPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedCertifications } from "@/components/sections/FeaturedCertifications";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { GitHubRepos } from "@/components/sections/GitHubRepos";
import { TrajectoryPreview } from "@/components/sections/TrajectoryPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <StackPreview />
      <FeaturedProjects />
      <FeaturedCertifications />
      <GitHubStats />
      <GitHubRepos />
      <TrajectoryPreview />
    </>
  );
}
