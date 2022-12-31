import sentryPlugin from '@cloudflare/pages-plugin-sentry';
import { appConfig } from '~/constants/app-config';
import { Env } from '~/types/env';

export const onRequest: PagesFunction<Env> = (context) => {
  return sentryPlugin({
    dsn: appConfig.sentryDSN,
  })(context);
};
