import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';

import { profileService } from '@/api';

export const useProfile = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PROFILE,
    queryFn: () => profileService.getProfile(),
  });
};
