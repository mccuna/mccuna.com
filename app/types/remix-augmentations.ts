import { Toucan } from 'toucan-js';
import { Env } from './env';

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    env: Env;
    // TODO: switch to PluginData from the cloudflare pages plugin when possible
    data: { sentry: Toucan };
  }
}

export {};
