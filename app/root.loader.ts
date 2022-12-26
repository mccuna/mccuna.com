import { json, LoaderArgs } from '@remix-run/cloudflare';
import { getRequestOrigin } from './utils/request-utils';

export const loader = ({ request, context }: LoaderArgs) => {
  console.log('context', JSON.stringify(context, null, 2));

  const data = {
    requestDetails: {
      origin: getRequestOrigin(request),
    },
    ENV: {
      HCAPTCHA_SITE_KEY: context.env.HCAPTCHA_SITE_KEY,
      USE_CUSTOM_DOMAIN_FOR_IMAGES: context.env.USE_CUSTOM_DOMAIN_FOR_IMAGES,
    },
  };

  return json(data);
};

export type RootLoaderData = Awaited<
  ReturnType<ReturnType<typeof loader>['json']>
>;
