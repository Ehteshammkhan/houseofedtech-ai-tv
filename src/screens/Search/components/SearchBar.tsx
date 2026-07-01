import { StyleSheet, TextInput } from 'react-native';

import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
};

export function SearchBar({ value, onChangeText }: Props) {
  const { colors } = useTheme();

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Search courses, workshops, topics..."
      placeholderTextColor={colors.textMuted}
      style={[
        styles.input,
        {
          backgroundColor: colors.surface,
          color: colors.text,
          borderColor: colors.border,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 54,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    fontSize: 15,
    borderWidth: 1,
  },
});
