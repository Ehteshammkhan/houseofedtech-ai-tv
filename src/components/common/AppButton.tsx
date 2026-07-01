import type { ReactNode } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

import { AppText } from './AppText';

type AppButtonVariant = 'primary' | 'secondary' | 'ghost';

type AppButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: AppButtonVariant;
  leftIcon?: ReactNode;
  style?: ViewStyle;
};

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  leftIcon,
  style,
}: AppButtonProps) {
  const { colors } = useTheme();

  const backgroundColor =
    variant === 'primary'
      ? colors.primary
      : variant === 'secondary'
        ? colors.surfaceMuted
        : 'transparent';

  const textColor = variant === 'primary' ? '#FFFFFF' : colors.text;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor,
          opacity: pressed ? 0.82 : 1,
          borderColor: variant === 'ghost' ? colors.border : backgroundColor,
        },
        style,
      ]}
    >
      {leftIcon}
      <AppText variant="bodyMedium" color={textColor}>
        {title}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 46,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    borderWidth: 1,
  },
});
