import { NavLink } from '@remix-run/react';
import clsx from 'clsx';
import { forwardRef, MouseEventHandler, PropsWithChildren } from 'react';

type Props = {
  to: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};

const XsScreenNavigationLink = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<Props>
>(({ to, onClick, children, ...otherProps }, ref) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          'p-6 text-3xl underline-on-hover',
          isActive
            ? 'text-indigo-500 hover:text-indigo-300'
            : 'text-slate-400 hover:text-slate-200',
        )
      }
      ref={ref}
      {...otherProps}>
      {children}
    </NavLink>
  );
});

export default XsScreenNavigationLink;
