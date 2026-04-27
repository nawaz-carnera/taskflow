import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen, Text, Button, Card } from '@/components/ui';
import { ROUTES } from '@/constants';

export default function TasksScreen() {
  const router = useRouter();

  return (
    <Screen scrollable>
      <View className="gap-4 py-4">
        <Text variant="h2">Welcome to TaskFlow</Text>
        <Text color="muted">Tap below to test navigation. Real screens coming soon.</Text>

        <Card variant="outlined">
          <Text variant="label" className="mb-3">
            Navigation Tests
          </Text>
          <View className="gap-2">
            <Button
              label="Open Task #abc123"
              variant="primary"
              onPress={() => router.push(ROUTES.TASK_DETAIL('abc123'))}
            />
            <Button
              label="New Task (Modal)"
              variant="secondary"
              onPress={() => router.push(ROUTES.TASK_NEW)}
            />
            <Button
              label="Go to Showcase"
              variant="ghost"
              onPress={() => router.push(ROUTES.COMPONENT_SHOWCASE)}
            />
            <Button
              label="Sign Out (Mock)"
              variant="danger"
              onPress={() => router.replace(ROUTES.LOGIN)}
            />
          </View>
        </Card>

        <Text variant="caption" color="muted">
          Note: router.push adds to history (back button works). router.replace removes the current
          screen from history (used for logout).
        </Text>
      </View>
    </Screen>
  );
}
