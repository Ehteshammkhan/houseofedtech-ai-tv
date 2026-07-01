import { ErrorState, ScreenContainer } from '@/components';

type HomeErrorProps = {
  onRetry?: () => void;
};

export function HomeError({ onRetry }: HomeErrorProps) {
  return (
    <ScreenContainer>
      <ErrorState
        title="Unable to load AITV+"
        message="Please check your connection and try again."
        onRetry={onRetry}
      />
    </ScreenContainer>
  );
}
