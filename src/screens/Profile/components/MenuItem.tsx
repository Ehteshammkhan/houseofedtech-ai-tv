import { StyleSheet, Switch, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { spacing } from '@/theme';
import type { ProfileMenuItem } from '@/types';

type Props = {
  item: ProfileMenuItem;
};

export function MenuItem({ item }: Props) {
  const { colors, isDarkMode, toggleTheme } = useTheme();
  const isAppearance = item.id === 'appearance';

  return (
    <View style={[styles.item, { borderBottomColor: colors.border }]}>
      <View style={styles.icon}>
        <AppText variant="title">{getMenuIcon(item.icon)}</AppText>
      </View>

      <View style={styles.text}>
        <AppText variant="bodyMedium">{item.title}</AppText>

        <AppText variant="caption" color={colors.textMuted}>
          {item.subtitle}
        </AppText>
      </View>

      {isAppearance ? (
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          thumbColor="#FFFFFF"
          trackColor={{
            false: colors.surfaceMuted,
            true: colors.primary,
          }}
        />
      ) : (
        <AppText variant="h3" color={colors.textMuted}>
          ›
        </AppText>
      )}
    </View>
  );
}

function getMenuIcon(icon: string) {
  const icons: Record<string, string> = {
    download: '⬇',
    bell: '🔔',
    'theme-light-dark': '◐',
    'help-circle': '?',
  };

  return icons[icon] ?? '•';
}

const styles = StyleSheet.create({
  item: {
    minHeight: 76,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  icon: {
    width: 34,
  },
  text: {
    flex: 1,
  },
});
