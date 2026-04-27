import { Stack } from 'expo-router';
import { useThemeStore } from '@/store';
import { colors } from '@/constants';

export default function AuthLayout() {
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme);
  const themeColors = colors[resolvedTheme];
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: themeColors.background },
      }}
    />
  );
}
