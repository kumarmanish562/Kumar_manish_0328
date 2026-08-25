import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="section-padding"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with."
          description="A practical toolkit across frontend, backend, databases and cloud technologies."
          center
        />

        <div className="grid gap-5 md:grid-cols-2">
          {Object.values(skills).map(
            (category, index) => (
              <SkillCard
                key={category.title}
                title={category.title}
                skills={category.skills}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;