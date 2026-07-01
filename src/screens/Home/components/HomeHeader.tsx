import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

export function HomeHeader() {
  const { colors } = useTheme();

  return (
    <View style={styles.header}>
      <View>
        <AppText variant="caption" color={colors.primary}>
          HOUSE OF EDTECH
        </AppText>
        <AppText variant="h2">AITV+</AppText>
      </View>

      <View style={styles.actions}>
        <View style={[styles.iconButton, { backgroundColor: colors.surfaceMuted }]}>
          <MaterialCommunityIcons name="bell-outline" size={22} color={colors.text} />
        </View>

        <View style={[styles.iconButton, { backgroundColor: colors.surfaceMuted }]}>
          <MaterialCommunityIcons name="account-circle-outline" size={24} color={colors.text} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    paddingTop: spacing['4xl'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
