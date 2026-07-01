import { ScrollView, StyleSheet } from 'react-native';

import { AppText, ContentCard } from '@/components';
import { spacing } from '@/theme';
import type { ContentItem } from '@/types';

type Props = {
  items: ContentItem[];
};

export function RelatedCourses({ items }: Props) {
  return (
    <>
      <AppText variant="h3" style={styles.title}>
        More Like This
      </AppText>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: spacing['2xl'],
    marginHorizontal: spacing.lg,
  },

  list: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
});
