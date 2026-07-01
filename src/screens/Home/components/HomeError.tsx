import { StyleSheet, View } from 'react-native';

import { AppText, ScreenContainer } from '@/components';
import { useTheme } from '@/hooks';
import { spacing } from '@/theme';

export function HomeError() {
  const { colors } = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.center}>
        <AppText variant="h3">Something went wrong</AppText>
        <AppText variant="body" color={colors.textMuted} style={styles.message}>
          Please pull down to retry.
        </AppText>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  message: {
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});
