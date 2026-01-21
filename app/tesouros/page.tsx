import { SectionHeader } from "../../components/SectionHeader";
import { TreasureCard } from "../../components/TreasureCard";

const treasures = [
  {
    quote: "A disciplina suave é a ponte entre intenção e caráter.",
    author: "Caminho do Sábio",
    category: "Disciplina"
  },
  {
    quote: "Quando o coração desacelera, a virtude encontra espaço.",
    author: "Caminho do Sábio",
    category: "Presença"
  },
  {
    quote: "A gratidão é o fogo que mantém o espírito aquecido.",
    author: "Caminho do Sábio",
    category: "Gratidão"
  }
];

export default function TesourosPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Tesouros"
        title="Biblioteca de frases"
        subtitle="Guarde as palavras que iluminam seu caminho."
      />
      <TreasureCard quote={treasures[0].quote} author={treasures[0].author} />
      <div className="glass-card space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <input
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            placeholder="Buscar tesouro"
          />
          <button className="button-gold">Sortear frase</button>
          <button className="button-gold">Adicionar frase</button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {treasures.map((treasure) => (
            <div key={treasure.quote} className="glass-card p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                {treasure.category}
              </p>
              <p className="mt-2 text-white/80">“{treasure.quote}”</p>
              <p className="text-sm text-white/60">— {treasure.author}</p>
              <div className="mt-4 flex gap-2">
                <button className="button-gold">Favoritar</button>
                <button className="button-gold">Salvar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
