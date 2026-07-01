import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { AppButton } from '@/components';
import { spacing } from '@/theme';

export function ActionButtons() {
  return (
    <View style={styles.container}>
      <AppButton
        title="Start Learning"
        leftIcon={<Ionicons name="play" size={18} color="#FFFFFF" />}
      />
      <AppButton
        title="Save"
        variant="secondary"
        leftIcon={<Ionicons name="heart-outline" size={18} color="#FFFFFF" />}
      />
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
