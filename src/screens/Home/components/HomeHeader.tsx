import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { spacing } from '@/theme';

export function HomeHeader() {
  const { colors } = useTheme();

  return (
    <View style={styles.header}>
      <View>
        <AppText variant="caption" color={colors.primary}>
          HOUSE OF EDTECH
        </AppText>
        <AppText variant="h2">AITV+</AppText>
      </View>

      <View style={[styles.avatar, { backgroundColor: colors.surfaceMuted }]}>
        <AppText variant="bodyMedium">R</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing['4xl'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
