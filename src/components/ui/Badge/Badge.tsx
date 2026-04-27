import { View } from 'react-native';
import { cn } from '@/lib';
import { Text } from '../Text';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

export function Badge({ label, variant = 'default', size = 'sm', className }: BadgeProps) {
  return (
    <View
      className={cn(
        'self-start rounded-full',
        size === 'sm' && 'px-2 py-0.5',
        size === 'md' && 'px-2.5 py-1',
        variant === 'default' && 'bg-muted',
        variant === 'primary' && 'bg-primary-500',
        variant === 'success' && 'bg-success',
        variant === 'warning' && 'bg-warning',
        variant === 'danger' && 'bg-danger',
        className,
      )}
    >
      <Text
        className={cn(
          'font-medium',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-sm',
          variant === 'default' && 'text-foreground',
          (variant === 'primary' || variant === 'success' || variant === 'danger') && 'text-white',
          variant === 'warning' && 'text-foreground',
        )}
      >
        {label}
      </Text>
    </View>
  );
}
