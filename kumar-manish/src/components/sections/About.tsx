"use client";

// ============================================================
// IMPORTS
// ============================================================

import { motion } from "framer-motion";

import {
  ArrowRight,
  Braces,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ============================================================
// REQUIREMENTS
// ============================================================

const requirements = [
  {
    title: "PROBLEM_SOLVING",
    value: "99%",
    icon: Cpu,
  },
  {
    title: "CLEAN_CODE",
    value: "95%",
    icon: Code2,
  },
  {
    title: "UI / UX",
    value: "92%",
    icon: Layers,
  },
  {
    title: "SYSTEM_DESIGN",
    value: "90%",
    icon: Database,
  },
];

// ============================================================
// TECHNICAL MODULES
// ============================================================

const modules = [
  {
    name: "FRONTEND",
    tech: "React / TypeScript",
    icon: Code2,
  },
  {
    name: "BACKEND",
    tech: "Node.js / Java",
    icon: Terminal,
  },
  {
    name: "DATABASE",
    tech: "SQL / MongoDB",
    icon: Database,
  },
  {
    name: "AI SYSTEM",
    tech: "AI / APIs",
    icon: Zap,
  },
];

// ============================================================
// ABOUT COMPONENT
// ============================================================

export default function About() {
  return (
    <section
      id="about"
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

      <div className="pointer-events-none absolute left-[15%] top-[30%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.035] blur-[110px]" />

      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-fuchsia-500/[0.025] blur-[110px]" />

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
              CORNER DECORATIONS
          ================================================== */}

          <span className="absolute left-0 top-0 z-30 h-9 w-9 border-l border-t border-cyan-400" />

          <span className="absolute right-0 top-0 z-30 h-9 w-9 border-r border-t border-cyan-400" />

          <span className="absolute bottom-0 left-0 z-30 h-9 w-9 border-b border-l border-cyan-400" />

          <span className="absolute bottom-0 right-0 z-30 h-9 w-9 border-b border-r border-cyan-400" />

          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="absolute left-7 right-7 top-5 z-30 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="font-mono text-xs text-cyan-400">
                &gt;_
              </span>

              <span className="font-mono text-[8px] tracking-[0.2em] text-white/25">
                LOADING ABOUT MODULE...
              </span>

              <span className="h-2 w-2 animate-pulse bg-cyan-400" />

            </div>

            <div className="hidden items-center gap-2 md:flex">

              <span className="font-mono text-[8px] tracking-widest text-white/20">
                MODULE
              </span>

              <span className="font-mono text-[9px] text-cyan-400">
                ABOUT_01
              </span>

            </div>

          </div>

          {/* ==================================================
              MAIN GRID
          ================================================== */}

          <div className="grid min-h-[calc(100vh-160px)] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="relative z-20 flex flex-col justify-center px-7 pb-12 pt-24 sm:px-10 lg:px-14 lg:pb-16 lg:pt-20">

              {/* Section Badge */}

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

                  PLAYER_PROFILE // ABOUT
                </Badge>
              </motion.div>

              {/* Title */}

              <motion.div
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
                  delay: 0.1,
                  duration: 0.5,
                }}
                className="mt-5"
              >

                <p className="font-mono text-[9px] tracking-[0.25em] text-white/25">
                  WHO_IS_MANISH?
                </p>

                <h2 className="mt-1 font-mono text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">

                  ABOUT{" "}

                  <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    ME
                  </span>

                </h2>

              </motion.div>

              {/* Description */}

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
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="mt-5 max-w-[620px]"
              >

                <p className="font-mono text-[11px] leading-6 text-white/45 sm:text-xs sm:leading-7">
                  I'm a Full Stack Developer focused on building modern,
                  scalable and user-friendly digital experiences. I enjoy
                  transforming ideas into functional applications using
                  clean architecture, modern technologies and creative UI.
                </p>

                <p className="mt-3 font-mono text-[11px] leading-6 text-white/30 sm:text-xs sm:leading-7">
                  My development journey combines frontend engineering,
                  backend systems, databases and AI-powered solutions.
                  I continuously explore new technologies and improve
                  my problem-solving skills through real-world projects.
                </p>

              </motion.div>

              {/* Terminal */}

              <div className="mt-4 flex items-center gap-2 font-mono text-[9px] text-white/20">

                <span className="text-cyan-400">
                  &gt;
                </span>

                <span>
                  cat{" "}
                  <span className="text-cyan-400">
                    developer_profile.json
                  </span>
                </span>

                <span className="h-3 w-[5px] animate-pulse bg-cyan-400" />

              </div>

              {/* =================================================
                  MODULES
              ================================================= */}

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">

                {modules.map((module, index) => {

                  const Icon = module.icon;

                  return (
                    <motion.div
                      key={module.name}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.1 + index * 0.08,
                      }}
                      className="group border border-white/10 bg-white/[0.015] p-3 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/[0.025]"
                    >

                      <Icon className="h-4 w-4 text-white/25 transition group-hover:text-cyan-400" />

                      <p className="mt-2 font-mono text-[8px] font-bold tracking-widest text-white/50 group-hover:text-cyan-400">
                        {module.name}
                      </p>

                      <p className="mt-1 font-mono text-[7px] text-white/20">
                        {module.tech}
                      </p>

                    </motion.div>
                  );

                })}

              </div>

              {/* Button */}

              <div className="mt-5">

                <Button
                  asChild
                  className="group h-10 rounded-none border border-cyan-400 bg-cyan-400/[0.03] px-5 font-mono text-[9px] tracking-[0.15em] text-cyan-400 shadow-none hover:bg-cyan-400 hover:text-black"
                >
                  <a href="#projects">

                    EXPLORE MY WORK

                    <ArrowRight className="ml-3 h-3 w-3 transition-transform group-hover:translate-x-1" />

                  </a>
                </Button>

              </div>

            </div>

            {/* =================================================
                RIGHT REQUIREMENTS
            ================================================= */}

            <div className="relative flex items-center justify-center px-7 pb-14 pt-8 sm:px-10 lg:px-12 lg:pb-10 lg:pt-10">

              {/* =================================================
                  BACKGROUND TERMINAL
              ================================================= */}

              <div className="absolute right-8 top-28 hidden font-mono text-[8px] leading-7 text-cyan-400/15 xl:block">

                <p>
                  &lt;player&gt;
                </p>

                <p className="pl-3">
                  skill_level: HIGH
                </p>

                <p className="pl-3">
                  mode: BUILD
                </p>

                <p className="pl-3">
                  status: ACTIVE
                </p>

                <p>
                  &lt;/player&gt;
                </p>

              </div>

              {/* =================================================
                  REQUIREMENTS PANEL
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="relative z-10 w-full max-w-[500px] border border-cyan-400/25 bg-black/80 p-4 shadow-[0_0_35px_rgba(34,211,238,0.05)] sm:p-5"
              >

                {/* Panel Header */}

                <div className="flex items-center justify-between border-b border-white/10 pb-3">

                  <div className="flex items-center gap-2">

                    <Terminal className="h-4 w-4 text-cyan-400" />

                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-cyan-400">
                      SYSTEM_REQUIREMENTS
                    </span>

                  </div>

                  <span className="font-mono text-[8px] text-emerald-400">
                    PASSED
                  </span>

                </div>

                {/* Requirements */}

                <div className="mt-3 space-y-2">

                  {requirements.map((item, index) => {

                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          x: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.15 + index * 0.08,
                        }}
                        className="group border border-white/10 p-3 transition-all hover:border-cyan-400/30 hover:bg-cyan-400/[0.02]"
                      >

                        <div className="flex items-center gap-3">

                          <div className="flex h-8 w-8 items-center justify-center border border-white/10">

                            <Icon className="h-4 w-4 text-white/25 transition group-hover:text-cyan-400" />

                          </div>

                          <div className="flex-1">

                            <div className="flex items-center justify-between">

                              <span className="font-mono text-[8px] tracking-widest text-white/45">
                                {item.title}
                              </span>

                              <span className="font-mono text-[8px] text-cyan-400">
                                {item.value}
                              </span>

                            </div>

                            <div className="mt-2 h-1 bg-white/5">

                              <motion.div
                                initial={{
                                  width: 0,
                                }}
                                whileInView={{
                                  width: item.value,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: 0.4 + index * 0.1,
                                  duration: 0.8,
                                }}
                                className="h-full bg-cyan-400"
                              />

                            </div>

                          </div>

                        </div>

                      </motion.div>
                    );

                  })}

                </div>

                {/* System Footer */}

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">

                  <span className="font-mono text-[7px] tracking-widest text-white/20">
                    ALL SYSTEMS READY
                  </span>

                  <div className="flex items-center gap-2">

                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    <span className="font-mono text-[7px] text-emerald-400">
                      ONLINE
                    </span>

                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  SIDE LABEL
              ================================================= */}

              <div className="absolute bottom-8 right-7 hidden font-mono text-[7px] tracking-[0.3em] text-white/15 lg:block">
                ABOUT // PLAYER_01
              </div>

            </div>

          </div>

          {/* ==================================================
              BOTTOM DECORATION
          ================================================== */}

          <div className="absolute bottom-0 left-1/2 h-3 w-20 -translate-x-1/2 border-x border-cyan-400/50">

            <div className="mx-auto mt-2 h-px w-8 bg-cyan-400" />

          </div>

        </div>

      </div>
    </section>
  );
}