import { View, ScrollView, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from '@/store';
import { cn } from '@/lib';
import type { ReactNode } from 'react';

interface ScreenProps extends ViewProps {
  /** Wrap content in a ScrollView */
  scrollable?: boolean;
  /** Apply safe area top padding */
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  /** Padding preset */
  padded?: boolean;
  className?: string;
  children: ReactNode;
}

export function Screen({
  scrollable = false,
  edges = ['top', 'bottom'],
  padded = true,
  className,
  children,
  ...rest
}: ScreenProps) {
  const insets = useSafeAreaInsets();
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);

  const safeAreaStyle = {
    paddingTop: edges.includes('top') ? insets.top : 0,
    paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
    paddingLeft: edges.includes('left') ? insets.left : 0,
    paddingRight: edges.includes('right') ? insets.right : 0,
  };

  const Container = scrollable ? ScrollView : View;
  const containerProps = scrollable
    ? { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: 'handled' as const }
    : {};

  return (
    <View className="flex-1 bg-background" {...rest}>
      <StatusBar style={resolvedTheme === 'dark' ? 'light' : 'dark'} />
      <Container
        style={safeAreaStyle}
        className={cn('flex-1', padded && 'px-4', className)}
        {...containerProps}
      >
        {children}
      </Container>
    </View>
  );
}
