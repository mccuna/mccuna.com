import { RemixBrowser } from '@remix-run/react';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { hydrate } from 'react-dom';
import { appConfig } from './constants/app-config';

Sentry.init({
  // Don't send errors to Sentry in development
  dsn: process.env.NODE_ENV === 'production' ? appConfig.sentryDSN : '',
  // TODO: check the Remix browser tracer
  integrations: [new BrowserTracing()],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 0.1,
  tunnel: '/sentry',
});

hydrate(<RemixBrowser />, document);
