import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import * as build from '@remix-run/dev/server-build';
import { Env } from '~/types/env';

const handleRequest = createPagesFunctionHandler<Env>({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => {
    return context;
  },
});

export function onRequest(context: EventContext<Env, any, any>) {
  return handleRequest(context);
}
