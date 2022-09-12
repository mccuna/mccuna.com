import { MetaFunction } from '@remix-run/cloudflare';
import { getPageTitle } from '~/utils/meta-utils';

export const meta: MetaFunction = () => ({
  title: getPageTitle('Skills'),
  description:
    'Main skills of Mihai Cristian Cună (mc cună). Check what technologies he uses',
});
