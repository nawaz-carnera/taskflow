import { Redirect } from 'expo-router';
import { ROUTES } from '@/constants';

export default function Index() {
  // TODO: Check auth state later (Task 13)
  return <Redirect href={ROUTES.TASKS} />;
}
