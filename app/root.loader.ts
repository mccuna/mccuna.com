import { json } from '@remix-run/cloudflare';

export const loader = () => {
  return json({
    ENV: {
      HCAPTCHA_SITE_KEY,
    },
  });
};

export type RootLoaderData = Awaited<
  ReturnType<ReturnType<typeof loader>['json']>
>;
