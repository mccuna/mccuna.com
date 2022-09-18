import { Tooltip } from '~/components/tooltip';
import { routeHrefs } from '~/constants/routes-hrefs';
import LgScreenLinksMenu from './lg-screen-links-menu';
import LgScreenNavigationLink from './lg-screen-navigation-link';

const LgScreenNavigation = () => {
  return (
    <ul className='hidden lg:flex justify-center items-center'>
      <LgScreenNavigationLink to={routeHrefs.home}>Home</LgScreenNavigationLink>
      <li>
        <Tooltip title='Coming soon!' tooltipPlacement='bottom'>
          <span className='w-full px-6 py-3 text-xl text-slate-600 cursor-default'>
            Blog
          </span>
        </Tooltip>
      </li>
      <LgScreenLinksMenu
        buttonText='About me'
        links={[
          {
            text: 'My journey',
            to: routeHrefs.aboutMe.myJourney,
          },
          {
            text: 'Skills',
            to: routeHrefs.aboutMe.skills,
          },
          {
            text: 'Experience',
            to: routeHrefs.aboutMe.experience,
          },
        ]}
      />
      <LgScreenNavigationLink to={routeHrefs.contact}>
        Contact
      </LgScreenNavigationLink>
    </ul>
  );
};

export default LgScreenNavigation;
