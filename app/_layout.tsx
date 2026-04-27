import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { colorScheme } from 'nativewind';
import { useThemeStore } from '@/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../src/styles/global.css';

export default function RootLayout() {
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);

  useEffect(() => {
    colorScheme.set(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(dev)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" />
      </Stack>
    </SafeAreaProvider>
  );
}
