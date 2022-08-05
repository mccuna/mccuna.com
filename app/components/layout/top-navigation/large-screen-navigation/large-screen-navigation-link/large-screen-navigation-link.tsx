import { FC, PropsWithChildren } from 'react';
import TopNavigationLink from '../../top-navigation-link/top-navigation-link';

type Props = {
  to: string;
};

const LargeScreenNavigationLink: FC<PropsWithChildren<Props>> = ({
  to,
  children,
}) => {
  return (
    <li>
      <TopNavigationLink
        to={to}
        className='w-full py-3 border-b-2  underline-on-hover'>
        {children}
      </TopNavigationLink>
    </li>
  );
};

export default LargeScreenNavigationLink;
