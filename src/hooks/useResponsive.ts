import { useWindowDimensions } from 'react-native';

export type DeviceSize = 'sm' | 'md' | 'lg' | 'xl';

interface ResponsiveInfo {
  width: number;
  height: number;
  size: DeviceSize;
  isPhone: boolean;
  isTablet: boolean;
  isLandscape: boolean;
}

const BREAKPOINTS = {
  sm: 0, // < 640px (small phones — iPhone SE)
  md: 640, // 640+ (large phones)
  lg: 768, // 768+ (small tablets — iPad Mini)
  xl: 1024, // 1024+ (large tablets, foldables)
} as const;

function getDeviceSize(width: number): DeviceSize {
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  return 'sm';
}

export function useResponsive(): ResponsiveInfo {
  const { width, height } = useWindowDimensions();
  const size = getDeviceSize(width);

  return {
    width,
    height,
    size,
    isPhone: size === 'sm' || size === 'md',
    isTablet: size === 'lg' || size === 'xl',
    isLandscape: width > height,
  };
}
