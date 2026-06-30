import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/common';
import { useTheme } from '@/hooks';
import { spacing } from '@/theme';

type CarouselHeaderProps = {
  title: string;
  subtitle?: string;
};

export function CarouselHeader({ title, subtitle }: CarouselHeaderProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View>
        <AppText variant="h3">{title}</AppText>
        {subtitle ? (
          <AppText variant="caption" color={colors.textMuted}>
            {subtitle}
          </AppText>
        ) : null}
      </View>

      <AppText variant="caption" color={colors.primary}>
        See all
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
