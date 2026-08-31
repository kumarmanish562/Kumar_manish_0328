"use client";

// ============================================================
// IMPORTS
// ============================================================

import { motion } from "framer-motion";

import {
  Braces,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

// ============================================================
// TYPES
// ============================================================

type Skill = {
  name: string;
  level: number;
  category: string;
  icon: React.ElementType;
};

// ============================================================
// SKILLS DATA
// ============================================================

const skills: Skill[] = [
  {
    name: "REACT",
    level: 95,
    category: "FRONTEND",
    icon: Code2,
  },
  {
    name: "TYPESCRIPT",
    level: 90,
    category: "FRONTEND",
    icon: Braces,
  },
  {
    name: "JAVASCRIPT",
    level: 92,
    category: "LANGUAGE",
    icon: Code2,
  },
  {
    name: "HTML / CSS",
    level: 95,
    category: "FRONTEND",
    icon: Globe,
  },
  {
    name: "NODE.JS",
    level: 88,
    category: "BACKEND",
    icon: Terminal,
  },
  {
    name: "JAVA",
    level: 90,
    category: "BACKEND",
    icon: Cpu,
  },
  {
    name: "SQL",
    level: 88,
    category: "DATABASE",
    icon: Database,
  },
  {
    name: "MONGODB",
    level: 85,
    category: "DATABASE",
    icon: Database,
  },
  {
    name: "AI / APIs",
    level: 82,
    category: "AI",
    icon: Zap,
  },
  {
    name: "GIT / GITHUB",
    level: 90,
    category: "TOOLS",
    icon: Layers,
  },
];

// ============================================================
// CATEGORIES
// ============================================================

const categories = [
  "ALL",
  "FRONTEND",
  "BACKEND",
  "DATABASE",
  "AI",
  "TOOLS",
];

// ============================================================
// SKILL COMPONENT
// ============================================================

export default function Skill() {
  return (
    <section
      id="skills"
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

      <div className="pointer-events-none absolute left-[25%] top-[35%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute right-[5%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-fuchsia-500/[0.025] blur-[110px]" />

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
              SYSTEM HEADER
          ================================================== */}

          <div className="absolute left-7 right-7 top-5 z-30 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="font-mono text-xs text-cyan-400">
                &gt;_
              </span>

              <span className="font-mono text-[8px] tracking-[0.2em] text-white/25 sm:text-[9px]">
                LOADING SKILL DATABASE...
              </span>

              <span className="h-2 w-2 animate-pulse bg-cyan-400" />

            </div>

            <div className="hidden items-center gap-2 md:flex">

              <span className="font-mono text-[8px] tracking-widest text-white/20">
                SYSTEM
              </span>

              <span className="font-mono text-[9px] text-emerald-400">
                READY
              </span>

            </div>

          </div>

          {/* ==================================================
              MAIN CONTENT
          ================================================== */}

          <div className="grid min-h-[calc(100vh-160px)] grid-cols-1 lg:grid-cols-[0.72fr_1.28fr]">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="relative z-20 flex flex-col justify-center border-b border-white/10 px-7 pb-10 pt-24 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:pb-14 lg:pt-20">

              {/* Badge */}

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
                  <Terminal className="mr-2 h-3 w-3" />

                  PLAYER_01 // SKILLS
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
                className="mt-6"
              >

                <p className="font-mono text-[8px] tracking-[0.25em] text-white/25">
                  PLAYER_CAPABILITIES
                </p>

                <h2 className="mt-2 font-mono text-4xl font-black leading-none tracking-tight sm:text-5xl lg:text-6xl">

                  MY{" "}

                  <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    SKILLS
                  </span>

                </h2>

              </motion.div>

              {/* Description */}

              <motion.p
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
                className="mt-5 max-w-[440px] font-mono text-[11px] leading-6 text-white/40 sm:text-xs sm:leading-7"
              >
                A collection of technologies and tools I use to
                design, develop and deploy modern full-stack
                applications.
              </motion.p>

              {/* =================================================
                  PLAYER STATS
              ================================================= */}

              <div className="mt-7 grid grid-cols-2 gap-2">

                <Stat
                  label="TOTAL_SKILLS"
                  value="10+"
                />

                <Stat
                  label="TECH_STACK"
                  value="FULL"
                />

                <Stat
                  label="BUILD_MODE"
                  value="ACTIVE"
                />

                <Stat
                  label="STATUS"
                  value="ONLINE"
                />

              </div>

              {/* =================================================
                  TERMINAL
              ================================================= */}

              <div className="mt-6 border border-white/10 bg-white/[0.015] p-3">

                <div className="flex items-center gap-2">

                  <span className="text-cyan-400">
                    &gt;
                  </span>

                  <span className="font-mono text-[8px] text-white/30">
                    skills.load()
                  </span>

                </div>

                <div className="mt-2 font-mono text-[8px] leading-5 text-white/20">

                  <p>
                    <span className="text-cyan-400">
                      ✓
                    </span>{" "}
                    frontend_modules loaded
                  </p>

                  <p>
                    <span className="text-cyan-400">
                      ✓
                    </span>{" "}
                    backend_modules loaded
                  </p>

                  <p>
                    <span className="text-cyan-400">
                      ✓
                    </span>{" "}
                    database_modules loaded
                  </p>

                  <p>
                    <span className="text-cyan-400">
                      ✓
                    </span>{" "}
                    ai_modules loaded
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT SIDE - SKILLS
            ================================================= */}

            <div className="relative flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-12 lg:py-16">

              {/* Background Code */}

              <div className="pointer-events-none absolute right-7 top-24 hidden font-mono text-[8px] leading-7 text-cyan-400/15 xl:block">

                <p>
                  &lt;skills&gt;
                </p>

                <p className="pl-3">
                  frontend: true
                </p>

                <p className="pl-3">
                  backend: true
                </p>

                <p className="pl-3">
                  database: true
                </p>

                <p className="pl-3">
                  ai: true
                </p>

                <p>
                  &lt;/skills&gt;
                </p>

              </div>

              {/* =================================================
                  CATEGORY BAR
              ================================================= */}

              <div className="mb-5 flex flex-wrap gap-2">

                {categories.map((category, index) => (

                  <button
                    key={category}
                    type="button"
                    className={`border px-3 py-2 font-mono text-[8px] tracking-widest transition ${
                      index === 0
                        ? "border-cyan-400/50 bg-cyan-400/[0.06] text-cyan-400"
                        : "border-white/10 text-white/25 hover:border-cyan-400/30 hover:text-cyan-400"
                    }`}
                  >
                    {category}
                  </button>

                ))}

              </div>

              {/* =================================================
                  SKILL GRID
              ================================================= */}

              <div className="relative z-10 grid grid-cols-1 gap-2 sm:grid-cols-2">

                {skills.map((skill, index) => {

                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
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
                        delay: 0.05 + index * 0.05,
                        duration: 0.4,
                      }}
                      className="group relative overflow-hidden border border-white/10 bg-white/[0.012] p-3 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/[0.025]"
                    >

                      {/* Skill Header */}

                      <div className="flex items-center gap-3">

                        {/* Icon */}

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 transition group-hover:border-cyan-400/30">

                          <Icon className="h-4 w-4 text-white/25 transition group-hover:text-cyan-400" />

                        </div>

                        {/* Name */}

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between">

                            <span className="font-mono text-[9px] font-bold tracking-wider text-white/55 transition group-hover:text-white/90">
                              {skill.name}
                            </span>

                            <span className="font-mono text-[8px] text-cyan-400">
                              {skill.level}%
                            </span>

                          </div>

                          <p className="mt-0.5 font-mono text-[7px] tracking-widest text-white/20">
                            {skill.category}
                          </p>

                        </div>

                      </div>

                      {/* Progress */}

                      <div className="mt-3 h-1 bg-white/5">

                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: 0.3 + index * 0.06,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className="h-full bg-cyan-400"
                        />

                      </div>

                      {/* Bottom Status */}

                      <div className="mt-2 flex items-center justify-between">

                        <span className="font-mono text-[7px] text-white/15">
                          MASTERY_LEVEL
                        </span>

                        <CheckCircle2 className="h-3 w-3 text-emerald-400/50" />

                      </div>

                    </motion.div>

                  );

                })}

              </div>

              {/* =================================================
                  BOTTOM SYSTEM STATUS
              ================================================= */}

              <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/10 pt-3">

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                  <span className="font-mono text-[7px] tracking-[0.2em] text-emerald-400">
                    ALL SKILLS ONLINE
                  </span>

                </div>

                <span className="font-mono text-[7px] tracking-widest text-white/15">
                  XP_DATABASE // 001
                </span>

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

// ============================================================
// STAT COMPONENT
// ============================================================

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border border-white/10 bg-white/[0.012] p-3">

      <p className="font-mono text-[7px] tracking-widest text-white/20">
        {label}
      </p>

      <p className="mt-1 font-mono text-xs font-bold text-cyan-400">
        {value}
      </p>

    </div>
  );
}