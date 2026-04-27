/**
 * Theme tokens — raw values for cases where Tailwind classes can't be used.
 *
 * Examples: Reanimated worklets, chart libraries, native module configs,
 * StatusBar tint, navigation theme.
 *
 * For UI styling, ALWAYS prefer Tailwind classes. Only reach for these
 * when you literally cannot use a className.
 */

export const colors = {
  light: {
    background: 'rgb(255, 255, 255)',
    foreground: 'rgb(15, 23, 42)',
    card: 'rgb(255, 255, 255)',
    cardForeground: 'rgb(15, 23, 42)',
    muted: 'rgb(241, 245, 249)',
    mutedForeground: 'rgb(100, 116, 139)',
    border: 'rgb(226, 232, 240)',
    input: 'rgb(226, 232, 240)',
    ring: 'rgb(99, 102, 241)',
    primary: 'rgb(99, 102, 241)',
    primaryForeground: 'rgb(255, 255, 255)',
    success: 'rgb(34, 197, 94)',
    warning: 'rgb(234, 179, 8)',
    danger: 'rgb(239, 68, 68)',
  },
  dark: {
    background: 'rgb(15, 23, 42)',
    foreground: 'rgb(248, 250, 252)',
    card: 'rgb(30, 41, 59)',
    cardForeground: 'rgb(248, 250, 252)',
    muted: 'rgb(30, 41, 59)',
    mutedForeground: 'rgb(148, 163, 184)',
    border: 'rgb(51, 65, 85)',
    input: 'rgb(51, 65, 85)',
    ring: 'rgb(129, 140, 248)',
    primary: 'rgb(129, 140, 248)',
    primaryForeground: 'rgb(255, 255, 255)',
    success: 'rgb(34, 197, 94)',
    warning: 'rgb(250, 204, 21)',
    danger: 'rgb(248, 113, 113)',
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;

export const radius = {
  none: 0,
  sm: 4,
  DEFAULT: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  full: 9999,
} as const;

export type ColorScheme = 'light' | 'dark';
export type ThemeColors = typeof colors.light;
