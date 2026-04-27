import { create } from 'zustand';
import { Appearance } from 'react-native';

export type ThemePreference = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

interface ThemeState {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (preference: ThemePreference) => void;
}

const getResolvedTheme = (preference: ThemePreference): ResolvedTheme => {
  if (preference === 'system') {
    return Appearance.getColorScheme() ?? 'light';
  }
  return preference;
};

export const useThemeStore = create<ThemeState>((set) => ({
  preference: 'system',
  resolvedTheme: getResolvedTheme('system'),
  setPreference: (preference) =>
    set({
      preference,
      resolvedTheme: getResolvedTheme(preference),
    }),
}));

// Listen for system theme changes when preference is 'system'
Appearance.addChangeListener(({ colorScheme }) => {
  const { preference } = useThemeStore.getState();
  if (preference === 'system') {
    useThemeStore.setState({
      resolvedTheme: colorScheme ?? 'light',
    });
  }
});
