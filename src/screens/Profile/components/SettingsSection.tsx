import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';
import type { ProfileMenuItem } from '@/types';

import { MenuItem } from './MenuItem';

type Props = {
  menu: ProfileMenuItem[];
};

export function SettingsSection({ menu }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.section}>
      <AppText variant="h3">Settings</AppText>

      <View style={[styles.card, { backgroundColor: colors.surface }]}>
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: spacing['2xl'],
  },
  card: {
    marginTop: spacing.md,
    borderRadius: radius.xl,
    overflow: 'hidden',
  },
});
