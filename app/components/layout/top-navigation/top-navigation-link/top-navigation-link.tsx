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
        clsx(
          'px-6 text-xl',
          isActive
            ? 'text-indigo-500 hover:text-indigo-300'
            : 'text-slate-400 hover:text-slate-200',
          className,
        )
      }
      ref={ref}
      {...otherProps}>
      {children}
    </NavLink>
  );
});
export default TopNavigationLink;
