import { ActivityIndicator, View } from 'react-native';
import { useThemeStore } from '@/store';
import { colors } from '@/constants';
import { cn } from '@/lib';

type SpinnerSize = 'sm' | 'md' | 'lg';

interface SpinnerProps {
  size?: SpinnerSize;
  /** Color override — defaults to primary */
  color?: string;
  className?: string;
}

const sizeMap: Record<SpinnerSize, 'small' | 'large' | number> = {
  sm: 'small',
  md: 'large',
  lg: 48,
};

export function Spinner({ size = 'md', color, className }: SpinnerProps) {
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);
  const themeColors = colors[resolvedTheme];
  const spinnerColor = color ?? themeColors.primary;

  return (
    <View accessibilityRole="progressbar" className={cn('items-center', className)}>
      <ActivityIndicator size={sizeMap[size]} color={spinnerColor} />
    </View>
  );
}
