import { Link, LinkProps } from '@remix-run/react';
import clsx from 'clsx';
import { forwardRef } from 'react';

export type StyledLinkProps = {} & LinkProps;

export const StyledLink = forwardRef<HTMLAnchorElement, StyledLinkProps>(
  ({ className, children, ...otherProps }, ref) => {
    return (
      <Link
        className={clsx('underline-on-hover', className)}
        ref={ref}
        {...otherProps}>
        {children}
      </Link>
    );
  },
);
