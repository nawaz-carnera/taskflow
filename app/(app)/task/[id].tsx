import { View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Screen, Text, Button, Card } from '@/components/ui';

export default function TaskDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <Screen scrollable>
      <View className="gap-4 py-4">
        <Card variant="outlined">
          <Text variant="overline" color="muted" className="mb-2">
            Task ID
          </Text>
          <Text variant="h3">{id}</Text>
        </Card>

        <Text color="muted">Real task content will be wired up in Task 17.</Text>

        <Button label="Go Back" variant="secondary" onPress={() => router.back()} />
      </View>
    </Screen>
  );
}
