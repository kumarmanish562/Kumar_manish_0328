import { motion } from "framer-motion";

function AchievementCard({
  achievement,
  index = 0,
}) {
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
        delay: index * 0.1,
      }}
      whileHover={{
        y: -5,
      }}
      className="glass rounded-3xl p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-4xl">
          {achievement.icon}
        </span>

        <span className="text-xs font-medium text-zinc-500">
          {achievement.year}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-bold text-white">
        {achievement.title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-400">
        {achievement.description}
      </p>
    </motion.div>
  );
}

export default AchievementCard;