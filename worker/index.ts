import { AppLoadContext } from '@remix-run/cloudflare';
import * as build from '../build/index.js';
import { createFetchHandler } from './adapter';

const handleFetch = createFetchHandler({
  // Remix build files
  build,
  //  Get the load context for each request
  getLoadContext: (request, env, ctx) => {
    return { env, ctx } as AppLoadContext;
  },
  mode: process.env.NODE_ENV,
  enableCache: true,
});

const worker: ExportedHandler = {
  fetch: handleFetch,
};

export default worker;
