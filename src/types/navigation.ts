import type { ContentItem } from "./content";

export type HomeStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {
    item: ContentItem;
  };
};

export type RootTabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  ProfileTab: undefined;
};