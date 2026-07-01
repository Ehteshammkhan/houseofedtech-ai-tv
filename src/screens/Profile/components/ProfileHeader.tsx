import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';
import type { UserProfile } from '@/types';

const avatarPlaceholder = require('../../../../assets/images/avatar-placeholder.png');

type Props = {
  profile: UserProfile;
};

export function ProfileHeader({ profile }: Props) {
  const { colors } = useTheme();

  const avatarSource =
    profile.avatar === 'avatar-placeholder' ? avatarPlaceholder : { uri: profile.avatar };

  return (
    <View style={styles.header}>
      <Image source={avatarSource} style={styles.avatar} contentFit="cover" />

      <View style={styles.info}>
        <AppText variant="h2">{profile.name}</AppText>

        <AppText variant="body" color={colors.textMuted}>
          {profile.email}
        </AppText>

        <View style={[styles.planBadge, { backgroundColor: colors.primary }]}>
          <MaterialCommunityIcons name="star" size={14} color="#FFFFFF" />

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
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
});
