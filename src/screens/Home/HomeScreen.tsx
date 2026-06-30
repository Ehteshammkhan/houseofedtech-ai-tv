import { useCallback } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { AppText, HeroCard, HorizontalCarousel, ScreenContainer } from '@/components';
import { useHome, useTheme } from '@/hooks';
import { spacing } from '@/theme';
import type { ContentItem } from '@/types';
import type { HomeStackParamList } from '@/navigation';

type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;

export function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const { colors } = useTheme();

  const { data, isLoading, isError, refetch, isRefetching } = useHome();

  const handlePressItem = useCallback(
    (item: ContentItem) => {
      navigation.navigate('DetailScreen', {
        itemId: item.id,
      });
    },
    [navigation],
  );

  if (isLoading) {
    return (
      <ScreenContainer>
        <View style={styles.center}>
          <AppText variant="h3">Loading AITV+...</AppText>
        </View>
      </ScreenContainer>
    );
  }

  if (isError || !data) {
    return (
      <ScreenContainer>
        <View style={styles.center}>
          <AppText variant="h3">Something went wrong</AppText>
          <AppText variant="body" color={colors.textMuted} style={styles.message}>
            Please pull down to retry.
          </AppText>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={colors.primary}
          />
        }
      >
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

        <HeroCard item={data.hero} onPress={handlePressItem} />

        {data.sections.map((section) => (
          <HorizontalCarousel key={section.id} section={section} onPressItem={handlePressItem} />
        ))}

        <View style={styles.footerSpace} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing['4xl'],
    paddingBottom: spacing.lg,
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
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  message: {
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  footerSpace: {
    height: spacing['4xl'],
  },
});
