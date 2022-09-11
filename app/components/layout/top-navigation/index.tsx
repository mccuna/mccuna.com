import { Link } from '@remix-run/react';
import { FC } from 'react';
import { CdnImage } from '~/components/image/cdn-image';
import { routeHrefs } from '~/constants/routes-hrefs';
import LgScreenNavigation from './lg-screen-navigation';
import XsScreenNavigation from './xs-screen-navigation';

const TopNavigation: FC = () => {
  return (
    <nav className='h-20 flex justify-center items-center'>
      <div className='basis-full flex justify-between items-center px-4 lg:basis-11/12 xl:basis-5/6'>
        <Link to={routeHrefs.home} className='flex gap-x-3 items-center'>
          <CdnImage
            cdnPath='logo.svg'
            className='w-16 h-8'
            alt='logo'
            width={40}
            height={40}
          />
          <h1 className='text-slate-200 text-4xl underline-on-hover hover:text-slate-50'>
            mc cună
          </h1>
        </Link>
        <LgScreenNavigation />
        <XsScreenNavigation />
      </div>
    </nav>
  );
};

export default TopNavigation;
