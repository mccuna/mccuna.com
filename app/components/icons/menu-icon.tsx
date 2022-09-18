import clsx from 'clsx';
import { FC } from 'react';
import { IconProps } from './types';

export const MenuIcon: FC<IconProps> = ({ className }) => {
  // heroicons/outline/menu
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
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  );
};
