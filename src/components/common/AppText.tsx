import type { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

import { useTheme } from '@/hooks';
import { typography } from '@/theme';

type AppTextVariant = keyof typeof typography;

type AppTextProps = TextProps & {
  children: ReactNode;
  variant?: AppTextVariant;
  color?: string;
};

export function AppText({ children, variant = 'body', color, style, ...props }: AppTextProps) {
  const { colors } = useTheme();

  return (
    <Text style={[typography[variant], { color: color ?? colors.text }, style]} {...props}>
      {children}
    </Text>
  );
}
