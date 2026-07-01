import { EmptyState } from '@/components';

type Props = {
  query: string;
};

export function SearchEmptyState({ query }: Props) {
  return (
    <EmptyState
      title="No courses found"
      message={
        query
          ? `No results found for "${query}". Try AI, Excel, Finance, or Power BI.`
          : 'Try searching for AI, Excel, Finance, or Power BI.'
      }
    />
  );
}
