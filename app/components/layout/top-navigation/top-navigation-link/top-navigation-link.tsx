import { NavLink } from '@remix-run/react';
import { FC, PropsWithChildren } from 'react';

type Props = {
  to: string;
};

const TopNavigationLink: FC<PropsWithChildren<Props>> = ({ to, children }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? activeClassName : inactiveClassName
        }>
        {children}
      </NavLink>
    </li>
  );
};

const sharedClassNames = 'px-6 text-xl underline-on-hover';
const activeClassName = `${sharedClassNames} text-sky-400 hover:text-sky-200`;
const inactiveClassName = `${sharedClassNames} text-slate-400 hover:text-slate-200`;

export default TopNavigationLink;
