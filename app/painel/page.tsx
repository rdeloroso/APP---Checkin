import { LevelFocus } from "../../components/LevelFocus";
import { SectionHeader } from "../../components/SectionHeader";
import { StatsCard } from "../../components/StatsCard";
import { TreasureCard } from "../../components/TreasureCard";
import { LEVELS } from "../../data/levels";
import { useProgressStore } from "../../lib/store";

const insights = [
  "Sua sequência melhorou 20% nas últimas 2 semanas.",
  "Dias com Serenidade trazem mais check-ins perfeitos.",
  "Essenciais concluídos cedo aumentam seu XP diário."
];

export default function PainelPage() {
  const progress = useProgressStore.getState();
  const level = LEVELS.find((item) => item.level === progress.level) ?? LEVELS[0];

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Painel do Sábio"
        title="Visão geral do Caminho"
        subtitle="Acompanhe sua presença, virtude e consciência diária."
      />
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard label="XP" value={`${progress.totalXp} XP`} helper="Total acumulado" />
        <StatsCard label="Pontos" value={`${progress.points} Pontos`} helper="Saldo atual" />
        <StatsCard label="Level" value={`Level ${progress.level}`} helper="Virtude ativa" />
        <StatsCard
          label="Sequência"
          value={`${progress.currentStreak} dias`}
          helper={`Melhor: ${progress.bestStreak} dias`}
        />
      </div>
      <LevelFocus level={level} />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <TreasureCard
          quote="A virtude é o hábito que transforma o invisível em escolha diária."
          author="Sabedoria do Caminho"
        />
        <div className="glass-card space-y-4 p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">
            Insights do Sábio
          </p>
          <ul className="space-y-3 text-white/80">
            {insights.map((insight) => (
              <li key={insight} className="rounded-xl border border-white/10 bg-white/5 p-3">
                {insight}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">XP 30/90 dias</p>
          <div className="mt-4 h-32 rounded-xl border border-dashed border-white/20"></div>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Heatmap anual</p>
          <div className="mt-4 h-32 rounded-xl border border-dashed border-white/20"></div>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Radar hábitos essenciais
          </p>
          <div className="mt-4 h-32 rounded-xl border border-dashed border-white/20"></div>
        </div>
      </div>
    </div>
  );
}
