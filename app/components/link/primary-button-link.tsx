import clsx from 'clsx';
import { forwardRef } from 'react';
import { ButtonLink, ButtonLinkProps } from './button-link';

export const PrimaryButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, ...otherProps }, ref) => {
    return (
      <ButtonLink
        className={clsx(
          ' bg-indigo-500 text-slate-200 hover:bg-indigo-700',
          className,
        )}
        ref={ref}
        {...otherProps}
      />
    );
  },
);

PrimaryButtonLink.displayName = 'PrimaryButtonLink';
