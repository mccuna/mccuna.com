import { Link, LinkProps } from '@remix-run/react';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export type ExternalStyledLinkProps = ComponentPropsWithoutRef<'a'> & {
  isExternalLink: true;
};

export type InternalStyledLinkProps = {
  isExternalLink?: undefined;
} & LinkProps;

export type StyledLinkProps = ExternalStyledLinkProps | InternalStyledLinkProps;

export const StyledLink = forwardRef<HTMLAnchorElement, StyledLinkProps>(
  (props, ref) => {
    const { isExternalLink, className: customClassName, ...otherProps } = props;

    const className = clsx(customClassName, 'underline-on-hover');

    if (isExternalLink) {
      const {
        children,
        target: customTarget,
        rel: customRel,
        ...otherExternalLinkProps
      } = otherProps;
      return (
        <a
          className={className}
          ref={ref}
          target={customTarget || '_blank'}
          rel={customRel || 'noreferrer'}
          {...otherExternalLinkProps}>
          {children}
        </a>
      );
    }
    const { children, ...otherInternalProps } = props;

    return (
      <Link className={className} ref={ref} {...otherInternalProps}>
        {children}
      </Link>
    );
  },
);
