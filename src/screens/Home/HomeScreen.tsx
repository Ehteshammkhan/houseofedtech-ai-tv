import { useCallback } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { ScreenContainer } from '@/components';
import { useHome, useTheme } from '@/hooks';
import { spacing } from '@/theme';
import type { ContentItem } from '@/types';
import type { HomeStackParamList } from '@/navigation';
import { HomeError, HomeHeader, HomeHero, HomeLoading, HomeSections } from './components';

type HomeNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;

export function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const { colors } = useTheme();
  const { data, isLoading, isError, refetch, isRefetching } = useHome();

  const handlePressItem = useCallback(
    (item: ContentItem) => {
      navigation.navigate('DetailScreen', { itemId: item.id });
    },
    [navigation],
  );

  if (isLoading) return <HomeLoading />;
  if (isError || !data) return <HomeError />;

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
        <HomeHeader />
        <HomeHero item={data.hero} onPress={handlePressItem} />
        <HomeSections sections={data.sections} onPressItem={handlePressItem} />
        <View style={styles.footerSpace} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  footerSpace: {
    height: spacing['4xl'],
  },
});
