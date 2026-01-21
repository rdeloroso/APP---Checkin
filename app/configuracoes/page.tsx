import { SectionHeader } from "../../components/SectionHeader";

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Configurações"
        title="Personalize seu caminho"
        subtitle="Ajustes práticos sem perder o tema sagrado do Caminho do Sábio."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card space-y-4 p-6">
          <h3 className="text-lg text-gold">Regras do dia perfeito</h3>
          <div className="space-y-3 text-sm text-white/70">
            <label className="flex items-center gap-2">
              <input type="radio" name="rule" className="accent-gold" defaultChecked />
              Todos os hábitos (100%)
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="rule" className="accent-gold" />
              Essenciais + 80%
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="rule" className="accent-gold" />
              95% de conclusão
            </label>
          </div>
        </div>
        <div className="glass-card space-y-4 p-6">
          <h3 className="text-lg text-gold">Intensidade de animações</h3>
          <select className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <option>Baixa</option>
            <option>Media</option>
            <option>Alta</option>
          </select>
          <h3 className="text-lg text-gold">Fechamento do dia</h3>
          <div className="flex gap-2">
            <button className="button-gold">00:00</button>
            <button className="button-gold">02:00</button>
            <button className="button-gold">03:00</button>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card space-y-4 p-6">
          <h3 className="text-lg text-gold">Hábitos e Essenciais</h3>
          <div className="rounded-xl border border-dashed border-white/20 p-4 text-white/60">
            Lista de hábitos editáveis com prioridade e frequência.
          </div>
        </div>
        <div className="glass-card space-y-4 p-6">
          <h3 className="text-lg text-gold">Widgets do Painel</h3>
          <div className="rounded-xl border border-dashed border-white/20 p-4 text-white/60">
            Ordene e habilite os widgets do painel.
          </div>
        </div>
      </div>
      <div className="glass-card space-y-4 p-6">
        <h3 className="text-lg text-gold">Notificações e lembretes</h3>
        <div className="rounded-xl border border-dashed border-white/20 p-4 text-white/60">
          Configurações de lembretes serão exibidas aqui.
        </div>
      </div>
    </div>
  );
}
