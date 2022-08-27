import { RemixBrowser } from '@remix-run/react';
import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';
import { hydrate } from 'react-dom';

hydrate(<RemixBrowser />, document);

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: DSN_URL,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
    tunnel: '/logs',
  });
}
