import { MetaFunction } from '@remix-run/cloudflare';
import { getPageTitle } from '~/utils/meta-utils';

export const meta: MetaFunction = () => ({
  title: getPageTitle('About'),
  description: 'About mc cună. Read his software developer journey',
});
