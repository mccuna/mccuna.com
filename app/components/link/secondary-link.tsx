import clsx from 'clsx';
import { forwardRef } from 'react';
import { StyledLink, StyledLinkProps } from '.';

export type SecondaryLinkProps = {
  hasLightBackground?: boolean;
} & StyledLinkProps;

export const SecondaryLink = forwardRef<HTMLAnchorElement, SecondaryLinkProps>(
  ({ className, hasLightBackground, ...otherProps }, ref) => {
    return (
      <StyledLink
        className={clsx(
          className,
          'text-indigo-300',
          hasLightBackground && 'hover:text-indigo-700',
          !hasLightBackground && 'hover:text-indigo-300',
        )}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

SecondaryLink.displayName = 'SecondaryLink';
