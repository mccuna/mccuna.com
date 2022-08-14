import { Link } from '@remix-run/react';
import { FC } from 'react';
import { routeHrefs } from '~/constants/routes-hrefs';
import LgScreenNavigation from './lg-screen-navigation';
import XsScreenNavigation from './xs-screen-navigation';

const TopNavigation: FC = () => {
  return (
    <nav className='h-20 flex justify-center items-center'>
      <div className='basis-full flex justify-between px-4 lg:basis-5/6 xl:basis-4/6'>
        <div className='flex items-center'>
          <Link to={routeHrefs.home}>
            <h1 className='text-slate-200 text-4xl underline-on-hover'>
              mc cuna
            </h1>
          </Link>
        </div>
        <LgScreenNavigation />
        <XsScreenNavigation />
      </div>
    </nav>
  );
};

export default TopNavigation;
