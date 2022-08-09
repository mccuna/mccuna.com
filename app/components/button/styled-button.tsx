import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export const StyledButton = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, className, ...otherProps }, ref) => {
  return (
    <button
      className={clsx(
        'p-3 cursor-pointer rounded-xl transition ease-in-out hover:scale-105',
        className,
      )}
      ref={ref}
      {...otherProps}>
      {children}
    </button>
  );
});

StyledButton.displayName = 'StyledButton';
