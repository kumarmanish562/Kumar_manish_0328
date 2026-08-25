import SectionHeading from "@/components/SectionHeading";
import AchievementCard from "@/components/AchievementCard";
import { achievements } from "@/data/achievements";

function Achievements() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones I'm proud of."
          description="A few achievements from my academic and development journey."
          center
        />

        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map(
            (achievement, index) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Achievements;