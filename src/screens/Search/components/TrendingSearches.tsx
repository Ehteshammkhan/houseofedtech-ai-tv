import { Pressable, StyleSheet, View } from 'react-native';

import { AppText, Chip } from '@/components';
import { spacing } from '@/theme';

type Props = {
  items: string[];
  onSelect: (value: string) => void;
};

export function TrendingSearches({ items, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <AppText variant="h3">Trending Searches</AppText>

      <View style={styles.chips}>
        {items.map((item) => (
          <Pressable key={item} onPress={() => onSelect(item)}>
            <Chip label={item} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.sm,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
});
