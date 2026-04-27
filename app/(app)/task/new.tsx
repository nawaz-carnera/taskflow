import { View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import { Screen, Text, Button } from '@/components/ui';
import { useThemeStore } from '@/store';
import { colors } from '@/constants';

export default function NewTaskScreen() {
  const router = useRouter();
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme);
  const iconColor = colors[resolvedTheme].foreground;

  return (
    <Screen scrollable={false}>
      <View className="flex-1">
        {/* Custom header */}
        <View className="mb-4 flex-row items-center justify-between">
          <Text variant="h2">New Task</Text>
          <Pressable
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Close"
            hitSlop={12}
            className="rounded-full p-2 active:bg-muted"
          >
            <X size={24} color={iconColor} />
          </Pressable>
        </View>

        <Text color="muted">
          This is a modal. Slides up from bottom on iOS, fade-in on Android. Real form coming in
          Task 16.
        </Text>

        {/* Bottom action bar */}
        <View className="mt-auto gap-2">
          <Button label="Save" variant="primary" onPress={() => router.back()} />
          <Button label="Cancel" variant="ghost" onPress={() => router.back()} />
        </View>
      </View>
    </Screen>
  );
}
