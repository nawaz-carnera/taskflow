import { Pressable, ActivityIndicator, View, type PressableProps } from 'react-native';
import { cn } from '@/lib';
import { Text } from '../Text';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<PressableProps, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  loading?: boolean;
  disabled?: boolean;
  /** Optional icon to render before label */
  leftIcon?: ReactNode;
  /** Optional icon to render after label */
  rightIcon?: ReactNode;
  /** Full-width button */
  fullWidth?: boolean;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  label,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const textColor = variant === 'primary' || variant === 'danger' ? 'inherit' : 'foreground';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      className={cn(
        'flex-row items-center justify-center rounded-md',
        // variants
        variant === 'primary' && 'bg-primary-500 active:bg-primary-600',
        variant === 'secondary' && 'bg-muted active:bg-border',
        variant === 'ghost' && 'bg-transparent active:bg-muted',
        variant === 'danger' && 'bg-danger active:opacity-90',
        // sizes
        size === 'sm' && 'h-9 gap-1.5 px-3',
        size === 'md' && 'h-11 gap-2 px-4',
        size === 'lg' && 'h-14 gap-2 px-6',
        // width
        fullWidth && 'w-full',
        // disabled
        isDisabled && 'opacity-50',
        className,
      )}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' || variant === 'danger' ? '#fff' : undefined}
        />
      ) : (
        <>
          {leftIcon ? <View>{leftIcon}</View> : null}
          <Text
            color={textColor}
            className={cn(
              'font-semibold',
              size === 'sm' && 'text-sm',
              size === 'md' && 'text-base',
              size === 'lg' && 'text-lg',
              (variant === 'primary' || variant === 'danger') && 'text-white',
            )}
          >
            {label}
          </Text>
          {rightIcon ? <View>{rightIcon}</View> : null}
        </>
      )}
    </Pressable>
  );
}
