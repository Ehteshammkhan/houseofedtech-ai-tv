import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { AppButton, AppText, Chip, ContentCard, ScreenContainer } from '@/components';
import { useHome, useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';
import type { ContentItem } from '@/types';
import type { HomeStackParamList } from '@/navigation';

type DetailRouteProp = RouteProp<HomeStackParamList, 'DetailScreen'>;

export function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute<DetailRouteProp>();
  const { colors } = useTheme();
  const { data } = useHome();

  const selectedItem = useMemo(() => {
    if (!data) return undefined;

    if (data.hero.id === route.params.itemId) {
      return data.hero;
    }

    return data.sections
      .flatMap((section) => section.items)
      .find((item) => item.id === route.params.itemId);
  }, [data, route.params.itemId]);

  const relatedItems = useMemo(() => {
    if (!data || !selectedItem) return [];

    return data.sections
      .flatMap((section) => section.items)
      .filter((item) => item.id !== selectedItem.id)
      .slice(0, 6);
  }, [data, selectedItem]);

  if (!selectedItem) {
    return (
      <ScreenContainer>
        <View style={styles.center}>
          <AppText variant="h3">Content not found</AppText>
          <AppButton
            title="Go Back"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image
            source={{ uri: selectedItem.backdrop }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
          />

          <LinearGradient
            colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.95)']}
            style={StyleSheet.absoluteFill}
          />

          <View style={styles.topBar}>
            <AppButton title="Back" variant="secondary" onPress={() => navigation.goBack()} />
          </View>

          <View style={styles.heroContent}>
            <AppText variant="caption" color="#FFFFFF">
              {selectedItem.subtitle.toUpperCase()}
            </AppText>

            <AppText variant="h1" color="#FFFFFF" style={styles.title}>
              {selectedItem.title}
            </AppText>

            <View style={styles.metaRow}>
              <AppText variant="caption" color="#E5E5E5">
                ⭐ {selectedItem.rating}
              </AppText>
              <AppText variant="caption" color="#E5E5E5">
                {selectedItem.year}
              </AppText>
              <AppText variant="caption" color="#E5E5E5">
                {selectedItem.duration}
              </AppText>
            </View>

            <View style={styles.chips}>
              {selectedItem.tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </View>

            <View style={styles.actions}>
              <AppButton title="Start Learning" />
              <AppButton title="Save" variant="secondary" />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <AppText variant="h3">About this content</AppText>
          <AppText variant="body" color={colors.textMuted} style={styles.description}>
            {selectedItem.description}
          </AppText>
        </View>

        <View style={styles.section}>
          <AppText variant="h3">Key learning outcomes</AppText>

          {[
            'Practical workflow examples',
            'Mobile-first learning experience',
            'Progress-friendly short lessons',
          ].map((item) => (
            <View key={item} style={styles.outcomeRow}>
              <View style={[styles.dot, { backgroundColor: colors.primary }]} />
              <AppText variant="body" color={colors.textMuted}>
                {item}
              </AppText>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <AppText variant="h3">More like this</AppText>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.relatedList}>
            {relatedItems.map((item: ContentItem) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>

        <View style={styles.footerSpace} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 540,
  },
  topBar: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    alignItems: 'flex-start',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.xl,
  },
  title: {
    marginTop: spacing.xs,
  },
  metaRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.md,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing['2xl'],
  },
  description: {
    marginTop: spacing.sm,
  },
  outcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
  },
  relatedList: {
    marginTop: spacing.md,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  backButton: {
    marginTop: spacing.lg,
  },
  footerSpace: {
    height: spacing['4xl'],
  },
});
