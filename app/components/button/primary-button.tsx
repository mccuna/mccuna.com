import clsx from 'clsx';
import { forwardRef } from 'react';
import { StyledButton, StyledButtonProps } from './styled-button';

export const PrimaryButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <StyledButton
        className={clsx(
          'bg-indigo-500 text-slate-200 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:pointer-events-none',
          className,
        )}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

PrimaryButton.displayName = 'PrimaryButton';
