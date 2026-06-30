import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { queryClient } from '@/lib';
import { useTheme } from '@/hooks';

function AppContent() {
  const { colors, isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>AITV+ Setup Working</Text>

      <Pressable onPress={toggleTheme} style={[styles.button, { backgroundColor: colors.primary }]}>
        <Text style={styles.buttonText}>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</Text>
      </Pressable>

      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 999,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
