import { StyleSheet, View } from 'react-native';

import { AppText, ContentCard } from '@/components';
import { spacing } from '@/theme';
import type { ContentItem } from '@/types';

import { SearchEmptyState } from './SearchEmptyState';

type Props = {
  items: ContentItem[];
  query: string;
  onPressItem: (item: ContentItem) => void;
};

export function SearchResults({ items, query, onPressItem }: Props) {
  if (items.length === 0) {
    return <SearchEmptyState query={query} />;
  }

  return (
    <View style={styles.container}>
      <AppText variant="h3">Results</AppText>

      <View style={styles.grid}>
        {items.map((item) => (
          <ContentCard key={item.id} item={item} onPress={onPressItem} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing['2xl'],
  },
  grid: {
    marginTop: spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
});
