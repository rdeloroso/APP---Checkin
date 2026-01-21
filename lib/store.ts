import { create } from "zustand";

export type DashboardWidget = {
  id: string;
  label: string;
  enabled: boolean;
};

type ProgressState = {
  totalXp: number;
  level: number;
  points: number;
  currentStreak: number;
  bestStreak: number;
  excellentStreak: number;
  perfectStreak: number;
  widgets: DashboardWidget[];
  update: (data: Partial<ProgressState>) => void;
};

export const useProgressStore = create<ProgressState>((set) => ({
  totalXp: 1680,
  level: 7,
  points: 420,
  currentStreak: 6,
  bestStreak: 14,
  excellentStreak: 2,
  perfectStreak: 1,
  widgets: [
    { id: "xp", label: "XP", enabled: true },
    { id: "points", label: "Pontos", enabled: true },
    { id: "level", label: "Level", enabled: true },
    { id: "streak", label: "Sequência", enabled: true },
    { id: "insights", label: "Insights", enabled: true }
  ],
  update: (data) => set((state) => ({ ...state, ...data }))
}));
