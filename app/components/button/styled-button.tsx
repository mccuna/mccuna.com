import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ButtonSize } from './types';

export type StyledButtonProps = {
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ children, className, size: customSize, ...otherProps }, ref) => {
    const size = customSize ?? 'default';

    return (
      <button
        className={clsx(
          'cursor-pointer rounded-xl transition ease-in-out hover:scale-105',
          size === 'default' && 'p-3 font-medium',
          size === 'large' && 'p-4 font-medium text-2xl',
          className,
        )}
        ref={ref}
        {...otherProps}>
        {children}
      </button>
    );
  },
);

StyledButton.displayName = 'StyledButton';
