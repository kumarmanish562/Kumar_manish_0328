import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

const stats = [
  {
    value: "4+",
    label: "Major Projects",
    icon: Code2,
  },
  {
    value: "1st",
    label: "National Hackathon",
    icon: Trophy,
  },
  {
    value: "2026",
    label: "Graduation",
    icon: GraduationCap,
  },
];

function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="About Me"
          title="A developer who enjoys building useful things."
          description="I enjoy turning ideas into practical digital products with clean interfaces, reliable backend systems and modern technologies."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* About Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="glass group relative overflow-hidden rounded-3xl p-7 sm:p-9"
          >
            {/* Decorative Gradient */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/15" />

            <div className="relative z-10">
              {/* Small Label */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-violet-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                  Who I Am
                </span>
              </div>

              <h3 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                Turning ideas into{" "}
                <span className="gradient-text">
                  real-world applications.
                </span>
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                I'm a Computer Science student and software
                developer with a strong interest in building
                modern, scalable and user-focused applications.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                I enjoy working across the frontend and backend,
                from designing responsive interfaces with React
                to building APIs, databases and cloud-based
                solutions.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                I'm continuously improving my problem-solving
                skills, learning new technologies and looking
                for opportunities where I can contribute to
                meaningful products.
              </p>

              {/* Bottom Highlight */}
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                  <ArrowUpRight
                    size={17}
                    className="text-violet-400"
                  />
                </div>

                <p className="text-sm text-zinc-500">
                  Always learning. Always building.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="glass group relative overflow-hidden rounded-3xl p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-violet-500/5"
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-400">
                      <Icon size={20} />
                    </div>

                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative z-10 mt-6">
                    <p className="text-3xl font-extrabold tracking-tight text-white">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;