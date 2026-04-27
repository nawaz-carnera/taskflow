import { View } from 'react-native';
import { Screen, Text } from '@/components/ui';

export default function NotificationsScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text variant="h2">Notifications</Text>
        <Text color="muted">Coming in Task 23.</Text>
      </View>
    </Screen>
  );
}
