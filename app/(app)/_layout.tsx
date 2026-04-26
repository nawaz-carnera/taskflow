import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="task/[id]" options={{ headerShown: true, title: 'Task' }} />
      <Stack.Screen name="task/new" options={{ presentation: 'modal', title: 'New Task' }} />
    </Stack>
  );
}
