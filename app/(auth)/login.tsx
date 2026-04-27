import { View, Text, Pressable } from 'react-native';
import { useThemeStore } from '@/store';
import type { ThemePreference } from '@/store/theme.store';

export default function LoginScreen() {
  const preference = useThemeStore((state) => state.preference);
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);
  const setPreference = useThemeStore((state) => state.setPreference);

  const themes: ThemePreference[] = ['light', 'dark', 'system'];

  return (
    <View className="flex-1 items-center justify-center bg-background p-6">
      <Text className="mb-2 font-bold text-3xl text-foreground">TaskFlow</Text>
      <Text className="mb-8 text-base text-muted-foreground">Theme system is working ✨</Text>

      <View className="mb-6 w-full rounded-lg border border-border bg-card p-4">
        <Text className="mb-1 text-sm text-muted-foreground">Current Preference</Text>
        <Text className="mb-3 font-semibold text-lg text-card-foreground">{preference}</Text>
        <Text className="mb-1 text-sm text-muted-foreground">Resolved Theme</Text>
        <Text className="font-semibold text-lg text-card-foreground">{resolvedTheme}</Text>
      </View>

      <View className="w-full flex-row gap-2">
        {themes.map((theme) => (
          <Pressable
            key={theme}
            onPress={() => setPreference(theme)}
            className={`flex-1 rounded-md p-3 ${
              preference === theme ? 'bg-primary-500' : 'border border-border bg-muted'
            }`}
          >
            <Text
              className={`text-center font-medium capitalize ${
                preference === theme ? 'text-white' : 'text-foreground'
              }`}
            >
              {theme}
            </Text>
          </Pressable>
        ))}
      </View>

      <View className="mt-8 w-full rounded-lg bg-success p-3">
        <Text className="text-center font-semibold text-white">Success State</Text>
      </View>
      <View className="mt-2 w-full rounded-lg bg-warning p-3">
        <Text className="text-center font-semibold text-foreground">Warning State</Text>
      </View>
      <View className="mt-2 w-full rounded-lg bg-danger p-3">
        <Text className="text-center font-semibold text-white">Danger State</Text>
      </View>
    </View>
  );
}
