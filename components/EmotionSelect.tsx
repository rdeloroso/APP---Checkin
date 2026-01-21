"use client";

import { useMemo, useState } from "react";
import { EMOTION_CATEGORIES } from "../data/emocoes";

const RECENT_EMOTIONS = ["Gratidão", "Paz", "Ansiedade", "Cansaço mental", "Clareza"];

type EmotionSelectProps = {
  selected: string[];
  onChange: (next: string[]) => void;
};

export function EmotionSelect({ selected, onChange }: EmotionSelectProps) {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return EMOTION_CATEGORIES;
    const lower = query.toLowerCase();
    return EMOTION_CATEGORIES.map((category) => ({
      ...category,
      emotions: category.emotions.filter((emotion) =>
        emotion.toLowerCase().includes(lower)
      )
    })).filter((category) => category.emotions.length > 0);
  }, [query]);

  const toggleEmotion = (emotion: string) => {
    if (selected.includes(emotion)) {
      onChange(selected.filter((item) => item !== emotion));
    } else {
      onChange([...selected, emotion]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/60">
          Emoções selecionadas: {selected.length}
        </p>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar emoção"
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 focus:border-gold/40 focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {RECENT_EMOTIONS.map((emotion) => (
          <button
            key={emotion}
            type="button"
            onClick={() => toggleEmotion(emotion)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              selected.includes(emotion)
                ? "border-gold/60 bg-gold/20 text-gold"
                : "border-white/10 text-white/70 hover:border-gold/40"
            }`}
          >
            {emotion}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {filteredCategories.map((category) => (
          <div key={category.title} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              {category.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.emotions.map((emotion) => (
                <button
                  key={emotion}
                  type="button"
                  onClick={() => toggleEmotion(emotion)}
                  className={`rounded-full border px-3 py-1 text-xs transition ${
                    selected.includes(emotion)
                      ? "border-gold/60 bg-gold/20 text-gold"
                      : "border-white/10 text-white/70 hover:border-gold/40"
                  }`}
                >
                  {emotion}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
