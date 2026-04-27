/**
 * Typed route paths for Expo Router.
 * Always use these constants instead of raw strings to enable
 * "find usages" refactoring and prevent typos.
 */

export const ROUTES = {
  // Auth
  LOGIN: '/(auth)/login',
  SIGNUP: '/(auth)/signup',
  FORGOT_PASSWORD: '/(auth)/forgot-password',

  // App tabs
  TASKS: '/(app)/(tabs)',
  PROJECTS: '/(app)/(tabs)/projects',
  NOTIFICATIONS: '/(app)/(tabs)/notifications',
  PROFILE: '/(app)/(tabs)/profile',

  // Task routes
  TASK_NEW: '/(app)/task/new',
  TASK_DETAIL: (id: string) => `/(app)/task/${id}` as const,

  // Dev
  COMPONENT_SHOWCASE: '/(dev)/components',
} as const;
