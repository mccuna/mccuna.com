import { Tooltip } from '~/components/tooltip';
import { routeHrefs } from '~/constants/routes-hrefs';
import LgScreenNavigationLink from './lg-screen-navigation-link';

const LgScreenNavigation = () => {
  return (
    <ul className='hidden lg:flex justify-center items-center'>
      <LgScreenNavigationLink to={routeHrefs.home}>Home</LgScreenNavigationLink>
      <LgScreenNavigationLink to={routeHrefs.skills}>
      <Tooltip title='Coming soon!' tooltipPlacement='bottom'>
        <span className='w-full px-6 py-3 text-xl text-slate-600 hover:text-slate-200 cursor-pointer'>
          Blog
        </span>
      </Tooltip>
        Skills
      </LgScreenNavigationLink>
      <LgScreenNavigationLink to={routeHrefs.experience}>
        Experience
      </LgScreenNavigationLink>
      <LgScreenNavigationLink to={routeHrefs.aboutMe}>
        About Me
      </LgScreenNavigationLink>
      <LgScreenNavigationLink to={routeHrefs.contact}>
        Contact
      </LgScreenNavigationLink>
    </ul>
  );
};

export default LgScreenNavigation;
