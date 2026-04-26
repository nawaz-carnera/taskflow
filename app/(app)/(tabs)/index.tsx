import { View, Text } from 'react-native';
import { testAlias } from '@/lib';

export default function TasksScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tasks Screen</Text>
      <Text>{testAlias}</Text>
    </View>
  );
}
