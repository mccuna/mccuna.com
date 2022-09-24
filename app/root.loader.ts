import { json, LoaderArgs } from '@remix-run/cloudflare';
import { getRequestOrigin } from './utils/request-utils';

export const loader = ({ request, context }: LoaderArgs) => {
  // console.log('HCAPTCHA_SITE_KEY', JSON.stringify(HCAPTCHA_SITE_KEY, null, 2));
  // console.log(
  //   'CLOUDFLARE_ACCOUNT_HASH',
  //   JSON.stringify(CLOUDFLARE_ACCOUNT_HASH, null, 2),
  // );

  return json({
    requestDetails: {
      origin: getRequestOrigin(request),
    },
    ENV: {
      // HCAPTCHA_SITE_KEY,
      // CLOUDFLARE_ACCOUNT_HASH,
    },
  });
};

export type RootLoaderData = Awaited<
  ReturnType<ReturnType<typeof loader>['json']>
>;
