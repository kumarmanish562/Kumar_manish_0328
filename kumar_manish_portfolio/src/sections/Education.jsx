import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";

function Education() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Education"
          title="My academic journey."
          description="The foundation behind my technical and problem-solving skills."
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass flex flex-col gap-5 rounded-3xl p-7 sm:flex-row sm:items-center sm:p-9"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
            <GraduationCap size={28} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium text-violet-400">
              2022 – 2026
            </p>

            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              B.Tech — Computer Science &
              Engineering
            </h3>

            <p className="mt-2 text-zinc-400">
              Rungta College of Engineering &
              Technology
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;