import { routeHrefs } from '~/constants';
import { permanentRedirect } from '~/utils/server-response-shorthand';

// Permanent redirect handling old routes
export const loader = () => {
  return permanentRedirect(routeHrefs.aboutMe.experience);
};

const Experience = () => {
  return <></>;
};

export default Experience;
