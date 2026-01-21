"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { SectionHeader } from "../../components/SectionHeader";

export default function GrimorioPage() {
  const [content, setContent] = useState(
    "# Minha Nota\n\n- Insight rápido\n- Um símbolo\n- Uma pergunta"
  );

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Grimório"
        title="Notas em Markdown"
        subtitle="Organize saberes, rituais e insights pessoais."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card space-y-4 p-6">
          <input
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Título da nota"
          />
          <textarea
            className="h-64 rounded-xl border border-white/10 bg-white/5 p-4 text-white/80"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <div className="flex flex-wrap gap-3">
            <button className="button-gold">Salvar nota</button>
            <button className="button-gold">Fixar</button>
            <button className="button-gold">Favoritar</button>
          </div>
        </div>
        <div className="glass-card space-y-4 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Preview</p>
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="glass-card p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-white/50">Biblioteca</p>
        <div className="mt-4 rounded-xl border border-dashed border-white/20 p-6 text-white/60">
          Lista de notas com tags, favoritos e busca aparecerá aqui.
        </div>
      </div>
    </div>
  );
}
