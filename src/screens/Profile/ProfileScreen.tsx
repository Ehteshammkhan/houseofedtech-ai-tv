import { ScrollView, StyleSheet, View } from 'react-native';

import { AppText, ScreenContainer } from '@/components';
import { useProfile, useTheme } from '@/hooks';
import { spacing } from '@/theme';

import { ProfileHeader, ProfileStats, SettingsSection } from './components';

export function ProfileScreen() {
  const { colors } = useTheme();
  const { data, isLoading } = useProfile();

  if (isLoading || !data) {
    return (
      <ScreenContainer>
        <View style={styles.center}>
          <AppText variant="h3">Loading profile...</AppText>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <ProfileHeader profile={data} />
        <ProfileStats profile={data} />
        <SettingsSection menu={data.menu} />

        <View style={styles.version}>
          <AppText variant="caption" color={colors.textMuted}>
            AITV+ v1.0.0 • Built with Expo
          </AppText>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingBottom: spacing['4xl'],
  },
  version: {
    marginTop: spacing['2xl'],
    alignItems: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
