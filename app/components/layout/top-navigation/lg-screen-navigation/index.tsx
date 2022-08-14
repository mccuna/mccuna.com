import { routeHrefs } from '~/constants/routes-hrefs';
import LgScreenNavigationLink from './lg-screen-navigation-link';

const LgScreenNavigation = () => {
  return (
    <ul className='hidden lg:flex justify-center items-center'>
      <LgScreenNavigationLink to={routeHrefs.home}>Home</LgScreenNavigationLink>
      <LgScreenNavigationLink to={routeHrefs.skills}>
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
