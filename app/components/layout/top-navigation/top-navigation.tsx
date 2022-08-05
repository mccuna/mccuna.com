import { Link } from '@remix-run/react';
import { FC } from 'react';
import { routeHrefs } from '~/utils/routes-hrefs';
import TopNavigationLink from './top-navigation-link/top-navigation-link';

const TopNavigation: FC = () => {
  return (
    <nav className='h-20 flex justify-center items-center'>
      <div className='basis-1/2 flex justify-between'>
        <div>
          <Link to={routeHrefs.home}>
            <h1 className='text-slate-200 text-3xl underline-on-hover'>
              mc cuna
            </h1>
          </Link>
        </div>
        <ul className='flex justify-center items-center'>
          <TopNavigationLink to={routeHrefs.home}>Home</TopNavigationLink>
          <TopNavigationLink to={routeHrefs.skills}>Skills</TopNavigationLink>
          <TopNavigationLink to={routeHrefs.experience}>
            Experience
          </TopNavigationLink>
          <TopNavigationLink to={routeHrefs.aboutMe}>
            About me
          </TopNavigationLink>
          <TopNavigationLink to={routeHrefs.contact}>Contact</TopNavigationLink>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigation;
