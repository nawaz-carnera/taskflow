import { View } from 'react-native';
import { cn } from '@/lib';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({ orientation = 'horizontal', className }: DividerProps) {
  return (
    <View
      accessibilityRole="none"
      className={cn(
        'bg-border',
        orientation === 'horizontal' && 'h-px w-full',
        orientation === 'vertical' && 'w-px self-stretch',
        className,
      )}
    />
  );
}
