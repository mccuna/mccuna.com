import clsx from 'clsx';
import { forwardRef } from 'react';
import { StyledButtonLink, StyledButtonLinkProps } from './styled-button-link';

export const PrimaryButtonLink = forwardRef<
  HTMLAnchorElement,
  StyledButtonLinkProps
>(({ className, ...otherProps }, ref) => {
  return (
    <StyledButtonLink
      className={clsx(
        ' bg-indigo-500 text-slate-200 hover:bg-indigo-700',
        className,
      )}
      ref={ref}
      {...otherProps}
    />
  );
});

PrimaryButtonLink.displayName = 'PrimaryButtonLink';
