import { useMemo, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AppText, ScreenContainer } from '@/components';
import { useHome, useTheme } from '@/hooks';
import { spacing } from '@/theme';
import type { ContentItem } from '@/types';
import type { HomeStackParamList } from '@/navigation';

import { FilterChips, SearchBar, SearchResults, TrendingSearches } from './components';

type Navigation = NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;

const FILTERS = ['All', 'AI', 'Finance', 'Excel', 'Python', 'Power BI'];

const TRENDING = ['Prompt Engineering', 'AI Automation', 'Power BI', 'Stock Market'];

export function SearchScreen() {
  const navigation = useNavigation<Navigation>();
  const { colors } = useTheme();
  const { data, isLoading, refetch, isRefetching } = useHome();

  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const allItems = useMemo(() => {
    if (!data) return [];

    return [data.hero, ...data.sections.flatMap((section) => section.items)];
  }, [data]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allItems.filter((item) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.subtitle.toLowerCase().includes(normalizedQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      const matchesFilter = selectedFilter === 'All' || item.tags.includes(selectedFilter);

      return matchesQuery && matchesFilter;
    });
  }, [allItems, query, selectedFilter]);

  const handlePressItem = (item: ContentItem) => {
    navigation.navigate('DetailScreen', {
      itemId: item.id,
    });
  };

  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor={colors.primary}
          />
        }
      >
        <View style={styles.header}>
          <AppText variant="caption" color={colors.primary}>
            DISCOVER
          </AppText>
          <AppText variant="h2">Find your next skill</AppText>
          <AppText variant="body" color={colors.textMuted} style={styles.subtitle}>
            Search learning paths, AI workshops, finance courses, and productivity lessons.
          </AppText>
        </View>

        <SearchBar value={query} onChangeText={setQuery} />

        <FilterChips
          filters={FILTERS}
          selectedFilter={selectedFilter}
          onSelectFilter={setSelectedFilter}
        />

        <TrendingSearches items={TRENDING} onSelect={setQuery} />

        {isLoading ? (
          <View style={styles.loading}>
            <AppText variant="body" color={colors.textMuted}>
              Loading discovery feed...
            </AppText>
          </View>
        ) : (
          <SearchResults items={filteredItems} query={query} onPressItem={handlePressItem} />
        )}
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingBottom: spacing['4xl'],
  },
  header: {
    marginBottom: spacing.lg,
  },
  subtitle: {
    marginTop: spacing.sm,
  },
  loading: {
    paddingVertical: spacing['3xl'],
  },
});
