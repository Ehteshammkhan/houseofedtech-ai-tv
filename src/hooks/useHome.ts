import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/constants';
import { contentService } from '@/api';

export const useHome = () => {
  return useQuery({
    queryKey: QUERY_KEYS.HOME_FEED,
    queryFn: () => contentService.getHomeFeed(),
  });
};
