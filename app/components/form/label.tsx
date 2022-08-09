import clsx from 'clsx';
import { FC, LabelHTMLAttributes } from 'react';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  hasError?: boolean;
};

export const Label: FC<LabelProps> = ({
  className,
  id,
  children,
  hasError,
}) => {
  return (
    <label
      className={clsx(
        'cursor-pointer text-lg',
        hasError && 'text-red-500 group-hover:text-rose-700',
        !hasError && 'text-slate-200 group-hover:text-indigo-500',
        className,
      )}
      htmlFor={id}>
      {children}
    </label>
  );
};
