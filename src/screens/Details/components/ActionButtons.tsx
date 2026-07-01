import { StyleSheet, View } from 'react-native';

import { AppButton } from '@/components';
import { spacing } from '@/theme';

export function ActionButtons() {
  return (
    <View style={styles.container}>
      <AppButton title="Start Learning" />
      <AppButton title="Save" variant="secondary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.xl,
  },
});
