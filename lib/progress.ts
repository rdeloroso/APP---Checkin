import { LEVELS } from "../data/levels";

export const CLASSIFICATIONS = [
  "Reiniciar Amanhã",
  "Virtude Regular",
  "Virtude Boa",
  "Virtude Excelente",
  "Virtude Perfeita"
] as const;

export type Classification = (typeof CLASSIFICATIONS)[number];

export type PerfectDayRule = "all" | "essentials" | "80percent";

export const getClassification = (percentComplete: number): Classification => {
  if (percentComplete <= 25) return "Reiniciar Amanhã";
  if (percentComplete <= 50) return "Virtude Regular";
  if (percentComplete <= 75) return "Virtude Boa";
  if (percentComplete <= 95) return "Virtude Excelente";
  return "Virtude Perfeita";
};

export const applyPerfectDayRule = (
  percentComplete: number,
  essentialsCompleted: boolean,
  rule: PerfectDayRule
): Classification => {
  if (rule === "all") {
    return percentComplete === 100 ? "Virtude Perfeita" : getClassification(percentComplete);
  }
  if (rule === "essentials") {
    if (essentialsCompleted && percentComplete >= 80) {
      return "Virtude Perfeita";
    }
    return getClassification(percentComplete);
  }
  if (percentComplete >= 95) {
    return "Virtude Perfeita";
  }
  return getClassification(percentComplete);
};

export const calculateRewards = (
  habitRewards: { xp: number; points: number }[],
  classification: Classification
) => {
  const base = habitRewards.reduce(
    (acc, reward) => {
      acc.xp += reward.xp;
      acc.points += reward.points;
      return acc;
    },
    { xp: 0, points: 0 }
  );

  if (classification === "Virtude Excelente") {
    base.xp += 30;
    base.points += 10;
  }
  if (classification === "Virtude Perfeita") {
    base.xp += 60;
    base.points += 20;
  }

  return base;
};

export const getLevelByXp = (xp: number) => {
  let current = LEVELS[0];
  for (const level of LEVELS) {
    if (xp >= level.thresholdXp) {
      current = level;
    }
  }
  return current;
};
