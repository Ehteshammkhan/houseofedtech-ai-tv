import { StyleSheet, View } from 'react-native';

import { AppText, Chip } from '@/components';
import { spacing } from '@/theme';
import type { ContentItem } from '@/types';

type Props = {
  item: ContentItem;
};

export function DetailMetadata({ item }: Props) {
  return (
    <>
      <AppText variant="caption" color="#FFFFFF">
        {item.subtitle.toUpperCase()}
      </AppText>

      <AppText variant="h1" color="#FFFFFF" style={styles.title}>
        {item.title}
      </AppText>

      <View style={styles.meta}>
        <AppText variant="caption" color="#E5E5E5">
          ⭐ {item.rating}
        </AppText>

        <AppText variant="caption" color="#E5E5E5">
          {item.year}
        </AppText>

        <AppText variant="caption" color="#E5E5E5">
          {item.duration}
        </AppText>
      </View>

      <View style={styles.tags}>
        {item.tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: spacing.xs,
  },

  meta: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.md,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
});
