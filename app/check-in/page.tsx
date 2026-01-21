import { LevelFocus } from "../../components/LevelFocus";
import { SectionHeader } from "../../components/SectionHeader";
import { TreasureCard } from "../../components/TreasureCard";
import { LEVELS } from "../../data/levels";
import { CLASSIFICATIONS } from "../../lib/progress";
import { useProgressStore } from "../../lib/store";

const habits = [
  {
    id: "meditacao",
    name: "Respiração consciente",
    type: "duration",
    target: "5 min",
    xp: 12,
    points: 5
  },
  {
    id: "agua",
    name: "Água ao acordar",
    type: "boolean",
    target: "1 copo",
    xp: 8,
    points: 3
  },
  {
    id: "leitura",
    name: "Leitura reflexiva",
    type: "count",
    target: "8 páginas",
    xp: 15,
    points: 6
  },
  {
    id: "movimento",
    name: "Movimento consciente",
    type: "duration",
    target: "15 min",
    xp: 20,
    points: 8
  }
];

export default function CheckinPage() {
  const progress = useProgressStore.getState();
  const level = LEVELS.find((item) => item.level === progress.level) ?? LEVELS[0];

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Check-in"
        title="Ritual diário de virtudes"
        subtitle="Marque seus hábitos e conclua o dia com consciência."
      />
      <LevelFocus level={level} />
      <TreasureCard
        quote="Quando o dia é simples, a virtude é lembrada."
        author="Tesouros do Caminho"
      />
      <div className="glass-card space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gold">Hábitos do dia</h3>
          <button className="button-gold">Salvar check-in</button>
        </div>
        <div className="space-y-4">
          {habits.map((habit) => (
            <div
              key={habit.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div>
                <p className="text-lg text-white">{habit.name}</p>
                <p className="text-sm text-white/60">
                  {habit.type} · Meta {habit.target}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span>+{habit.xp} XP</span>
                <span>+{habit.points} Pontos</span>
                <button className="button-gold">Marcar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {CLASSIFICATIONS.map((classification) => (
          <div
            key={classification}
            className="glass-card flex flex-col gap-2 p-4 text-sm text-white/80"
          >
            <span className="text-gold">{classification}</span>
            <p>Faixa aplicada conforme conclusão dos hábitos.</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass-card p-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Sequência</p>
          <p className="mt-2 text-2xl text-gold">{progress.currentStreak} dias</p>
          <p className="text-sm text-white/60">Melhor: {progress.bestStreak}</p>
        </div>
        <div className="glass-card p-4 gold-outline">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Streak Excelente
          </p>
          <p className="mt-2 text-2xl text-gold">{progress.excellentStreak} dias</p>
          <p className="text-sm text-white/60">Prêmio: Massagem</p>
        </div>
        <div className="glass-card p-4 gold-outline">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Streak Perfeita
          </p>
          <p className="mt-2 text-2xl text-gold">{progress.perfectStreak} dias</p>
          <p className="text-sm text-white/60">Prêmio: Presente + Massagem</p>
        </div>
      </div>
    </div>
  );
}
