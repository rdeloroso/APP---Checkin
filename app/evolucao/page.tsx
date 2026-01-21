import { SectionHeader } from "../../components/SectionHeader";
import { LEVELS } from "../../data/levels";
import { useProgressStore } from "../../lib/store";

export default function EvolucaoPage() {
  const progress = useProgressStore.getState();

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Evolução"
        title="Linha do tempo das virtudes"
        subtitle="Cada Level traz uma virtude, reflexão e prática para o dia."
      />
      <div className="space-y-4">
        {LEVELS.map((level) => (
          <div
            key={level.level}
            className={`glass-card flex flex-col gap-3 p-5 ${
              level.level === progress.level ? "gold-outline" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Level {level.level}
              </p>
              <span className="text-gold">{level.virtue}</span>
            </div>
            <p className="text-white/80">{level.reflection}</p>
            <p className="text-sm text-gold">Pergunta: {level.question}</p>
            <p className="text-sm text-white/70">Prática: {level.practice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
