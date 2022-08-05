import { routeHrefs } from '~/utils/routes-hrefs';
import LargeScreenNavigationLink from '../top-navigation-link/top-navigation-link';

const LargeScreenNavigation = () => {
  return (
    <ul className='hidden lg:flex justify-center items-center'>
      <LargeScreenNavigationLink to={routeHrefs.home}>
        Home
      </LargeScreenNavigationLink>
      <LargeScreenNavigationLink to={routeHrefs.skills}>
        Skills
      </LargeScreenNavigationLink>
      <LargeScreenNavigationLink to={routeHrefs.experience}>
        Experience
      </LargeScreenNavigationLink>
      <LargeScreenNavigationLink to={routeHrefs.aboutMe}>
        About me
      </LargeScreenNavigationLink>
      <LargeScreenNavigationLink to={routeHrefs.contact}>
        Contact
      </LargeScreenNavigationLink>
    </ul>
  );
};

export default LargeScreenNavigation;
