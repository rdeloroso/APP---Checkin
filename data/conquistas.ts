export type AchievementRarity = "Comum" | "Incomum" | "Raro" | "Épico" | "Lendário";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  rarity: AchievementRarity;
  rewardXp: number;
  rewardPoints: number;
  conditionType: string;
  params?: Record<string, string | number>;
  isRealReward?: boolean;
  isRandom?: boolean;
};

const rarityRewards: Record<AchievementRarity, { xp: number; points: number }> = {
  Comum: { xp: 50, points: 10 },
  Incomum: { xp: 120, points: 25 },
  Raro: { xp: 250, points: 50 },
  Épico: { xp: 500, points: 100 },
  Lendário: { xp: 1200, points: 250 }
};

const make = (
  id: string,
  title: string,
  description: string,
  rarity: AchievementRarity,
  conditionType: string,
  params?: Record<string, string | number>,
  extras?: Partial<Achievement>
): Achievement => ({
  id,
  title,
  description,
  rarity,
  rewardXp: rarityRewards[rarity].xp,
  rewardPoints: rarityRewards[rarity].points,
  conditionType,
  params,
  ...extras
});

export const ACHIEVEMENTS: Achievement[] = [
  make(
    "streak-1",
    "Primeiro Passo",
    "Registrou o primeiro check-in e iniciou a jornada.",
    "Comum",
    "streak",
    { value: 1 }
  ),
  make(
    "streak-3",
    "Sequência de 3",
    "Três dias seguidos de presença.",
    "Comum",
    "streak",
    { value: 3 }
  ),
  make(
    "streak-7",
    "Sequência de 7",
    "Uma semana inteira de consistência.",
    "Incomum",
    "streak",
    { value: 7 }
  ),
  make(
    "streak-14",
    "Sequência de 14",
    "Duas semanas de firmeza.",
    "Incomum",
    "streak",
    { value: 14 }
  ),
  make(
    "streak-21",
    "Sequência de 21",
    "A mente já reconhece o ritual.",
    "Raro",
    "streak",
    { value: 21 }
  ),
  make(
    "streak-30",
    "Sequência de 30",
    "Um mês inteiro de compromisso.",
    "Raro",
    "streak",
    { value: 30 }
  ),
  make(
    "streak-60",
    "Sequência de 60",
    "Dois meses de foco e retorno.",
    "Épico",
    "streak",
    { value: 60 }
  ),
  make(
    "streak-100",
    "Sequência de 100",
    "Cem dias de evolução.",
    "Épico",
    "streak",
    { value: 100 }
  ),
  make(
    "streak-365",
    "Sequência de 365",
    "Um ano inteiro no caminho.",
    "Lendário",
    "streak",
    { value: 365 }
  ),
  make(
    "streak-return",
    "Retorno do Sábio",
    "Voltou após uma pausa e recomeçou com dignidade.",
    "Comum",
    "return"
  ),
  make(
    "streak-unshakable",
    "Inabalável",
    "Manteve uma sequência com calma e firmeza.",
    "Raro",
    "streak",
    { value: 45 }
  ),
  make(
    "streak-ritmo",
    "Ritmo Consistente",
    "Manteve 10 check-ins em 12 dias.",
    "Incomum",
    "consistency",
    { checkins: 10, days: 12 }
  ),
  make(
    "class-regular-first",
    "Primeira Virtude Regular",
    "Primeiro dia com classificação Virtude Regular.",
    "Comum",
    "classification",
    { value: "Virtude Regular" }
  ),
  make(
    "class-good-first",
    "Primeira Virtude Boa",
    "Primeiro dia com classificação Virtude Boa.",
    "Comum",
    "classification",
    { value: "Virtude Boa" }
  ),
  make(
    "class-excellent-first",
    "Primeira Virtude Excelente",
    "Primeiro dia com Virtude Excelente.",
    "Incomum",
    "classification",
    { value: "Virtude Excelente" }
  ),
  make(
    "class-perfect-first",
    "Primeira Virtude Perfeita",
    "Primeiro dia com Virtude Perfeita.",
    "Incomum",
    "classification",
    { value: "Virtude Perfeita" }
  ),
  make(
    "class-good-3",
    "3 Dias de Virtude Boa",
    "Somou três dias com Virtude Boa.",
    "Comum",
    "classificationTotal",
    { value: "Virtude Boa", total: 3 }
  ),
  make(
    "class-good-7",
    "7 Dias de Virtude Boa",
    "Somou sete dias com Virtude Boa.",
    "Incomum",
    "classificationTotal",
    { value: "Virtude Boa", total: 7 }
  ),
  make(
    "class-good-10",
    "10 Dias de Virtude Boa",
    "Somou dez dias com Virtude Boa.",
    "Raro",
    "classificationTotal",
    { value: "Virtude Boa", total: 10 }
  ),
  make(
    "class-excellent-3",
    "3 Dias Excelentes",
    "Somou três dias com Virtude Excelente.",
    "Incomum",
    "classificationTotal",
    { value: "Virtude Excelente", total: 3 }
  ),
  make(
    "class-excellent-7",
    "7 Dias Excelentes",
    "Somou sete dias com Virtude Excelente.",
    "Raro",
    "classificationTotal",
    { value: "Virtude Excelente", total: 7 }
  ),
  make(
    "class-excellent-10",
    "10 Dias Excelentes",
    "Somou dez dias com Virtude Excelente.",
    "Épico",
    "classificationTotal",
    { value: "Virtude Excelente", total: 10 }
  ),
  make(
    "class-perfect-3",
    "3 Dias Perfeitos",
    "Somou três dias com Virtude Perfeita.",
    "Raro",
    "classificationTotal",
    { value: "Virtude Perfeita", total: 3 }
  ),
  make(
    "class-perfect-7",
    "7 Dias Perfeitos",
    "Somou sete dias com Virtude Perfeita.",
    "Épico",
    "classificationTotal",
    { value: "Virtude Perfeita", total: 7 }
  ),
  make(
    "reward-excellent-7",
    "7 Dias Excelente — Prêmio (Massagem)",
    "Sete dias excelentes consecutivos. Um presente do caminho.",
    "Lendário",
    "excellentStreak",
    { value: 7 },
    { isRealReward: true }
  ),
  make(
    "reward-perfect-7",
    "7 Dias Perfeito — Prêmio (Presente + Massagem)",
    "Sete dias perfeitos consecutivos. O caminho celebra você.",
    "Lendário",
    "perfectStreak",
    { value: 7 },
    { isRealReward: true }
  ),
  make(
    "habit-essentials",
    "Guardião dos Essenciais",
    "Completou todos os hábitos essenciais em um dia.",
    "Incomum",
    "essentialsComplete"
  ),
  make(
    "habit-discipline",
    "Disciplina em Ação",
    "Concluiu 10 hábitos em um único dia.",
    "Raro",
    "habitsCompleted",
    { value: 10 }
  ),
  make(
    "habit-consistency",
    "Constância Silenciosa",
    "Completou 50 hábitos no total.",
    "Incomum",
    "habitTotal",
    { value: 50 }
  ),
  make(
    "habit-no-escape",
    "Dia Sem Fugas",
    "Dia perfeito sem pular nenhum essencial.",
    "Épico",
    "perfectEssentials"
  ),
  make(
    "habit-rebirth",
    "Renascimento",
    "Retomou hábitos após uma semana difícil.",
    "Raro",
    "habitReactivation"
  ),
  make(
    "habit-ascension",
    "Ascensão",
    "Completou 200 hábitos no total.",
    "Épico",
    "habitTotal",
    { value: 200 }
  ),
  make(
    "journal-first",
    "Primeira Reflexão",
    "Registrou sua primeira entrada no diário.",
    "Comum",
    "journal",
    { value: 1 }
  ),
  make(
    "journal-3",
    "Diário em 3 Dias",
    "Escreveu no diário em três dias distintos.",
    "Comum",
    "journal",
    { value: 3 }
  ),
  make(
    "journal-7",
    "Diário em 7 Dias",
    "Uma semana de reflexões.",
    "Incomum",
    "journal",
    { value: 7 }
  ),
  make(
    "journal-30",
    "Diário em 30 Dias",
    "Trinta dias de registros conscientes.",
    "Raro",
    "journal",
    { value: 30 }
  ),
  make(
    "journal-honesty",
    "Honestidade Emocional",
    "Registrou emoções difíceis com coragem.",
    "Incomum",
    "journalEmotion",
    { type: "dificil" }
  ),
  make(
    "journal-gratitude",
    "Gratidão Viva",
    "Preencheu as três gratidões no diário.",
    "Comum",
    "journalGratitude"
  ),
  make(
    "journal-written",
    "O Caminho Escrito",
    "Acumulou 500 palavras no diário.",
    "Raro",
    "journalWords",
    { value: 500 }
  ),
  make(
    "journal-clarity",
    "Clareza do Sábio",
    "Registrou insights de clareza por 7 dias.",
    "Épico",
    "journalInsight",
    { value: 7 }
  ),
  make(
    "dream-first",
    "Primeiro Sonho",
    "Registrou o primeiro sonho no diário onírico.",
    "Comum",
    "dream",
    { value: 1 }
  ),
  make(
    "dream-7",
    "Sonhos em 7 Dias",
    "Uma semana registrando sonhos.",
    "Incomum",
    "dream",
    { value: 7 }
  ),
  make(
    "dream-30",
    "Sonhos em 30 Dias",
    "Trinta sonhos registrados.",
    "Raro",
    "dream",
    { value: 30 }
  ),
  make(
    "dream-lucid",
    "Sonhador Lúcido",
    "Registrou um sonho lúcido.",
    "Épico",
    "dreamLucid"
  ),
  make(
    "dream-patterns",
    "Padrões Revelados",
    "Marcou três sonhos recorrentes.",
    "Raro",
    "dreamRecurring",
    { value: 3 }
  ),
  make(
    "dream-archive",
    "Arquivista Onírico",
    "Usou tags em 10 sonhos.",
    "Incomum",
    "dreamTags",
    { value: 10 }
  ),
  make(
    "dream-portal",
    "Portal Aberto",
    "Registrou sonhos com alta clareza.",
    "Épico",
    "dreamClarity",
    { value: 5 }
  ),
  make(
    "treasure-first",
    "Primeiro Tesouro",
    "Salvou sua primeira frase tesouro.",
    "Comum",
    "treasure",
    { value: 1 }
  ),
  make(
    "treasure-collector",
    "Colecionador de Tesouros",
    "Salvou 10 frases tesouro.",
    "Incomum",
    "treasure",
    { value: 10 }
  ),
  make(
    "treasure-library",
    "Biblioteca do Sábio",
    "Salvou 30 frases tesouro.",
    "Raro",
    "treasure",
    { value: 30 }
  ),
  make(
    "treasure-rare",
    "Tesouros Raros",
    "Favoritou uma frase rara.",
    "Raro",
    "treasureFavorite"
  ),
  make(
    "treasure-mantra",
    "Mantra Vivo",
    "Usou uma frase como mantra do dia por 7 dias.",
    "Épico",
    "treasureMantra",
    { value: 7 }
  ),
  make(
    "treasure-seed",
    "Semeador de Consciência",
    "Compartilhou um tesouro com alguém.",
    "Incomum",
    "treasureShare"
  ),
  make(
    "treasure-meaning",
    "Guardião do Significado",
    "Salvou um tesouro com nota pessoal.",
    "Raro",
    "treasureNote"
  ),
  make(
    "level-2",
    "Level 2",
    "Alcançou o Level 2.",
    "Comum",
    "level",
    { value: 2 }
  ),
  make(
    "level-5",
    "Level 5",
    "Alcançou o Level 5.",
    "Incomum",
    "level",
    { value: 5 }
  ),
  make(
    "level-10",
    "Level 10",
    "Alcançou o Level 10.",
    "Raro",
    "level",
    { value: 10 }
  ),
  make(
    "level-15",
    "Level 15",
    "Alcançou o Level 15.",
    "Épico",
    "level",
    { value: 15 }
  ),
  make(
    "level-20",
    "Level 20",
    "Alcançou o Level 20.",
    "Épico",
    "level",
    { value: 20 }
  ),
  make(
    "level-25",
    "Level 25",
    "Alcançou o Level 25.",
    "Lendário",
    "level",
    { value: 25 }
  ),
  make(
    "level-30",
    "Level 30",
    "Alcançou o Level 30.",
    "Lendário",
    "level",
    { value: 30 }
  ),
  make(
    "mission-first",
    "Primeira Missão",
    "Concluiu a primeira missão.",
    "Comum",
    "mission",
    { value: 1 }
  ),
  make(
    "mission-10",
    "10 Missões",
    "Concluiu 10 missões.",
    "Incomum",
    "mission",
    { value: 10 }
  ),
  make(
    "mission-50",
    "50 Missões",
    "Concluiu 50 missões.",
    "Raro",
    "mission",
    { value: 50 }
  ),
  make(
    "mission-200",
    "200 Missões",
    "Concluiu 200 missões.",
    "Lendário",
    "mission",
    { value: 200 }
  ),
  make(
    "mission-priority",
    "Prioridade Alta",
    "Concluiu missões de alta prioridade.",
    "Incomum",
    "missionPriority"
  ),
  make(
    "mission-week",
    "Semana Eficiente",
    "Concluiu 7 missões em uma semana.",
    "Raro",
    "missionWeekly",
    { value: 7 }
  ),
  make(
    "random-dawn",
    "Clareza ao Amanhecer",
    "Presente raro do caminho: a manhã trouxe clareza.",
    "Raro",
    "random",
    { chance: 0.03 },
    { isRandom: true }
  ),
  make(
    "random-silence",
    "Silêncio Interno",
    "Presente raro do caminho: o silêncio falou.",
    "Raro",
    "random",
    { chance: 0.03 },
    { isRandom: true }
  ),
  make(
    "random-rectitude",
    "Retidão Sutil",
    "Presente raro do caminho: retidão sem anúncio.",
    "Raro",
    "random",
    { chance: 0.03 },
    { isRandom: true }
  ),
  make(
    "random-presence",
    "Presença Real",
    "Presente raro do caminho: presença plena.",
    "Raro",
    "random",
    { chance: 0.03 },
    { isRandom: true }
  ),
  make(
    "random-gold",
    "Ouro na Rotina",
    "Presente raro do caminho: brilho inesperado.",
    "Épico",
    "random",
    { chance: 0.02 },
    { isRandom: true }
  ),
  make(
    "random-persistent",
    "Sábio Persistente",
    "Presente raro do caminho: constância rara.",
    "Épico",
    "random",
    { chance: 0.02 },
    { isRandom: true }
  ),
  make(
    "random-serene",
    "Disciplina Serena",
    "Presente raro do caminho: disciplina suave.",
    "Épico",
    "random",
    { chance: 0.02 },
    { isRandom: true }
  ),
  make(
    "random-portal",
    "Portal da Consciência",
    "Presente raro do caminho: expansão súbita.",
    "Lendário",
    "random",
    { chance: 0.01 },
    { isRandom: true }
  )
];
