import { motion } from "framer-motion";

function SkillCard({ title, skills, index = 0 }) {
  return (
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
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -5,
      }}
      className="glass rounded-3xl p-6 transition-shadow duration-300 hover:shadow-2xl hover:shadow-violet-500/5"
    >
      <h3 className="text-lg font-bold text-white">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;