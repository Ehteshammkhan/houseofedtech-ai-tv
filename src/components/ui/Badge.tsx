import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/common';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

type BadgeProps = {
  label: string;
  tone?: 'primary' | 'live';
};

export function Badge({ label, tone = 'primary' }: BadgeProps) {
  const { colors } = useTheme();

  const backgroundColor = tone === 'live' ? colors.error : colors.primary;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <AppText variant="caption" color="#FFFFFF">
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.full,
  },
});
