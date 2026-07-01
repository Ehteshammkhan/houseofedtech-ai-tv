import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { spacing } from '@/theme';

type Props = {
  query: string;
};

export function SearchEmptyState({ query }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <AppText variant="h3">No results found</AppText>
      <AppText variant="body" color={colors.textMuted} style={styles.message}>
        Try searching for AI, Excel, Finance, or Power BI.
      </AppText>

      {query ? (
        <AppText variant="caption" color={colors.textMuted} style={styles.query}>
          Search query: {query}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing['3xl'],
    alignItems: 'center',
  },
  message: {
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  query: {
    marginTop: spacing.md,
  },
});
