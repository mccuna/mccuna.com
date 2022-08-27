import clsx from 'clsx';
import {
  ButtonHTMLAttributes,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';
import { ButtonSize } from './types';

export type StyledButtonProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'type'
> & {
  size?: ButtonSize;
  type: Required<ButtonHTMLAttributes<HTMLButtonElement>['type']>;
};

export const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ children, className, size: customSize, ...otherProps }, ref) => {
    const size = customSize ?? 'default';

    return (
      // The type prop is a required prop so it cannot be omitted
      // eslint-disable-next-line react/button-has-type
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
