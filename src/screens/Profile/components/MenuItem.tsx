import { MaterialCommunityIcons } from '@expo/vector-icons';
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
        <MaterialCommunityIcons name={item.icon as never} size={22} color={colors.text} />
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
        <MaterialCommunityIcons name="chevron-right" size={24} color={colors.textMuted} />
      )}
    </View>
  );
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
    width: 38,
  },
  text: {
    flex: 1,
  },
});
