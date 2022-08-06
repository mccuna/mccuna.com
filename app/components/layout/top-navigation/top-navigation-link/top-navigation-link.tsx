import { NavLink } from '@remix-run/react';
import clsx from 'clsx';
import { forwardRef, PropsWithChildren } from 'react';

type Props = {
  to: string;
  className?: string;
  // The Headless UI dropdown adds its own props to the NavLink component.
} & Record<string, unknown>;

const TopNavigationLink = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<Props>
>(({ to, className, children, ...otherProps }, ref) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(isActive ? activeClassName : inactiveClassName, className)
      }
      ref={ref}
      {...otherProps}>
      {children}
    </NavLink>
  );
});

const sharedClassNames = 'px-6 text-xl';
const activeClassName = `${sharedClassNames} text-violet-500 hover:text-violet-300`;
const inactiveClassName = `${sharedClassNames} text-slate-400 hover:text-slate-200`;

export default TopNavigationLink;
