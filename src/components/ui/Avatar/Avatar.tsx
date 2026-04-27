import { View } from 'react-native';
import { Image } from 'expo-image';
import { cn } from '@/lib';
import { Text } from '../Text';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  /** Image URL */
  source?: string;
  /** Fallback text (typically initials) shown when no source or image fails */
  fallback?: string;
  /** Size variant */
  size?: AvatarSize;
  className?: string;
}

const sizeMap: Record<AvatarSize, { container: string; text: string; pixels: number }> = {
  sm: { container: 'h-8 w-8', text: 'text-xs', pixels: 32 },
  md: { container: 'h-10 w-10', text: 'text-sm', pixels: 40 },
  lg: { container: 'h-14 w-14', text: 'text-lg', pixels: 56 },
  xl: { container: 'h-20 w-20', text: 'text-2xl', pixels: 80 },
};

export function Avatar({ source, fallback, size = 'md', className }: AvatarProps) {
  const { container, text, pixels } = sizeMap[size];
  const initials = fallback?.slice(0, 2).toUpperCase() ?? '??';

  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={fallback ? `Avatar for ${fallback}` : 'Avatar'}
      className={cn(
        'items-center justify-center overflow-hidden rounded-full bg-muted',
        container,
        className,
      )}
    >
      {source ? (
        <Image
          source={source}
          style={{ width: pixels, height: pixels }}
          contentFit="cover"
          transition={200}
        />
      ) : (
        <Text className={cn('font-semibold text-muted-foreground', text)}>{initials}</Text>
      )}
    </View>
  );
}
