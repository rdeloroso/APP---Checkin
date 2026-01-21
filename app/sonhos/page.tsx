"use client";

import { useState } from "react";
import { EmotionSelect } from "../../components/EmotionSelect";
import { SectionHeader } from "../../components/SectionHeader";

export default function SonhosPage() {
  const [emotions, setEmotions] = useState<string[]>([]);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Sonhos"
        title="Diário onírico"
        subtitle="Registre símbolos, emoções e clareza dos seus sonhos."
      />
      <div className="glass-card space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Título do sonho"
          />
          <input
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Tags (separe por vírgula)"
          />
        </div>
        <textarea
          className="h-40 rounded-xl border border-white/10 bg-white/5 p-4 text-white/80"
          placeholder="Conteúdo do sonho..."
        />
        <EmotionSelect selected={emotions} onChange={setEmotions} />
        <div className="grid gap-4 md:grid-cols-4">
          <label className="flex items-center gap-2 text-sm text-white/70">
            <input type="checkbox" className="accent-gold" />
            Lúcido
          </label>
          <label className="flex items-center gap-2 text-sm text-white/70">
            <input type="checkbox" className="accent-gold" />
            Recorrente
          </label>
          <input
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Clareza (1-5)"
          />
          <input
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Data"
          />
        </div>
        <button className="button-gold">Salvar sonho</button>
      </div>
      <div className="glass-card space-y-4 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Análises</p>
        <div className="rounded-xl border border-dashed border-white/20 p-6 text-white/60">
          Tags mais comuns, emoções recorrentes e padrões serão exibidos aqui.
        </div>
      </div>
    </div>
  );
}
