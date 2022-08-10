import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { StyledButton } from './styled-button';

export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...otherProps }, ref) => {
  return (
    <StyledButton
      className={clsx(
        'bg-indigo-500 text-slate-200 font-medium hover:bg-indigo-700 disabled:bg-indigo-300',
        className,
      )}
      ref={ref}
      {...otherProps}>
      {children}
    </StyledButton>
  );
});

PrimaryButton.displayName = 'PrimaryButton';
