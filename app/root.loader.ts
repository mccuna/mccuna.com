import { json, LoaderArgs } from '@remix-run/cloudflare';
import { getRequestOrigin } from './utils/request-utils';

export const loader = ({ request, context }: LoaderArgs) => {
  const data = {
    requestDetails: {
      origin: getRequestOrigin(request),
    },
    ENV: {
      TURNSTILE_SITE_KEY: context.env.TURNSTILE_SITE_KEY,
      USE_CUSTOM_DOMAIN_FOR_IMAGES: context.env.USE_CUSTOM_DOMAIN_FOR_IMAGES,
      CLOUDFLARE_ACCOUNT_HASH: context.env.CLOUDFLARE_ACCOUNT_HASH,
    },
  };

  return json(data);
};

export type RootLoaderData = Awaited<
  ReturnType<ReturnType<typeof loader>['json']>
>;
