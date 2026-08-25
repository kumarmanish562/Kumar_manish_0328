import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked."
          description="My professional experience and the technologies I've worked with."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-white/10" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10">
                  <div className="h-2 w-2 rounded-full bg-violet-400" />
                </div>

                <div className="glass rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm text-violet-400">
                        <Briefcase size={15} />
                        {item.company}
                      </div>

                      <h3 className="text-2xl font-bold text-white">
                        {item.role}
                      </h3>
                    </div>

                    <p className="text-sm text-zinc-500">
                      {item.period}
                    </p>
                  </div>

                  <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;