import { StyleSheet, View } from 'react-native';

import { ScreenContainer } from '@/components/common';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

export function ProfileSkeleton() {
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={[styles.avatar, { backgroundColor: colors.surfaceMuted }]} />
          <View style={styles.info}>
            <View style={[styles.lineLarge, { backgroundColor: colors.surfaceMuted }]} />
            <View style={[styles.lineSmall, { backgroundColor: colors.surfaceMuted }]} />
          </View>
        </View>

        <View style={styles.stats}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={[styles.stat, { backgroundColor: colors.surfaceMuted }]} />
          ))}
        </View>

        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={[styles.menu, { backgroundColor: colors.surfaceMuted }]} />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    gap: spacing.lg,
    marginBottom: spacing['2xl'],
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: radius.full,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.sm,
  },
  lineLarge: {
    width: '75%',
    height: 24,
    borderRadius: radius.md,
  },
  lineSmall: {
    width: '55%',
    height: 18,
    borderRadius: radius.md,
  },
  stats: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing['2xl'],
  },
  stat: {
    flex: 1,
    height: 82,
    borderRadius: radius.xl,
  },
  menu: {
    height: 76,
    borderRadius: radius.xl,
    marginBottom: spacing.md,
  },
});
