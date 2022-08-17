import { Link, LinkProps } from '@remix-run/react';
import clsx from 'clsx';
import { AnchorHTMLAttributes, forwardRef } from 'react';

export type ExternalStyledLinkProps = {
  isExternalLink: true;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export type InternalStyledLinkProps = {
  isExternalLink?: undefined;
} & LinkProps;

export type StyledLinkProps = ExternalStyledLinkProps | InternalStyledLinkProps;

export const StyledLink = forwardRef<HTMLAnchorElement, StyledLinkProps>(
  (props, ref) => {
    const className = clsx(props.className, 'underline-on-hover');

    if (areExternalLinkProps(props)) {
      const {
        className: _, // ignore, already set above
        children,
        target: customTarget,
        ...otherProps
      } = props;
      return (
        <a
          className={className}
          ref={ref}
          target={customTarget || '_blank'}
          {...otherProps}>
          {children}
        </a>
      );
    }
    const {
      className: _, // ignore, already set above
      children,
      ...otherProps
    } = props;

    return (
      <Link className={className} ref={ref} {...otherProps}>
        {children}
      </Link>
    );
  },
);

const areExternalLinkProps = (
  props: StyledLinkProps,
): props is ExternalStyledLinkProps => {
  return props.isExternalLink === true;
};
