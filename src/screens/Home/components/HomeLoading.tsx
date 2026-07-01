import { StyleSheet, View } from 'react-native';

import { AppText, ScreenContainer } from '@/components';
import { spacing } from '@/theme';

export function HomeLoading() {
  return (
    <ScreenContainer>
      <View style={styles.center}>
        <AppText variant="h3">Loading AITV+...</AppText>
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
});
