import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ProjectCard({
  project,
  featured = false,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -7,
      }}
      className={`group glass overflow-hidden rounded-3xl ${
        featured
          ? "lg:grid lg:grid-cols-2"
          : ""
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative overflow-hidden bg-zinc-900 ${
          featured
            ? "min-h-[320px] lg:min-h-full"
            : "aspect-video"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Project Content */}
      <div className="flex flex-col justify-center p-6 sm:p-8">
        {/* Featured Badge */}
        {project.featured && (
          <Badge className="mb-4 w-fit border-violet-400/20 bg-violet-500/10 text-violet-300 hover:bg-violet-500/10">
            Featured Project
          </Badge>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map(
            (technology) => (
              <Badge
                key={technology}
                variant="outline"
                className="border-white/10 bg-white/[0.03] text-zinc-400"
              >
                {technology}
              </Badge>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3">
          {/* GitHub */}
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/10 bg-white/5 hover:bg-white/10"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-xs font-bold">
                GH
              </span>

              GitHub
            </a>
          </Button>

          {/* Live Demo */}
          <Button
            asChild
            className="rounded-full bg-white text-black hover:bg-zinc-200"
          >
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;