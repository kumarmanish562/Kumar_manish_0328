import { motion } from "framer-motion";

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${
        center ? "mx-auto text-center" : ""
      } max-w-2xl`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;