import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, View } from 'react-native';

import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';
import type { ContentItem } from '@/types';

import { ActionButtons } from './ActionButtons';
import { DetailMetadata } from './DetailMetadata';

type Props = {
  item: ContentItem;
  onBack: () => void;
};

export function DetailHero({ item, onBack }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.hero}>
      <Image source={{ uri: item.backdrop }} style={StyleSheet.absoluteFill} contentFit="cover" />

      <LinearGradient
        colors={['rgba(0,0,0,.05)', 'rgba(0,0,0,.95)']}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.top}>
        <Pressable
          onPress={onBack}
          style={({ pressed }) => [
            styles.backButton,
            {
              backgroundColor: colors.surfaceMuted,
              opacity: pressed ? 0.8 : 1,
            },
          ]}
        >
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </Pressable>
      </View>

      <View style={styles.bottom}>
        <DetailMetadata item={item} />
        <ActionButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 540,
  },
  top: {
    padding: spacing.lg,
    paddingTop: spacing['4xl'],
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.xl,
  },
});
