import { json, LoaderArgs } from '@remix-run/cloudflare';
import { UseDataFunctionReturn } from '@remix-run/react/dist/components';

export const loader = ({}: LoaderArgs) => {
  return json({
    ENV: {
      HCAPTCHA_SITE_KEY,
    },
  });
};

export type RootLoaderData = UseDataFunctionReturn<typeof loader>;
