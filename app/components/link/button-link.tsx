import { Link, LinkProps } from '@remix-run/react';
import clsx from 'clsx';
import { forwardRef } from 'react';
import { LinkSize } from './types';

export type ButtonLinkProps = {
  size?: LinkSize;
} & LinkProps;

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, size, children, ...otherProps }, ref) => {
    return (
      <Link
        className={clsx(
          'cursor-pointer rounded-2xl text-center transition ease-in-out hover:scale-105',
          className,
          size === 'default' && 'font-medium p-3',
          size === 'large' && 'p-4 font-medium text-2xl',
        )}
        ref={ref}
        {...otherProps}>
        {children}
      </Link>
    );
  },
);

ButtonLink.displayName = 'ButtonLink';
