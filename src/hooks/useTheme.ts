import { darkColors, lightColors } from '@/theme';
import { useThemeStore } from '@/store';

export const useTheme = () => {
  const { themeMode, isDarkMode, toggleTheme, setThemeMode } = useThemeStore();

  const colors = isDarkMode ? darkColors : lightColors;

  return {
    colors,
    themeMode,
    isDarkMode,
    toggleTheme,
    setThemeMode,
  };
};