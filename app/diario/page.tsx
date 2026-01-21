"use client";

import { useState } from "react";
import { EmotionSelect } from "../../components/EmotionSelect";
import { SectionHeader } from "../../components/SectionHeader";

export default function DiarioPage() {
  const [emotions, setEmotions] = useState<string[]>([]);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Diário"
        title="Reflexões e gratidão"
        subtitle="Registre o que foi vivido e como o coração respondeu."
      />
      <div className="glass-card space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <textarea
            className="h-40 rounded-xl border border-white/10 bg-white/5 p-4 text-white/80"
            placeholder="Reflexões do dia..."
          />
          <div className="space-y-3">
            <input
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              placeholder="Gratidão 1"
            />
            <input
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              placeholder="Gratidão 2"
            />
            <input
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              placeholder="Gratidão 3"
            />
          </div>
        </div>
        <EmotionSelect selected={emotions} onChange={setEmotions} />
        <div className="grid gap-4 md:grid-cols-3">
          <input
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Nota do dia (1-10)"
          />
          <input
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Energia (1-10)"
          />
          <input
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Estresse (1-10)"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <textarea
            className="h-32 rounded-xl border border-white/10 bg-white/5 p-4 text-white/80"
            placeholder="O que foi alcançado hoje?"
          />
          <textarea
            className="h-32 rounded-xl border border-white/10 bg-white/5 p-4 text-white/80"
            placeholder="Metas para amanhã"
          />
        </div>
        <button className="button-gold">Salvar diário</button>
      </div>
      <div className="glass-card space-y-4 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Histórico</p>
        <div className="rounded-xl border border-dashed border-white/20 p-6 text-white/60">
          Histórico filtrável por emoções e rating aparecerá aqui.
        </div>
      </div>
    </div>
  );
}
