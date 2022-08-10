import { createEventHandler } from '@remix-run/cloudflare-workers';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as build from '@remix-run/dev/server-build';

// eslint-disable-next-line no-restricted-globals
addEventListener(
  'fetch',
  createEventHandler({
    build,
    mode: process.env.NODE_ENV,
  }),
);
