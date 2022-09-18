import { routeHrefs } from '~/constants';
import { permanentRedirect } from '~/utils/server-response-shorthand';

// Permanent redirect handling old routes
export const loader = () => {
  return permanentRedirect(routeHrefs.aboutMe.myJourney);
};

const AboutMe = () => {
  // This will never get rendered as the route is just a proxy for the permanent redirect
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

export default AboutMe;
