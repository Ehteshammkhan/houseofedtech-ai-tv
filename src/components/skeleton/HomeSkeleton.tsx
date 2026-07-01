import { StyleSheet, View } from 'react-native';

import { ScreenContainer } from '@/components/common';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

export function HomeSkeleton() {
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View style={[styles.lineSmall, { backgroundColor: colors.surfaceMuted }]} />
        <View style={[styles.avatar, { backgroundColor: colors.surfaceMuted }]} />
      </View>

      <View style={[styles.hero, { backgroundColor: colors.surfaceMuted }]} />

      {[1, 2, 3].map((section) => (
        <View key={section} style={styles.section}>
          <View style={[styles.line, { backgroundColor: colors.surfaceMuted }]} />

          <View style={styles.row}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={[styles.card, { backgroundColor: colors.surfaceMuted }]} />
            ))}
          </View>
        </View>
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineSmall: {
    width: 140,
    height: 28,
    borderRadius: radius.md,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: radius.full,
  },
  hero: {
    height: 430,
    marginHorizontal: spacing.lg,
    borderRadius: radius['2xl'],
  },
  section: {
    marginTop: spacing['2xl'],
    paddingHorizontal: spacing.lg,
  },
  line: {
    width: 180,
    height: 22,
    borderRadius: radius.md,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  card: {
    width: 130,
    height: 190,
    borderRadius: radius.lg,
  },
});
