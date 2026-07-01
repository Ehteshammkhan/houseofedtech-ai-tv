import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';
import type { UserProfile } from '@/types';

type Props = {
  profile: UserProfile;
};

export function ProfileStats({ profile }: Props) {
  return (
    <View style={styles.row}>
      <StatCard label="Hours" value={String(profile.learningHours)} />
      <StatCard label="Completed" value={String(profile.completedCourses)} />
      <StatCard label="Streak" value={`${profile.streakDays}d`} />
    </View>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface }]}>
      <AppText variant="h3">{value}</AppText>
      <AppText variant="caption" color={colors.textMuted}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  card: {
    flex: 1,
    padding: spacing.lg,
    borderRadius: radius.xl,
    alignItems: 'center',
  },
});
