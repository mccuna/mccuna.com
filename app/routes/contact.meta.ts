import { MetaFunction } from '@remix-run/cloudflare';
import { getPageTitle } from '~/utils/meta-utils';

export const meta: MetaFunction = () => ({
  title: getPageTitle('Contact'),
  description: 'Send a message to Mihai Cristian Cună (mc cună)',
});
