"use client";

import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Braces,
  Code2,
  Cpu,
  Database,
  Download,
  Globe,
  Terminal,
  Zap,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ============================================================
// TECH STACK
// ============================================================

const technologies = [
  { name: "REACT", icon: Code2 },
  { name: "TYPESCRIPT", icon: Braces },
  { name: "NODE.JS", icon: Globe },
  { name: "JAVA", icon: Cpu },
  { name: "SQL", icon: Database },
  { name: "AI", icon: Zap },
];

// ============================================================
// HERO
// ============================================================

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[760px] overflow-hidden bg-black text-white"
    >
      {/* ======================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
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

      {/* Cyan Glow */}

      <div className="pointer-events-none absolute left-[30%] top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      {/* Purple Glow */}

      <div className="pointer-events-none absolute right-[5%] top-[40%] h-[450px] w-[450px] rounded-full bg-fuchsia-500/[0.035] blur-[120px]" />

      {/* Top Line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {/* ======================================================
          HERO OUTER CONTAINER
      ====================================================== */}

      <div className="mx-auto h-full max-w-[1900px] px-4 pt-[70px] sm:px-6 lg:px-8">

        <div className="relative h-[calc(100vh-85px)] min-h-[675px] overflow-hidden border border-white/10 bg-black/90">

          {/* ==================================================
              CORNERS
          ================================================== */}

          <span className="absolute left-0 top-0 z-40 h-10 w-10 border-l border-t border-cyan-400" />

          <span className="absolute right-0 top-0 z-40 h-10 w-10 border-r border-t border-cyan-400" />

          <span className="absolute bottom-0 left-0 z-40 h-10 w-10 border-b border-l border-cyan-400" />

          <span className="absolute bottom-0 right-0 z-40 h-10 w-10 border-b border-r border-cyan-400" />

          {/* ==================================================
              SYSTEM HEADER
          ================================================== */}

          <div className="absolute left-7 right-7 top-6 z-40 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="font-mono text-xs text-cyan-400">
                &gt;_
              </span>

              <span className="font-mono text-[8px] tracking-[0.22em] text-white/30 sm:text-[9px]">
                INITIALIZING HERO MODULE...
              </span>

              <span className="h-2 w-2 animate-pulse bg-cyan-400" />

            </div>

            <div className="hidden items-center gap-2 md:flex">

              <span className="font-mono text-[8px] tracking-widest text-white/20">
                SYSTEM
              </span>

              <span className="font-mono text-[9px] text-emerald-400">
                ONLINE
              </span>

            </div>

          </div>

          {/* ==================================================
              MAIN CONTENT
          ================================================== */}

          <div className="grid h-full grid-cols-1 lg:grid-cols-[52%_48%]">

            {/* =================================================
                LEFT SECTION
            ================================================= */}

            <div className="relative z-20 flex flex-col justify-center px-8 pb-20 pt-24 sm:px-12 lg:px-16">

              {/* Player Badge */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Badge
                  variant="outline"
                  className="rounded-none border-cyan-400/30 bg-cyan-400/[0.03] px-3 py-1.5 font-mono text-[8px] tracking-[0.2em] text-cyan-400 sm:text-[9px]"
                >
                  <Terminal className="mr-2 h-3 w-3" />

                  PLAYER_01 // DEVELOPER
                </Badge>
              </motion.div>

              {/* =================================================
                  NAME
              ================================================= */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.5,
                }}
                className="mt-5"
              >

                <h1 className="font-mono text-4xl font-bold tracking-wide sm:text-5xl lg:text-[58px]">
                  HI, I'M
                </h1>

                <h2 className="mt-1 font-mono text-[58px] font-black leading-[0.9] tracking-tight text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)] sm:text-[70px] lg:text-[78px]">
                  MANISH
                </h2>

                <h2 className="mt-1 font-mono text-[48px] font-black leading-[0.9] tracking-tight text-white sm:text-[58px] lg:text-[66px]">
                  KUMAR
                </h2>

              </motion.div>

              {/* =================================================
                  ROLE
              ================================================= */}

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.45,
                }}
                className="mt-5 flex w-fit items-center border border-fuchsia-400/50 bg-fuchsia-400/[0.025] px-4 py-3"
              >

                <Code2 className="mr-3 h-4 w-4 text-fuchsia-400" />

                <span className="font-mono text-xs font-bold tracking-[0.15em] text-fuchsia-300 sm:text-sm">
                  FULL STACK DEVELOPER
                </span>

                <span className="ml-3 font-mono text-fuchsia-400">
                  /&gt;
                </span>

              </motion.div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.45,
                }}
                className="mt-4 max-w-[610px] font-mono text-[11px] leading-6 text-white/40 sm:text-xs"
              >
                I build scalable, high-performance web applications
                with modern technologies. Passionate about clean code,
                problem solving and creating amazing digital experiences.
              </motion.p>

              {/* =================================================
                  TERMINAL COMMAND
              ================================================= */}

              <div className="mt-2 flex items-center gap-2 font-mono text-[9px] text-white/25">

                <span className="text-cyan-400">
                  &gt;
                </span>

                <span>
                  npm run{" "}
                  <span className="text-cyan-400">
                    build-awesome-things
                  </span>
                </span>

                <span className="h-3 w-[5px] animate-pulse bg-cyan-400" />

              </div>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.45,
                }}
                className="mt-5 flex flex-wrap gap-3"
              >

                <Button
                  asChild
                  className="group h-11 rounded-none border border-cyan-400 bg-cyan-400/[0.03] px-5 font-mono text-[10px] tracking-[0.12em] text-cyan-400 shadow-none hover:bg-cyan-400 hover:text-black"
                >
                  <a href="#projects">

                    <Terminal className="mr-2 h-4 w-4" />

                    VIEW PROJECTS

                    <ArrowRight className="ml-3 h-3 w-3 transition-transform group-hover:translate-x-1" />

                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-none border-fuchsia-400/40 bg-fuchsia-400/[0.02] px-5 font-mono text-[10px] tracking-[0.12em] text-fuchsia-300 hover:border-fuchsia-400 hover:bg-fuchsia-400 hover:text-black"
                >
                  <a href="/resume.pdf" download>

                    <Download className="mr-2 h-4 w-4" />

                    DOWNLOAD RESUME

                  </a>
                </Button>

              </motion.div>

              {/* =================================================
                  SOCIAL
              ================================================= */}

              <div className="mt-4 flex items-center gap-2">

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/30 transition hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  <FaGithub className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-white/10 text-white/30 transition hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>

                <div className="ml-2 h-px w-10 bg-white/10" />

                <span className="font-mono text-[8px] tracking-widest text-white/20">
                  CONNECT_
                </span>

              </div>

              {/* =================================================
                  TECH STACK
              ================================================= */}

              <div className="mt-5">

                <div className="mb-2 flex items-center gap-2">

                  <span className="font-mono text-xs text-cyan-400">
                    ✦
                  </span>

                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-cyan-400">
                    TECH STACK
                  </span>

                </div>

                <div className="flex flex-wrap gap-2">

                  {technologies.map((tech) => {

                    const Icon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="group flex h-9 items-center gap-2 border border-white/10 px-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]"
                      >

                        <Icon className="h-4 w-4 text-white/25 transition group-hover:text-cyan-400" />

                        <span className="font-mono text-[8px] tracking-wider text-white/30 group-hover:text-white/70">
                          {tech.name}
                        </span>

                      </div>
                    );

                  })}

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT IMAGE SECTION
            ================================================= */}

            <div className="relative flex items-center justify-center overflow-hidden px-8 pb-24 pt-20 lg:px-10 lg:pb-16 lg:pt-12">

              {/* Background Glow */}

              <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

              {/* =================================================
                  CODE DECORATION
              ================================================= */}

              <div className="absolute right-8 top-28 hidden font-mono text-[8px] leading-7 text-cyan-400/20 xl:block">

                <p>
                  &lt;developer&gt;
                </p>

                <p className="pl-3">
                  &lt;build&gt;
                </p>

                <p className="pl-6">
                  true
                </p>

                <p className="pl-3">
                  &lt;/build&gt;
                </p>

                <p>
                  &lt;/developer&gt;
                </p>

              </div>

              {/* =================================================
                  PHOTO CONTAINER
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.6,
                }}
                className="relative z-10 mt-4"
              >

                {/* Main Photo */}

                <div className="relative h-[470px] w-[340px] overflow-hidden border border-cyan-400/40 bg-black shadow-[0_0_45px_rgba(34,211,238,0.08)] sm:h-[520px] sm:w-[380px] lg:h-[535px] lg:w-[390px]">

                  <img
                    src="/images/profile.png"
                    alt="Manish Kumar"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* Photo Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Scan Line */}

                  <motion.div
                    animate={{
                      y: ["0%", "520%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                  />

                  {/* Image Corner */}

                  <div className="absolute bottom-3 right-3 h-7 w-7 border-b border-r border-cyan-400" />

                  <div className="absolute left-3 top-3 h-7 w-7 border-l border-t border-cyan-400" />

                </div>

                {/* =================================================
                    PLAYER PROFILE
                    BOTTOM OF IMAGE
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                  }}
                  className="absolute -bottom-7 left-1/2 z-30 flex w-[310px] -translate-x-1/2 items-center gap-3 border border-cyan-400/40 bg-black/95 p-2 shadow-[0_0_30px_rgba(34,211,238,0.12)] sm:w-[350px]"
                >

                  {/* Small Profile */}

                  <div className="h-16 w-16 shrink-0 overflow-hidden border border-cyan-400/30">

                    <img
                      src="/images/profile.png"
                      alt="Manish Kumar"
                      className="h-full w-full object-cover object-top"
                    />

                  </div>

                  {/* Profile Details */}

                  <div className="flex-1">

                    <p className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                      PLAYER_PROFILE
                    </p>

                    <p className="mt-1 font-mono text-xs font-bold text-white">
                      MANISH KUMAR
                    </p>

                    <div className="mt-1.5 flex items-center gap-2">

                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                      <span className="font-mono text-[7px] tracking-widest text-emerald-400">
                        AVAILABLE FOR WORK
                      </span>

                    </div>

                  </div>

                  {/* Profile Level */}

                  <div className="hidden border-l border-white/10 pl-3 sm:block">

                    <p className="font-mono text-[7px] text-white/20">
                      LVL
                    </p>

                    <p className="font-mono text-sm font-bold text-cyan-400">
                      01
                    </p>

                  </div>

                </motion.div>

                {/* =================================================
                    BUILD STATUS
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                  }}
                  className="absolute -right-8 top-10 z-30 hidden w-[205px] border border-cyan-400/30 bg-black/95 p-3 sm:block"
                >

                  <p className="font-mono text-[7px] tracking-[0.18em] text-white/30">
                    DEVELOPER_STATUS
                  </p>

                  <p className="mt-2 font-mono text-xs font-bold text-cyan-400">
                    BUILD_MODE
                  </p>

                  <div className="mt-3">

                    <div className="mb-1 flex justify-between font-mono text-[7px] text-white/25">

                      <span>
                        EXPERIENCE
                      </span>

                      <span>
                        99%
                      </span>

                    </div>

                    <div className="h-1 bg-white/5">

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: "99%",
                        }}
                        transition={{
                          delay: 1,
                          duration: 1,
                        }}
                        className="h-full bg-cyan-400"
                      />

                    </div>

                  </div>

                </motion.div>

              </motion.div>

              {/* =================================================
                  IMAGE LABEL
              ================================================= */}

              <div className="absolute bottom-8 right-8 hidden font-mono text-[7px] tracking-[0.3em] text-white/15 lg:block">
                PROFILE // 001
              </div>

            </div>

          </div>

          {/* ==================================================
              SCROLL DOWN
          ================================================== */}

          <div className="absolute bottom-3 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex">

            <span className="font-mono text-[7px] tracking-[0.3em] text-white/20">
              SCROLL DOWN
            </span>

            <motion.div
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="flex h-7 w-7 items-center justify-center border border-cyan-400/30 text-cyan-400"
            >
              <ArrowDown className="h-3 w-3" />
            </motion.div>

          </div>

          {/* Bottom Center */}

          <div className="absolute bottom-0 left-1/2 h-3 w-20 -translate-x-1/2 border-x border-cyan-400/50">

            <div className="mx-auto mt-2 h-px w-8 bg-cyan-400" />

          </div>

        </div>
      </div>
    </section>
  );
}