import { HorizontalCarousel } from '@/components';
import type { ContentItem, ContentSection } from '@/types';

type HomeSectionsProps = {
  sections: ContentSection[];
  onPressItem: (item: ContentItem) => void;
};

export function HomeSections({ sections, onPressItem }: HomeSectionsProps) {
  return sections.map((section) => (
    <HorizontalCarousel key={section.id} section={section} onPressItem={onPressItem} />
  ));
}
