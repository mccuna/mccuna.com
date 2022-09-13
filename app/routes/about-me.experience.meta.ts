import { MetaFunction } from '@remix-run/cloudflare';
import { getPageTitle } from '~/utils/meta-utils';

export const meta: MetaFunction = () => ({
  title: getPageTitle('Experience'),
  description: 'See the companies Mihai Cristian Cună (mc cună) has worked for',
});
