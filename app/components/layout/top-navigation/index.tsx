import { Link } from '@remix-run/react';
import { FC } from 'react';
import { routeHrefs } from '~/constants/routes-hrefs';
import LgScreenNavigation from './lg-screen-navigation';
import XsScreenNavigation from './xs-screen-navigation';
import logo from '/public/images/logo.png';

const TopNavigation: FC = () => {
  return (
    <nav className='h-20 flex justify-center items-center'>
      <div className='basis-full flex justify-between items-center  px-4 lg:basis-5/6 xl:basis-4/6'>
        <Link to={routeHrefs.home} className='flex gap-x-3 items-center'>
          {/* TODO: Convert logo to webp when final */}
          <img src={logo} className='h-10 w-10' />
          <h1 className='text-slate-200 text-4xl underline-on-hover hover:text-slate-50'>
            mc cuna
          </h1>
        </Link>
        <LgScreenNavigation />
        <XsScreenNavigation />
      </div>
    </nav>
  );
};

export default TopNavigation;
