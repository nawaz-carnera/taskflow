import { View, type ViewProps } from 'react-native';
import { cn } from '@/lib';

type CardVariant = 'elevated' | 'outlined' | 'flat';

interface CardProps extends ViewProps {
  variant?: CardVariant;
  className?: string;
}

export function Card({ variant = 'elevated', className, children, ...rest }: CardProps) {
  return (
    <View
      className={cn(
        'rounded-lg bg-card p-4',
        variant === 'elevated' && 'shadow-sm',
        variant === 'outlined' && 'border border-border',
        variant === 'flat' && '',
        className,
      )}
      {...rest}
    >
      {children}
    </View>
  );
}
