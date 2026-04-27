import { View, ScrollView, type ViewProps, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from '@/store';
import { cn } from '@/lib';
import type { ReactNode } from 'react';

type SafeAreaEdge = 'top' | 'bottom' | 'left' | 'right';

interface ScreenProps extends ViewProps {
  /** Wrap content in a ScrollView */
  scrollable?: boolean;
  /** Which safe area edges to respect. Default: top + bottom */
  edges?: SafeAreaEdge[];
  /** Apply default horizontal padding (px-4 / px-8). Set false for full-bleed screens */
  padded?: boolean;
  /** Override status bar style. Default: auto-detected from theme */
  statusBarStyle?: 'light' | 'dark' | 'auto';
  className?: string;
  children: ReactNode;
}

export function Screen({
  scrollable = false,
  edges = ['top', 'bottom'],
  padded = true,
  statusBarStyle,
  className,
  children,
  ...rest
}: ScreenProps) {
  const insets = useSafeAreaInsets();
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const horizontalPadding = isTablet ? 32 : 16;
  const verticalPadding = 0;

  // Safe area as numeric values for use in contentContainerStyle
  const safePaddingTop = edges.includes('top') ? insets.top : 0;
  const safePaddingBottom = edges.includes('bottom') ? insets.bottom : 0;
  const safePaddingLeft = edges.includes('left') ? insets.left : 0;
  const safePaddingRight = edges.includes('right') ? insets.right : 0;

  const resolvedStatusBarStyle = statusBarStyle ?? (resolvedTheme === 'dark' ? 'light' : 'dark');

  const innerPadding = {
    paddingTop: safePaddingTop + verticalPadding,
    paddingBottom: safePaddingBottom + verticalPadding,
    paddingLeft: safePaddingLeft + (padded ? horizontalPadding : 0),
    paddingRight: safePaddingRight + (padded ? horizontalPadding : 0),
  };

  return (
    <View className="flex-1 bg-background" {...rest}>
      <StatusBar style={resolvedStatusBarStyle} />
      {scrollable ? (
        <ScrollView
          className="flex-1"
          contentContainerStyle={[innerPadding, { flexGrow: 1 }]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className={cn('flex-1', className)}>{children}</View>
        </ScrollView>
      ) : (
        <View style={innerPadding} className={cn('flex-1', className)}>
          {children}
        </View>
      )}
    </View>
  );
}
