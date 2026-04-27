import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { colorScheme } from 'nativewind';
import { useThemeStore } from '@/store';
import '../src/styles/global.css';

export default function RootLayout() {
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);

  useEffect(() => {
    colorScheme.set(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}
