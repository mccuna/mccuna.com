import { FC } from 'react';

type Props = {
  className?: string;
};

const ChevronLeft: FC<Props> = ({ className }) => {
  // heroicons/solid/chevron-left
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
    </svg>
  );
};

export default ChevronLeft;
