import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { AppButton, AppText, ScreenContainer } from '@/components';
import { useHome } from '@/hooks';
import { spacing } from '@/theme';
import type { HomeStackParamList } from '@/navigation';

import { DetailHero, LearningOutcomes, RelatedCourses } from './components';

type DetailRouteProp = RouteProp<HomeStackParamList, 'DetailScreen'>;

export function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute<DetailRouteProp>();
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
        <DetailHero item={selectedItem} onBack={() => navigation.goBack()} />

        <View style={styles.aboutSection}>
          <AppText variant="h3">About this content</AppText>
          <AppText variant="body" style={styles.description}>
            {selectedItem.description}
          </AppText>
        </View>

        <LearningOutcomes />

        <RelatedCourses items={relatedItems} />

        <View style={styles.footerSpace} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  aboutSection: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing['2xl'],
  },
  description: {
    marginTop: spacing.sm,
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
