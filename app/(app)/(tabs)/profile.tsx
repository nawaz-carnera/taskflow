import { View } from 'react-native';
import { Screen, Text } from '@/components/ui';

export default function ProfileScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text variant="h2">Profile</Text>
        <Text color="muted">Coming in a future task.</Text>
      </View>
    </Screen>
  );
}
