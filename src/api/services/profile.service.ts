import profileData from '@/data/profile.json';

import { delay } from '@/api/client';
import type { UserProfile } from '@/types';

class ProfileService {
  async getProfile(): Promise<UserProfile> {
    await delay();

    return profileData as UserProfile;
  }
}

export const profileService = new ProfileService();
