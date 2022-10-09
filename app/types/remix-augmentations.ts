import { Env } from './env';

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    // https://verifier.meetchopra.com/ api key
    env: Env;
  }
}

export {};
