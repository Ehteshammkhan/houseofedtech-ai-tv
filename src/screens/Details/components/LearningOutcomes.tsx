import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

export function LearningOutcomes() {
  const { colors } = useTheme();

  const outcomes = [
    'Practical workflow examples',
    'Industry best practices',
    'Hands-on implementation',
  ];

  return (
    <View style={styles.container}>
      <AppText variant="h3">Learning Outcomes</AppText>

      {outcomes.map((item) => (
        <View key={item} style={styles.row}>
          <View style={[styles.dot, { backgroundColor: colors.primary }]} />

          <AppText variant="body" color={colors.textMuted}>
            {item}
          </AppText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing['2xl'],
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
  },
});
