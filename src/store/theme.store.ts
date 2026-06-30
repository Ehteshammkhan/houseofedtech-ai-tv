import { create } from 'zustand';

import type { ThemeMode } from '@/types';

type ThemeState = {
  themeMode: ThemeMode;
  isDarkMode: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  themeMode: 'dark',
  isDarkMode: true,

  setThemeMode: (mode) =>
    set({
      themeMode: mode,
      isDarkMode: mode === 'dark',
    }),

  toggleTheme: () =>
    set((state) => {
      const nextMode = state.themeMode === 'dark' ? 'light' : 'dark';

      return {
        themeMode: nextMode,
        isDarkMode: nextMode === 'dark',
      };
    }),
}));