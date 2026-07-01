import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

import { AppButton } from './AppButton';
import { AppText } from './AppText';

type ErrorStateProps = {
  title?: string;
  message?: string;
  actionLabel?: string;
  onRetry?: () => void;
};

export function ErrorState({
  title = 'Something went wrong',
  message = 'We could not load this content. Please try again.',
  actionLabel = 'Retry',
  onRetry,
}: ErrorStateProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: colors.surfaceMuted }]}>
        <Ionicons name="alert-circle-outline" size={42} color={colors.error} />
      </View>

      <AppText variant="h3" style={styles.title}>
        {title}
      </AppText>

      <AppText variant="body" color={colors.textMuted} style={styles.message}>
        {message}
      </AppText>

      {onRetry ? <AppButton title={actionLabel} onPress={onRetry} style={styles.button} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing['2xl'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 72,
    height: 72,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    textAlign: 'center',
  },
  message: {
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  button: {
    marginTop: spacing.lg,
  },
});
