import clsx from 'clsx';
import { forwardRef } from 'react';
import { StyledLink, StyledLinkProps } from './styled-link';

export type PrimaryLinkProps = {
  hasLightBackground?: boolean;
} & StyledLinkProps;

const PrimaryLink = forwardRef<HTMLAnchorElement, PrimaryLinkProps>(
  ({ className, hasLightBackground, ...otherProps }, ref) => {
    return (
      <StyledLink
        className={clsx(
          className,
          'text-indigo-500',
          hasLightBackground && 'hover:text-indigo-700',
          !hasLightBackground && 'hover:text-indigo-300',
        )}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

export default PrimaryLink;
