import { HeroCard } from '@/components';
import type { ContentItem } from '@/types';

type HomeHeroProps = {
  item: ContentItem;
  onPress: (item: ContentItem) => void;
};

export function HomeHero({ item, onPress }: HomeHeroProps) {
  return <HeroCard item={item} onPress={onPress} />;
}
