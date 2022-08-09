import clsx from 'clsx';
import { FC } from 'react';
import { FieldError } from '~/types/action-data';

export type ErrorMessageProps = {
  errorMessage?: FieldError;
  className?: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage, className }) => {
  return (
    <p className={clsx('text-red-500 group-hover:text-rose-700', className)}>
      {errorMessage}
    </p>
  );
};

export default ErrorMessage;
