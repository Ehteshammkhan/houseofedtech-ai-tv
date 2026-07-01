import { StyleSheet, View } from 'react-native';

import { ScreenContainer } from '@/components/common';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

export function DetailSkeleton() {
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={[styles.hero, { backgroundColor: colors.surfaceMuted }]}>
        <View style={[styles.back, { backgroundColor: colors.surface }]} />

        <View style={styles.bottom}>
          <View style={[styles.lineSmall, { backgroundColor: colors.surface }]} />
          <View style={[styles.title, { backgroundColor: colors.surface }]} />
          <View style={[styles.line, { backgroundColor: colors.surface }]} />
        </View>
      </View>

      <View style={styles.section}>
        <View style={[styles.heading, { backgroundColor: colors.surfaceMuted }]} />
        <View style={[styles.paragraph, { backgroundColor: colors.surfaceMuted }]} />
        <View style={[styles.paragraphShort, { backgroundColor: colors.surfaceMuted }]} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 540,
  },
  back: {
    width: 80,
    height: 44,
    borderRadius: radius.full,
    margin: spacing.lg,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.xl,
    gap: spacing.md,
  },
  lineSmall: {
    width: 120,
    height: 16,
    borderRadius: radius.md,
  },
  title: {
    width: '85%',
    height: 38,
    borderRadius: radius.md,
  },
  line: {
    width: '65%',
    height: 18,
    borderRadius: radius.md,
  },
  section: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  heading: {
    width: 180,
    height: 24,
    borderRadius: radius.md,
  },
  paragraph: {
    width: '100%',
    height: 18,
    borderRadius: radius.md,
  },
  paragraphShort: {
    width: '75%',
    height: 18,
    borderRadius: radius.md,
  },
});
