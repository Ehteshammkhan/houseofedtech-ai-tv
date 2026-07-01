import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppButton, AppText } from '@/components/common';
import { Chip } from '@/components/ui';
import { radius, spacing } from '@/theme';
import type { ContentItem } from '@/types';

type HeroCardProps = {
  item: ContentItem;
  onPress?: (item: ContentItem) => void;
};

function HeroCardComponent({ item, onPress }: HeroCardProps) {
  return (
    <Pressable
      onPress={() => onPress?.(item)}
      style={({ pressed }) => [styles.container, { opacity: pressed ? 0.9 : 1 }]}
    >
      <Image
        source={{ uri: item.backdrop }}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
        transition={300}
      />

      <LinearGradient
        colors={['rgba(0,0,0,0.15)', 'rgba(0,0,0,0.9)']}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.content}>
        <AppText variant="caption" color="#FFFFFF">
          {item.subtitle.toUpperCase()}
        </AppText>

        <AppText variant="h1" color="#FFFFFF" numberOfLines={2} style={styles.title}>
          {item.title}
        </AppText>

        <View style={styles.chips}>
          {item.tags.slice(0, 3).map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </View>

        <AppText variant="body" color="#E5E5E5" numberOfLines={2} style={styles.description}>
          {item.description}
        </AppText>

        <View style={styles.actions}>
          <AppButton
            title="Start Learning"
            onPress={() => onPress?.(item)}
            leftIcon={<Ionicons name="play" size={18} color="#FFFFFF" />}
          />
          <AppButton
            title="Details"
            variant="secondary"
            onPress={() => onPress?.(item)}
            leftIcon={<Ionicons name="information-circle-outline" size={18} color="#FFFFFF" />}
          />
        </View>
      </View>
    </Pressable>
  );
}

export const HeroCard = memo(HeroCardComponent);

const styles = StyleSheet.create({
  container: {
    height: 430,
    marginHorizontal: spacing.lg,
    borderRadius: radius['2xl'],
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.xl,
  },
  title: {
    marginTop: spacing.xs,
  },
  chips: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
    flexWrap: 'wrap',
  },
  description: {
    marginTop: spacing.md,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
});
