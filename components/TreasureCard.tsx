type TreasureCardProps = {
  quote: string;
  author?: string;
};

export function TreasureCard({ quote, author }: TreasureCardProps) {
  return (
    <div className="glass-card space-y-4 p-6">
      <p className="text-sm uppercase tracking-[0.25em] text-gold/70">
        Tesouro do dia
      </p>
      <p className="text-xl text-white/90">“{quote}”</p>
      {author ? <p className="text-sm text-white/60">— {author}</p> : null}
      <div className="flex flex-wrap gap-3">
        <button className="button-gold">Nova frase</button>
        <button className="button-gold">Favoritar</button>
        <button className="button-gold">Salvar</button>
      </div>
    </div>
  );
}
