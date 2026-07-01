import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';
import type { UserProfile } from '@/types';

type Props = {
  profile: UserProfile;
};

export function ProfileHeader({ profile }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.header}>
      <Image source={{ uri: profile.avatar }} style={styles.avatar} contentFit="cover" />

      <View style={styles.info}>
        <AppText variant="h2">{profile.name}</AppText>

        <AppText variant="body" color={colors.textMuted}>
          {profile.email}
        </AppText>

        <View style={[styles.planBadge, { backgroundColor: colors.primary }]}>
          <AppText variant="caption" color="#FFFFFF">
            {profile.plan}
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    marginBottom: spacing['2xl'],
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: radius.full,
  },
  info: {
    flex: 1,
  },
  planBadge: {
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
});
