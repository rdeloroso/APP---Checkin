export type EmotionCategory = {
  title: string;
  emotions: string[];
};

export const EMOTION_CATEGORIES: EmotionCategory[] = [
  {
    title: "Positivas",
    emotions: [
      "Alegria",
      "Gratidão",
      "Paz",
      "Confiança",
      "Esperança",
      "Entusiasmo",
      "Alívio",
      "Leveza",
      "Amor",
      "Orgulho saudável",
      "Motivação",
      "Inspiração",
      "Presença",
      "Serenidade",
      "Satisfação",
      "Coragem",
      "Encantamento",
      "Harmonia",
      "Clareza"
    ]
  },
  {
    title: "Difíceis",
    emotions: [
      "Ansiedade",
      "Medo",
      "Insegurança",
      "Tristeza",
      "Solidão",
      "Irritação",
      "Raiva",
      "Frustração",
      "Culpa",
      "Vergonha",
      "Desânimo",
      "Cansaço mental",
      "Estresse",
      "Impaciência",
      "Confusão",
      "Decepção",
      "Tensão",
      "Vazio",
      "Desesperança",
      "Vulnerabilidade"
    ]
  },
  {
    title: "Energia",
    emotions: [
      "Energizado",
      "Disposto",
      "Focado",
      "Criativo",
      "Produtivo",
      "Acelerado",
      "Agitado",
      "Neutro",
      "Sonolento",
      "Exausto",
      "Sem energia",
      "Lento",
      "Desligado",
      "Sobrecarregado"
    ]
  },
  {
    title: "Sociais/Relacionais",
    emotions: [
      "Acolhido",
      "Conectado",
      "Amado",
      "Em paz com alguém",
      "Gratidão por alguém",
      "Saudade",
      "Carência",
      "Rejeição",
      "Ciúme",
      "Ressentimento",
      "Admiração",
      "Compaixão",
      "Empatia",
      "Distanciamento",
      "Necessidade de silêncio"
    ]
  },
  {
    title: "Profundas",
    emotions: [
      "Estranheza",
      "Mistério",
      "Pressentimento",
      "Melancolia",
      "Nostalgia",
      "Sensação de chamada",
      "Sensação de alerta",
      "Expansão",
      "Transcendência",
      "Peso emocional",
      "Purificação",
      "Confusão simbólica"
    ]
  }
];

export const ALL_EMOTIONS = EMOTION_CATEGORIES.flatMap((category) =>
  category.emotions
);
