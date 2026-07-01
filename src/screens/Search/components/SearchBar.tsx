import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

import { useTheme } from '@/hooks';
import { radius, spacing } from '@/theme';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
};

export function SearchBar({ value, onChangeText }: Props) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <Ionicons name="search-outline" size={22} color={colors.textMuted} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search courses, workshops, topics..."
        placeholderTextColor={colors.textMuted}
        style={[styles.input, { color: colors.text }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
});
