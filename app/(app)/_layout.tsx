import { colors } from '@/constants';
import { useThemeStore } from '@/store';
import { Stack } from 'expo-router';

export default function AppLayout() {
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme);
  const themeColors = colors[resolvedTheme];
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: themeColors.background },
        headerTitleStyle: { color: themeColors.foreground, fontWeight: '600' },
        headerTintColor: themeColors.primary,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: themeColors.background },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="task/[id]" options={{ title: 'Task Detail', headerBackTitle: 'Back' }} />
      <Stack.Screen
        name="task/new"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
