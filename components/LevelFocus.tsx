import { LevelContent } from "../data/levels";

export function LevelFocus({ level }: { level: LevelContent }) {
  return (
    <section className="glass-card space-y-4 border border-gold/30 p-6 shadow-glow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Virtude do Level {level.level}
          </p>
          <h2 className="text-2xl font-semibold text-gold">{level.virtue}</h2>
        </div>
        <span className="rounded-full border border-gold/40 px-3 py-1 text-sm text-gold">
          Level {level.level}
        </span>
      </div>
      <p className="text-white/80">{level.reflection}</p>
      <div className="space-y-2">
        <p className="text-sm text-gold">Pergunta do dia</p>
        <p className="text-lg text-white">{level.question}</p>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Prática</p>
        <p className="mt-2 text-white/80">{level.practice}</p>
      </div>
    </section>
  );
}
