export type ContentType = "movie" | "series" | "course" | "live" | "short";

export type ContentItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  backdrop: string;
  type: ContentType;
  duration: string;
  rating: string;
  year: string;
  tags: string[];
  progress?: number;
  isLive?: boolean;
};

export type ContentSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: ContentItem[];
};

export type HomeFeed = {
  hero: ContentItem;
  sections: ContentSection[];
};