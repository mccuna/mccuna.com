import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  className?: string;
};

const ChevronDoubleDown: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(className)}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
      />
    </svg>
  );
};

export default ChevronDoubleDown;