import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes } from 'react';

export type StyledInputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
  ({ className, hasError, ...otherProps }, ref) => {
    return (
      <input
        className={clsx(
          `text-slate-700 p-3 border-2 rounded-md group-focus-within:outline group-focus-within:outline-offset-2 group-focus-within:outline-2 group-focus-within:outline-slate-200`,
          hasError && 'border-red-500 group-hover:border-red-700',
          !hasError && 'border-slate-700 group-hover:border-indigo-500',
          className,
        )}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

StyledInput.displayName = 'StyledInput';
