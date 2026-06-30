import { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { ContentCard } from '@/components/cards';
import { spacing } from '@/theme';
import type { ContentItem, ContentSection } from '@/types';
import { CarouselHeader } from './CarouselHeader';

type HorizontalCarouselProps = {
  section: ContentSection;
  onPressItem?: (item: ContentItem) => void;
};

function HorizontalCarouselComponent({ section, onPressItem }: HorizontalCarouselProps) {
  const renderItem = useCallback(
    ({ item }: { item: ContentItem }) => <ContentCard item={item} onPress={onPressItem} />,
    [onPressItem],
  );

  return (
    <View style={styles.container}>
      <CarouselHeader title={section.title} subtitle={section.subtitle} />

      <FlashList
        data={section.items}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        estimatedItemSize={166}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

export const HorizontalCarousel = memo(HorizontalCarouselComponent);

const styles = StyleSheet.create({
  container: {
    marginTop: spacing['2xl'],
  },
  listContent: {
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
  },
});
