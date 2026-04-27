import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: Check auth state later (Task 13)
  return <Redirect href="/(dev)/components" />;
}
