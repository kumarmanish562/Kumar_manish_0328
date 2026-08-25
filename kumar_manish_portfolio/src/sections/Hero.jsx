import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

const technologies = [
  "React.js",
  "Java",
  "Spring Boot",
  "AWS",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 grid-background opacity-40" />

      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="container-custom relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              Available for opportunities
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mb-4 text-lg font-medium text-zinc-400"
          >
            Hi, I'm Manish Kumar 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Software
            <br />
            <span className="gradient-text">
              Developer.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            I build modern, scalable and user-focused
            web applications using React, Java,
            Spring Boot and cloud technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-7 text-black hover:bg-zinc-200"
            >
              <a href="#projects">
                View Projects
                <ArrowUpRight size={18} />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 px-7 hover:bg-white/10"
            >
              <a href="/resume.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.25,
          }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-cyan-400/20 blur-3xl" />

          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-zinc-900">
              <img
                src="/images/profile.jpg"
                alt="Manish Kumar"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">
                Building ideas into products.
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                React • Java • Spring Boot • AWS
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-white sm:flex"
      >
        Scroll to explore
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}

export default Hero;