import { TextInput, View, type TextInputProps } from 'react-native';
import { useState, type ReactNode } from 'react';
import { cn } from '@/lib';
import { Text } from '../Text';

interface InputProps extends Omit<TextInputProps, 'style'> {
  /** Field label shown above input */
  label?: string;
  /** Helper text shown below input */
  helperText?: string;
  /** Error message — when set, input shows error state */
  error?: string;
  /** Icon shown on the left side inside the input */
  leftIcon?: ReactNode;
  /** Icon shown on the right side inside the input */
  rightIcon?: ReactNode;
  /** Disable the input */
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
}

export function Input({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  disabled = false,
  className,
  containerClassName,
  onFocus,
  onBlur,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = Boolean(error);

  return (
    <View className={cn('w-full', containerClassName)}>
      {label ? (
        <Text variant="label" className="mb-1.5">
          {label}
        </Text>
      ) : null}

      <View
        className={cn(
          'flex-row items-center rounded-md border bg-input/30 px-3',
          'h-11',
          isFocused && !hasError && 'border-ring',
          !isFocused && !hasError && 'border-border',
          hasError && 'border-danger',
          disabled && 'opacity-50',
        )}
      >
        {leftIcon ? <View className="mr-2">{leftIcon}</View> : null}

        <TextInput
          accessibilityLabel={label}
          accessibilityState={{ disabled }}
          editable={!disabled}
          placeholderTextColor="rgb(148 163 184)"
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          className={cn('flex-1 text-base text-foreground', className)}
          {...rest}
        />

        {rightIcon ? <View className="ml-2">{rightIcon}</View> : null}
      </View>

      {error ? (
        <Text variant="caption" color="danger" className="mt-1">
          {error}
        </Text>
      ) : helperText ? (
        <Text variant="caption" color="muted" className="mt-1">
          {helperText}
        </Text>
      ) : null}
    </View>
  );
}
