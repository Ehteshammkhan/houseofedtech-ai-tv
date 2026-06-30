import { ScrollView, StyleSheet, Switch, View } from 'react-native';
import { Image } from 'expo-image';

import { AppText, ScreenContainer } from '@/components';
import { useProfile, useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

export function ProfileScreen() {
  const { colors, isDarkMode, toggleTheme } = useTheme();
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
        <View style={styles.header}>
          <Image source={{ uri: data.avatar }} style={styles.avatar} contentFit="cover" />

          <View style={styles.profileInfo}>
            <AppText variant="h2">{data.name}</AppText>
            <AppText variant="body" color={colors.textMuted}>
              {data.email}
            </AppText>

            <View style={[styles.planBadge, { backgroundColor: colors.primary }]}>
              <AppText variant="caption" color="#FFFFFF">
                {data.plan}
              </AppText>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <StatCard label="Hours" value={String(data.learningHours)} />
          <StatCard label="Completed" value={String(data.completedCourses)} />
          <StatCard label="Streak" value={`${data.streakDays}d`} />
        </View>

        <View style={styles.section}>
          <AppText variant="h3">Settings</AppText>

          <View style={[styles.menuCard, { backgroundColor: colors.surface }]}>
            {data.menu.map((item) => {
              const isAppearance = item.id === 'appearance';

              return (
                <View key={item.id} style={[styles.menuItem, { borderBottomColor: colors.border }]}>
                  <View style={styles.menuIcon}>
                    <AppText variant="title">{getMenuIcon(item.icon)}</AppText>
                  </View>

                  <View style={styles.menuText}>
                    <AppText variant="bodyMedium">{item.title}</AppText>
                    <AppText variant="caption" color={colors.textMuted}>
                      {item.subtitle}
                    </AppText>
                  </View>

                  {isAppearance ? (
                    <Switch
                      value={isDarkMode}
                      onValueChange={toggleTheme}
                      thumbColor="#FFFFFF"
                      trackColor={{
                        false: colors.surfaceMuted,
                        true: colors.primary,
                      }}
                    />
                  ) : (
                    <AppText variant="h3" color={colors.textMuted}>
                      ›
                    </AppText>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.version}>
          <AppText variant="caption" color={colors.textMuted}>
            AITV+ v1.0.0 • Built with Expo
          </AppText>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.statCard, { backgroundColor: colors.surface }]}>
      <AppText variant="h3">{value}</AppText>
      <AppText variant="caption" color={colors.textMuted}>
        {label}
      </AppText>
    </View>
  );
}

function getMenuIcon(icon: string) {
  const icons: Record<string, string> = {
    download: '⬇',
    bell: '🔔',
    'theme-light-dark': '◐',
    'help-circle': '?',
  };

  return icons[icon] ?? '•';
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingTop: spacing['4xl'],
    paddingBottom: spacing['4xl'],
  },
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
  profileInfo: {
    flex: 1,
  },
  planBadge: {
    alignSelf: 'flex-start',
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    padding: spacing.lg,
    borderRadius: radius.xl,
    alignItems: 'center',
  },
  section: {
    marginTop: spacing['2xl'],
  },
  menuCard: {
    marginTop: spacing.md,
    borderRadius: radius.xl,
    overflow: 'hidden',
  },
  menuItem: {
    minHeight: 76,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  menuIcon: {
    width: 34,
  },
  menuText: {
    flex: 1,
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
