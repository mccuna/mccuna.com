import { json, LoaderArgs } from '@remix-run/cloudflare';
import { getRequestOrigin } from './utils/request-utils';

export const loader = ({ request }: LoaderArgs) => {
  return json({
    requestDetails: {
      origin: getRequestOrigin(request),
    },
    ENV: {
      HCAPTCHA_SITE_KEY,
    },
  });
};

export type RootLoaderData = Awaited<
  ReturnType<ReturnType<typeof loader>['json']>
>;
