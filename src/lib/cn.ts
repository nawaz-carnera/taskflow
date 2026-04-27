import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes intelligently.
 * - Resolves conflicts ("p-4 p-6" → "p-6")
 * - Filters falsy values (`isActive && 'bg-primary-500'`)
 * - Handles arrays, objects, conditionals
 *
 * @example
 * cn('flex-1', isLoading && 'opacity-50', { 'bg-primary-500': isPrimary })
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
