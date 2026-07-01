import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

import { AppButton } from './AppButton';
import { AppText } from './AppText';

type EmptyStateProps = {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({ title, message, actionLabel, onAction }: EmptyStateProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: colors.surfaceMuted }]}>
        <Ionicons name="search-circle-outline" size={42} color={colors.primary} />
      </View>

      <AppText variant="h3" style={styles.title}>
        {title}
      </AppText>

      <AppText variant="body" color={colors.textMuted} style={styles.message}>
        {message}
      </AppText>

      {actionLabel && onAction ? (
        <AppButton title={actionLabel} onPress={onAction} style={styles.button} />
      ) : null}
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
