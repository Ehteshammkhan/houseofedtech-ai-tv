import homeData from '@/data/home.json';
import detailData from '@/data/detail.json';

import { delay, simulateNetworkError } from '@/api/client';
import type { HomeFeed } from '@/types';

class ContentService {
  async getHomeFeed(): Promise<HomeFeed> {
    await delay();

    simulateNetworkError();

    return homeData as HomeFeed;
  }

  async getDetail() {
    await delay();

    return detailData;
  }
}

export const contentService = new ContentService();
