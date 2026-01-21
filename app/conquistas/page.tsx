import { SectionHeader } from "../../components/SectionHeader";
import { ACHIEVEMENTS } from "../../data/conquistas";

const categories = [
  { title: "Sequência", filter: "streak" },
  { title: "Virtudes", filter: "classification" },
  { title: "Diário", filter: "journal" },
  { title: "Sonhos", filter: "dream" },
  { title: "Tesouros", filter: "treasure" },
  { title: "Levels", filter: "level" },
  { title: "Medalhas", filter: "random" }
];

export default function ConquistasPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Conquistas"
        title="Medalhas e marcos"
        subtitle="Cada conquista é um sinal do seu avanço interior."
      />
      <div className="space-y-8">
        {categories.map((category) => (
          <section key={category.title} className="space-y-4">
            <h3 className="text-xl text-gold">{category.title}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {ACHIEVEMENTS.filter((achievement) =>
                achievement.conditionType.includes(category.filter)
              ).map((achievement) => (
                <div
                  key={achievement.id}
                  className={`glass-card space-y-2 border px-4 py-3 ${
                    achievement.isRealReward ? "gold-outline" : "border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-white">{achievement.title}</p>
                    <span className="text-xs text-gold">{achievement.rarity}</span>
                  </div>
                  <p className="text-sm text-white/70">{achievement.description}</p>
                  <p className="text-xs text-white/50">
                    +{achievement.rewardXp} XP · +{achievement.rewardPoints} Pontos
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
