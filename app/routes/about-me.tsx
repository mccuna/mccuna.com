import { routeHrefs } from '~/constants';
import { permanentRedirect } from '~/utils/server-response-shorthand';

// Permanent redirect handling old routes
export const loader = () => {
  return permanentRedirect(routeHrefs.aboutMe.myJourney);
};

const AboutMe = () => {
  return <></>;
};

export default AboutMe;
