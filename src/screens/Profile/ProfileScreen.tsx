import { Text, View } from 'react-native';

import { useTheme } from '@/hooks';

export function ProfileScreen() {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: colors.text, fontSize: 22, fontWeight: '800' }}>Profile Screen</Text>
    </View>
  );
}
