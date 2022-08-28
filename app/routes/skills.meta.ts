import { MetaFunction } from '@remix-run/cloudflare';
import { getPageTitle } from '~/utils/meta-utils';

export const meta: MetaFunction = () => ({
  title: getPageTitle('Skills'),
  description: "mc cună's main skills. Check what technologies he uses",
});
