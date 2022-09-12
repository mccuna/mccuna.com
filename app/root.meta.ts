import { MetaFunction } from '@remix-run/cloudflare';
import { RootLoaderData } from './root.loader';
import {
  getPageTitle,
  getSocialMediaMetaTags,
  removeTrailingSlash,
} from './utils/meta-utils';

export const meta: MetaFunction = ({ data, location }) => {
  const requestDetails = (data as RootLoaderData | undefined)?.requestDetails;

  return {
    charset: 'utf-8',
    title: getPageTitle(''),
    description: 'The personal site of Mihai Cristian Cună (mc cună)',
    viewport: 'width=device-width,initial-scale=1',
    ...getSocialMediaMetaTags({
      origin: requestDetails?.origin ?? 'https://mccuna.com',
      url: removeTrailingSlash(location.pathname),
    }),
  };
};
