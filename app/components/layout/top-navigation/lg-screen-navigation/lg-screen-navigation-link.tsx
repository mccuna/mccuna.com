import { NavLink } from '@remix-run/react';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type Props = {
  to: string;
};

const LgScreenNavigationLink: FC<PropsWithChildren<Props>> = ({
  to,
  children,
}) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx(
            'w-full px-6 py-3 text-xl underline-on-hover',
            isActive
              ? 'text-indigo-500 hover:text-indigo-300'
              : 'text-slate-400 hover:text-slate-200',
          )
        }>
        {children}
      </NavLink>
    </li>
  );
};

export default LgScreenNavigationLink;
