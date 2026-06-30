import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/common';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

type ChipProps = {
  label: string;
};

export function Chip({ label }: ChipProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surfaceMuted, borderColor: colors.border },
      ]}
    >
      <AppText variant="caption" color={colors.text}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    borderWidth: 1,
  },
});
