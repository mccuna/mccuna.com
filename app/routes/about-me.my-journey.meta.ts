import { MetaFunction } from '@remix-run/cloudflare';
import { getPageTitle } from '~/utils/meta-utils';

export const meta: MetaFunction = () => ({
  title: getPageTitle('My journey'),
  description:
    'About Mihai Cristian Cună (mc cună). Read his software developer journey',
});
