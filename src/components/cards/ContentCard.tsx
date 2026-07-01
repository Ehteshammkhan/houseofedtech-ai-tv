import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

import { AppText } from '@/components/common';
import { Badge } from '@/components/ui';
import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';
import type { ContentItem } from '@/types';

type ContentCardProps = {
  item: ContentItem;
  onPress?: (item: ContentItem) => void;
};

function ContentCardComponent({ item, onPress }: ContentCardProps) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={() => onPress?.(item)}
      style={({ pressed }) => [styles.container, { opacity: pressed ? 0.85 : 1 }]}
    >
      <View style={styles.imageWrap}>
        <Image
          source={{ uri: item.thumbnail }}
          style={styles.image}
          contentFit="cover"
          transition={250}
        />

        {item.isLive ? (
          <View style={styles.badge}>
            <Badge label="LIVE" tone="live" />
          </View>
        ) : null}
      </View>

      <AppText variant="bodyMedium" numberOfLines={1} style={styles.title}>
        {item.title}
      </AppText>

      <AppText variant="caption" color={colors.textMuted} numberOfLines={1}>
        {item.subtitle}
      </AppText>
    </Pressable>
  );
}

export const ContentCard = memo(ContentCardComponent);

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: spacing.lg,
  },
  imageWrap: {
    width: 150,
    height: 210,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
  },
  title: {
    marginBottom: 2,
  },
});
