import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { spacing } from '@/theme';
import type { ContentItem } from '@/types';

import { ActionButtons } from './ActionButtons';
import { DetailMetadata } from './DetailMetadata';

type Props = {
  item: ContentItem;
  onBack: () => void;
};

export function DetailHero({ item, onBack }: Props) {
  return (
    <View style={styles.hero}>
      <Image
        source={{ uri: item.backdrop }}
        style={StyleSheet.absoluteFillObject}
        contentFit="cover"
      />

      <LinearGradient
        colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.95)']}
        style={StyleSheet.absoluteFillObject}
      />

      <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.8}>
        <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
      </TouchableOpacity>

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
    position: 'relative',
  },

  backButton: {
    position: 'absolute',
    top: 56,
    left: 20,

    width: 40,
    height: 40,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(0,0,0,0.45)',

    zIndex: 100,
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.xl,
  },
});
