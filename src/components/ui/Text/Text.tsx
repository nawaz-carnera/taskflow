import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { cn } from '@/lib';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'body-lg'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'overline';

type TextColor = 'foreground' | 'muted' | 'primary' | 'success' | 'warning' | 'danger' | 'inherit';

interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
}

export function Text({
  variant = 'body',
  color = 'foreground',
  className,
  children,
  ...rest
}: TextProps) {
  return (
    <RNText
      className={cn(
        // variants
        variant === 'h1' && 'font-bold text-4xl',
        variant === 'h2' && 'font-bold text-3xl',
        variant === 'h3' && 'font-semibold text-2xl',
        variant === 'h4' && 'font-semibold text-xl',
        variant === 'body-lg' && 'text-lg',
        variant === 'body' && 'text-base',
        variant === 'body-sm' && 'text-sm',
        variant === 'caption' && 'text-xs',
        variant === 'label' && 'font-medium text-sm',
        variant === 'overline' && 'font-semibold text-2xs uppercase tracking-wider',
        // colors
        color === 'foreground' && 'text-foreground',
        color === 'muted' && 'text-muted-foreground',
        color === 'primary' && 'text-primary-500',
        color === 'success' && 'text-success',
        color === 'warning' && 'text-warning',
        color === 'danger' && 'text-danger',
        // overrides
        className,
      )}
      {...rest}
    >
      {children}
    </RNText>
  );
}
