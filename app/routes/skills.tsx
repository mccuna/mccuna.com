import { routeHrefs } from '~/constants';
import { permanentRedirect } from '~/utils/server-response-shorthand';

export { handle } from './skills.handle';

// Permanent redirect handling old routes
export const loader = () => {
  return permanentRedirect(routeHrefs.aboutMe.skills);
};

const Skills = () => {
  // This will never get rendered as the route is just a proxy for the permanent redirect
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
};

export default Skills;
