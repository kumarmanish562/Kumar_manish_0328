import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="section-padding"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="A selection of projects that showcase my experience across frontend, backend, cloud and AI."
        />

        {featuredProject && (
          <ProjectCard
            project={featuredProject}
            featured
          />
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;