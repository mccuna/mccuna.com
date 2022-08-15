import clsx from 'clsx';
import { forwardRef } from 'react';
import { StyledButton, StyledButtonProps } from './styled-button';

export const PrimaryButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ children, className, ...otherProps }, ref) => {
    return (
      <StyledButton
        className={clsx(
          'bg-indigo-500 text-slate-200 hover:bg-indigo-700 disabled:bg-indigo-300',
          className,
        )}
        ref={ref}
        {...otherProps}>
        {children}
      </StyledButton>
    );
  },
);

PrimaryButton.displayName = 'PrimaryButton';
