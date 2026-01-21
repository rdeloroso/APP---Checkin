import { PrismaClient } from "@prisma/client";
import { ACHIEVEMENTS } from "../data/conquistas";
import { LEVELS } from "../data/levels";

const prisma = new PrismaClient();

const sampleHabits = [
  {
    name: "Respiração consciente",
    icon: "🫁",
    category: "Consciência",
    type: "duration",
    targetValue: 5,
    scheduleMode: "daily",
    scheduleDays: null,
    timesPerWeek: null,
    timeWindow: "morning",
    isEssential: true,
    isActive: true,
    xpReward: 12,
    pointsReward: 5
  },
  {
    name: "Leitura reflexiva",
    icon: "📖",
    category: "Conhecimento",
    type: "count",
    targetValue: 8,
    scheduleMode: "daily",
    scheduleDays: null,
    timesPerWeek: null,
    timeWindow: "night",
    isEssential: true,
    isActive: true,
    xpReward: 15,
    pointsReward: 6
  },
  {
    name: "Movimento consciente",
    icon: "🧘",
    category: "Corpo",
    type: "duration",
    targetValue: 15,
    scheduleMode: "daily",
    scheduleDays: null,
    timesPerWeek: null,
    timeWindow: "any",
    isEssential: false,
    isActive: true,
    xpReward: 20,
    pointsReward: 8
  }
];

const treasureQuotes = [
  "A virtude é o hábito que transforma o invisível em escolha diária.",
  "A disciplina suave é a ponte entre intenção e caráter.",
  "Quando o coração desacelera, a virtude encontra espaço.",
  "A gratidão é o fogo que mantém o espírito aquecido.",
  "O silêncio revela caminhos que a pressa esconde."
];

const randomFrom = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Guardião",
      email: "demo@caminho.com",
      passwordHash: "demo",
      settings: {
        create: {
          dayCloseHour: 2,
          animationsIntensity: "medium",
          perfectDayRule: "essentials",
          dashboardWidgetsOrder: ["xp", "points", "level", "streak", "insights"]
        }
      },
      progress: {
        create: {
          totalXp: 0,
          level: 1,
          points: 0,
          currentStreak: 0,
          bestStreak: 0,
          excellentDaysTotal: 0,
          perfectDaysTotal: 0,
          excellentStreak: 0,
          perfectStreak: 0,
          totalCheckins: 0,
          achievementsUnlocked: [],
          lastCheckinDate: null
        }
      }
    }
  });

  const createdHabits = await prisma.habit.createMany({
    data: sampleHabits.map((habit, index) => ({
      ...habit,
      userId: user.id,
      sortOrder: index
    }))
  });

  const habits = await prisma.habit.findMany({ where: { userId: user.id } });

  let totalXp = 0;
  let totalPoints = 0;
  let currentStreak = 0;
  let bestStreak = 0;
  let excellentStreak = 0;
  let perfectStreak = 0;
  let excellentDaysTotal = 0;
  let perfectDaysTotal = 0;

  for (let i = 89; i >= 0; i -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const planned = habits.length;
    const completed = Math.max(0, Math.round(planned * (0.5 + Math.random() * 0.5)));
    const percent = Math.round((completed / planned) * 100);
    let classification = "Virtude Boa";
    if (percent <= 25) classification = "Reiniciar Amanhã";
    else if (percent <= 50) classification = "Virtude Regular";
    else if (percent <= 75) classification = "Virtude Boa";
    else if (percent <= 95) classification = "Virtude Excelente";
    else classification = "Virtude Perfeita";

    if (classification === "Virtude Excelente") {
      excellentDaysTotal += 1;
      excellentStreak += 1;
      perfectStreak = 0;
    } else if (classification === "Virtude Perfeita") {
      perfectDaysTotal += 1;
      perfectStreak += 1;
      excellentStreak = 0;
    } else {
      excellentStreak = 0;
      perfectStreak = 0;
    }

    currentStreak += 1;
    bestStreak = Math.max(bestStreak, currentStreak);

    const xpEarned = completed * 15 + (classification === "Virtude Excelente" ? 30 : 0) +
      (classification === "Virtude Perfeita" ? 60 : 0);
    const pointsEarned = completed * 6 + (classification === "Virtude Excelente" ? 10 : 0) +
      (classification === "Virtude Perfeita" ? 20 : 0);

    totalXp += xpEarned;
    totalPoints += pointsEarned;

    const checkin = await prisma.dailyCheckin.create({
      data: {
        userId: user.id,
        date,
        totalPlannedHabits: planned,
        totalCompletedHabits: completed,
        percentComplete: percent,
        classification,
        xpEarned,
        pointsEarned
      }
    });

    await prisma.dailyHabitStatus.createMany({
      data: habits.map((habit, index) => ({
        dailyCheckinId: checkin.id,
        habitId: habit.id,
        completed: index < completed,
        valueBool: habit.type === "boolean" ? index < completed : null,
        valueNumber: habit.type !== "boolean" ? (index < completed ? habit.targetValue ?? 1 : 0) : null
      }))
    });

    if (i % 4 === 0) {
      await prisma.journalEntry.create({
        data: {
          userId: user.id,
          date,
          reflections: "Dia de consciência e pequenas vitórias.",
          gratitude1: "Respiração calma",
          gratitude2: "Tempo para ler",
          gratitude3: "Silêncio noturno",
          emotions: ["Gratidão", "Paz"],
          dayRating: 7,
          energyLevel: 6,
          stressLevel: 4,
          achievedToday: "Mantive meus essenciais",
          tomorrowGoals: "Dormir cedo",
          isPrivate: false
        }
      });
    }

    if (i % 7 === 0) {
      await prisma.dream.create({
        data: {
          userId: user.id,
          date,
          title: "Jardim de símbolos",
          content: "Caminhei por um bosque antigo e ouvi um sino distante.",
          emotions: ["Mistério", "Encantamento"],
          tags: ["bosque", "sino"],
          lucidDream: i % 21 === 0,
          recurringDream: i % 14 === 0,
          clarityLevel: 4
        }
      });
    }
  }

  for (const quote of treasureQuotes) {
    await prisma.wisdomQuote.create({
      data: {
        userId: user.id,
        quote,
        author: "Caminho do Sábio",
        category: "Virtude",
        isFavorite: Math.random() > 0.6,
        source: "Biblioteca do Sábio"
      }
    });
  }

  for (let i = 0; i < 12; i += 1) {
    await prisma.note.create({
      data: {
        userId: user.id,
        title: `Nota ${i + 1}`,
        contentMarkdown: "## Insight\n\n- Um símbolo\n- Um hábito\n- Uma escolha",
        tags: ["virtude", "ritual"],
        isFavorite: i % 3 === 0,
        isPinned: i % 4 === 0,
        color: null,
        icon: "✨"
      }
    });
  }

  const unlocked = ACHIEVEMENTS.slice(0, 15).map((achievement) => achievement.id);
  const level = LEVELS.reduce((acc, item) => (totalXp >= item.thresholdXp ? item.level : acc), 1);

  await prisma.userProgress.update({
    where: { userId: user.id },
    data: {
      totalXp,
      level,
      points: totalPoints,
      currentStreak,
      bestStreak,
      excellentDaysTotal,
      perfectDaysTotal,
      excellentStreak,
      perfectStreak,
      totalCheckins: 90,
      achievementsUnlocked: unlocked,
      lastCheckinDate: new Date()
    }
  });

  console.log("Demo gerado com sucesso.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
