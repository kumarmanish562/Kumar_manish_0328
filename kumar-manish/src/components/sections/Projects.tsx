"use client";

// ============================================================
// IMPORTS
// ============================================================

import { motion } from "framer-motion";

import {
  ArrowRight,
  ExternalLink,
  Gamepad2,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";

import { FaGithub} from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ============================================================
// PROJECT DATA
// ============================================================

const projects = [
  {
    id: "01",
    title: "AUTHSphere",
    subtitle: "AUTHENTICATION SYSTEM",
    description:
      "A secure authentication application with modern login, registration, authorization and user-management workflows.",
    status: "COMPLETED",
    level: "LVL_09",
    progress: 95,
    category: "FULL STACK",
    tech: ["React", "Java", "Spring Boot", "SQL"],
    icon: Layers,
    github: "https://github.com",
    live: "#",
  },

  {
    id: "02",
    title: "BUILDfolio",
    subtitle: "PORTFOLIO BUILDER",
    description:
      "A modern portfolio-building platform designed to help developers create and manage professional portfolios.",
    status: "COMPLETED",
    level: "LVL_08",
    progress: 92,
    category: "WEB APP",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    icon: Gamepad2,
    github: "https://github.com",
    live: "#",
  },

  {
    id: "03",
    title: "DocQuery AI",
    subtitle: "AI DOCUMENT ASSISTANT",
    description:
      "An AI-powered document interaction system that allows users to process documents and query their content intelligently.",
    status: "IN DEVELOPMENT",
    level: "LVL_07",
    progress: 78,
    category: "AI SYSTEM",
    tech: ["Java", "Spring Boot", "AI", "PostgreSQL"],
    icon: Zap,
    github: "https://github.com",
    live: "#",
  },

  {
    id: "04",
    title: "Developer Hub",
    subtitle: "PROJECT MANAGEMENT",
    description:
      "A developer-focused workspace for organizing projects, technical resources, tasks and development workflows.",
    status: "ACTIVE",
    level: "LVL_06",
    progress: 70,
    category: "FULL STACK",
    tech: ["React", "Node.js", "SQL", "REST API"],
    icon: Terminal,
    github: "https://github.com",
    live: "#",
  },
];

// ============================================================
// PROJECT COMPONENT
// ============================================================

export default function Project() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* ======================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ======================================================
          GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-[20%] top-[25%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.025] blur-[120px]" />

      {/* ======================================================
          TOP LINE
      ====================================================== */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="mx-auto max-w-[1900px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="relative min-h-[calc(100vh-160px)] overflow-hidden border border-white/10 bg-black/90">

          {/* ==================================================
              CORNERS
          ================================================== */}

          <span className="absolute left-0 top-0 z-30 h-9 w-9 border-l border-t border-cyan-400" />

          <span className="absolute right-0 top-0 z-30 h-9 w-9 border-r border-t border-cyan-400" />

          <span className="absolute bottom-0 left-0 z-30 h-9 w-9 border-b border-l border-cyan-400" />

          <span className="absolute bottom-0 right-0 z-30 h-9 w-9 border-b border-r border-cyan-400" />

          {/* ==================================================
              SYSTEM HEADER
          ================================================== */}

          <div className="absolute left-7 right-7 top-5 z-30 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="font-mono text-xs text-cyan-400">
                &gt;_
              </span>

              <span className="font-mono text-[8px] tracking-[0.2em] text-white/25 sm:text-[9px]">
                LOADING PROJECT DATABASE...
              </span>

              <span className="h-2 w-2 animate-pulse bg-cyan-400" />

            </div>

            <div className="hidden items-center gap-2 md:flex">

              <span className="font-mono text-[8px] tracking-widest text-white/20">
                PROJECTS
              </span>

              <span className="font-mono text-[9px] text-emerald-400">
                ONLINE
              </span>

            </div>

          </div>

          {/* ==================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10 px-7 pb-12 pt-24 sm:px-10 lg:px-12 lg:pb-14 lg:pt-20">

            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

              <div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Badge
                    variant="outline"
                    className="rounded-none border-cyan-400/30 bg-cyan-400/[0.03] px-3 py-1.5 font-mono text-[8px] tracking-[0.2em] text-cyan-400"
                  >
                    <Gamepad2 className="mr-2 h-3 w-3" />

                    PLAYER_01 // PROJECTS
                  </Badge>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.1,
                    duration: 0.5,
                  }}
                  className="mt-4"
                >

                  <p className="font-mono text-[8px] tracking-[0.25em] text-white/20">
                    SELECT_YOUR_MISSION
                  </p>

                  <h2 className="mt-1 font-mono text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">

                    MY{" "}

                    <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                      PROJECTS
                    </span>

                  </h2>

                </motion.div>

              </div>

              {/* Project Counter */}

              <div className="flex items-center gap-4 border border-white/10 bg-white/[0.015] px-4 py-3">

                <div>

                  <p className="font-mono text-[7px] tracking-widest text-white/20">
                    TOTAL_PROJECTS
                  </p>

                  <p className="mt-1 font-mono text-lg font-bold text-cyan-400">
                    {projects.length.toString().padStart(2, "0")}
                  </p>

                </div>

                <div className="h-8 w-px bg-white/10" />

                <div>

                  <p className="font-mono text-[7px] tracking-widest text-white/20">
                    STATUS
                  </p>

                  <p className="mt-1 font-mono text-[9px] text-emerald-400">
                    ACTIVE
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                TERMINAL COMMAND
            ================================================= */}

            <div className="mb-5 flex items-center gap-2 font-mono text-[9px] text-white/20">

              <span className="text-cyan-400">
                &gt;
              </span>

              <span>
                projects{" "}
                <span className="text-cyan-400">
                  --load-all
                </span>
              </span>

              <span className="h-3 w-[5px] animate-pulse bg-cyan-400" />

            </div>

            {/* =================================================
                PROJECT GRID
            ================================================= */}

            <div className="grid gap-3 md:grid-cols-2">

              {projects.map((project, index) => {

                const Icon = project.icon;

                return (
                  <motion.article
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    className="group relative overflow-hidden border border-white/10 bg-black/70 p-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.018]"
                  >

                    {/* =================================================
                        PROJECT TOP
                    ================================================= */}

                    <div className="flex items-start justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center border border-cyan-400/20 bg-cyan-400/[0.025]">

                          <Icon className="h-5 w-5 text-cyan-400/70 transition group-hover:text-cyan-400" />

                        </div>

                        <div>

                          <p className="font-mono text-[7px] tracking-[0.2em] text-white/20">
                            PROJECT_{project.id}
                          </p>

                          <h3 className="mt-0.5 font-mono text-base font-bold tracking-wide text-white sm:text-lg">
                            {project.title}
                          </h3>

                        </div>

                      </div>

                      {/* Level */}

                      <span className="border border-white/10 px-2 py-1 font-mono text-[7px] text-cyan-400/70">
                        {project.level}
                      </span>

                    </div>

                    {/* =================================================
                        SUBTITLE
                    ================================================= */}

                    <div className="mt-3 flex items-center gap-2">

                      <span className="h-1.5 w-1.5 animate-pulse bg-emerald-400" />

                      <span className="font-mono text-[7px] tracking-[0.15em] text-emerald-400">
                        {project.status}
                      </span>

                      <span className="text-white/10">
                        //
                      </span>

                      <span className="font-mono text-[7px] tracking-widest text-white/20">
                        {project.category}
                      </span>

                    </div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p className="mt-3 min-h-[42px] font-mono text-[9px] leading-5 text-white/35 sm:text-[10px]">
                      {project.description}
                    </p>

                    {/* =================================================
                        TECH STACK
                    ================================================= */}

                    <div className="mt-3 flex flex-wrap gap-1.5">

                      {project.tech.map((tech) => (

                        <span
                          key={tech}
                          className="border border-white/10 px-2 py-1 font-mono text-[7px] tracking-wider text-white/30 transition group-hover:border-cyan-400/20 group-hover:text-white/50"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    {/* =================================================
                        XP / PROGRESS
                    ================================================= */}

                    <div className="mt-4">

                      <div className="mb-1 flex items-center justify-between">

                        <span className="font-mono text-[7px] tracking-widest text-white/20">
                          BUILD_PROGRESS
                        </span>

                        <span className="font-mono text-[7px] text-cyan-400">
                          {project.progress}%
                        </span>

                      </div>

                      <div className="h-1 bg-white/5">

                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${project.progress}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: 0.3 + index * 0.08,
                            duration: 0.8,
                          }}
                          className="h-full bg-cyan-400"
                        />

                      </div>

                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================= */}

                    <div className="mt-4 flex gap-2">

                      <Button
                        asChild
                        className="h-8 rounded-none border border-cyan-400/40 bg-cyan-400/[0.025] px-3 font-mono text-[7px] tracking-widest text-cyan-400 shadow-none hover:bg-cyan-400 hover:text-black"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />

                          LIVE DEMO

                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="h-8 rounded-none border-white/10 bg-transparent px-3 font-mono text-[7px] tracking-widest text-white/35 hover:border-white/30 hover:bg-white/[0.03] hover:text-white"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="mr-2 h-3 w-3" />

                          SOURCE

                        </a>
                      </Button>

                    </div>

                    {/* =================================================
                        CORNER
                    ================================================= */}

                    <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-cyan-400/30 opacity-0 transition group-hover:opacity-100" />

                  </motion.article>
                );

              })}

            </div>

            {/* =================================================
                BOTTOM STATUS
            ================================================= */}

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="font-mono text-[7px] tracking-[0.2em] text-emerald-400">
                  PROJECT_DATABASE ONLINE
                </span>

              </div>

              <div className="hidden items-center gap-2 sm:flex">

                <span className="font-mono text-[7px] text-white/15">
                  PRESS
                </span>

                <span className="border border-white/10 px-2 py-1 font-mono text-[7px] text-white/25">
                  ENTER
                </span>

                <span className="font-mono text-[7px] text-white/15">
                  TO EXPLORE
                </span>

              </div>

            </div>

          </div>

          {/* ==================================================
              BOTTOM CENTER DECORATION
          ================================================== */}

          <div className="absolute bottom-0 left-1/2 h-3 w-20 -translate-x-1/2 border-x border-cyan-400/50">

            <div className="mx-auto mt-2 h-px w-8 bg-cyan-400" />

          </div>

        </div>

      </div>

    </section>
  );
}