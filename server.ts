import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import * as build from '@remix-run/dev/server-build';

const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => {
    console.log('context.env', JSON.stringify(context.env, null, 2));
    console.log('context.data', JSON.stringify(context.data, null, 2));
    return context;
  },
});

export function onRequest(context) {
  return handleRequest(context);
}
