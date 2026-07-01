import { Pressable, ScrollView, StyleSheet } from 'react-native';

import { Chip } from '@/components';
import { spacing } from '@/theme';

type Props = {
  filters: string[];
  selectedFilter: string;
  onSelectFilter: (filter: string) => void;
};

export function FilterChips({ filters, selectedFilter, onSelectFilter }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {filters.map((filter) => (
        <Pressable key={filter} onPress={() => onSelectFilter(filter)}>
          <Chip label={filter === selectedFilter ? `${filter} ✓` : filter} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
    paddingVertical: spacing.lg,
  },
});
