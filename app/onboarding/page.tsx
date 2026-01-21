"use client";

import { useState } from "react";
import { SectionHeader } from "../../components/SectionHeader";

const steps = [
  "Nome da jornada",
  "Criar hábitos",
  "Escolher essenciais",
  "Regras do dia perfeito",
  "Lembretes e fechamento"
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Onboarding"
        title="Forme seu caminho"
        subtitle="Um ritual guiado para começar com intenção."
      />
      <div className="glass-card space-y-6 p-6">
        <div className="flex flex-wrap items-center gap-3">
          {steps.map((label, index) => (
            <span
              key={label}
              className={`rounded-full border px-3 py-1 text-xs ${
                index === step
                  ? "border-gold/60 bg-gold/20 text-gold"
                  : "border-white/10 text-white/50"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        {step === 0 && (
          <div className="space-y-4">
            <input
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              placeholder="Nome da jornada (opcional)"
            />
            <div className="flex gap-3">
              <button className="button-gold">Compromisso leve</button>
              <button className="button-gold">Compromisso médio</button>
              <button className="button-gold">Compromisso intenso</button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-white/70">Importe um pack padrão e ajuste seus hábitos.</p>
            <button className="button-gold">Importar pack Caminho do Sábio</button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <p className="text-white/70">Escolha hábitos essenciais para o dia perfeito.</p>
            <div className="flex flex-wrap gap-2">
              {"Respiração, Leitura, Movimento".split(", ").map((item) => (
                <button key={item} className="button-gold">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <p className="text-white/70">Defina como o dia perfeito será avaliado.</p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <label className="flex items-center gap-2">
                <input type="radio" name="perfect" className="accent-gold" />
                100% dos hábitos
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="perfect" className="accent-gold" />
                Essenciais + 80%
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="perfect" className="accent-gold" />
                95% de conclusão
              </label>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-4">
            <p className="text-white/70">Escolha seus lembretes e horário de fechamento.</p>
            <div className="flex gap-3">
              <button className="button-gold">00:00</button>
              <button className="button-gold">02:00</button>
              <button className="button-gold">03:00</button>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="button-gold"
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            disabled={step === 0}
          >
            Voltar
          </button>
          {step < steps.length - 1 ? (
            <button className="button-gold" onClick={() => setStep((prev) => prev + 1)}>
              Próximo
            </button>
          ) : (
            <button className="button-gold">Começar meu Caminho</button>
          )}
        </div>
      </div>
    </div>
  );
}
