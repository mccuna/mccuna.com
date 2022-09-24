import { json, LoaderArgs } from '@remix-run/cloudflare';
import { getRequestOrigin } from './utils/request-utils';

export const loader = ({ request, context }: LoaderArgs) => {
  return json({
    requestDetails: {
      origin: getRequestOrigin(request),
    },
    ENV: {
      HCAPTCHA_SITE_KEY: context.env.HCAPTCHA_SITE_KEY,
      CLOUDFLARE_ACCOUNT_HASH: context.env.CLOUDFLARE_ACCOUNT_HASH,
      USE_CUSTOM_DOMAIN_FOR_IMAGES: context.env.USE_CUSTOM_DOMAIN_FOR_IMAGES,
    },
  });
};

export type RootLoaderData = Awaited<
  ReturnType<ReturnType<typeof loader>['json']>
>;
