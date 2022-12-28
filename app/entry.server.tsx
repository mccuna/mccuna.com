import { EntryContext } from '@remix-run/cloudflare';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import { customRoutes } from './custom-routes';
import { removeTrailingSlash } from './utils/meta-utils';
import { permanentRedirect } from './utils/server-response-shorthand';

import * as Sentry from '@sentry/remix';
import { appConfig } from './constants/app-config';

Sentry.init({
  dsn: appConfig.sentryDSN,
  tracesSampleRate: 0.1,
  integrations: [],
});

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  /* The app doesn't use a trailing slash for URLs.
   * If the request url contains a trailing slash
   * permanently redirect to the version without it.
   */
  const requestUrl = new URL(request.url);
  if (requestUrl.pathname !== '/' && requestUrl.pathname.endsWith('/')) {
    return permanentRedirect(removeTrailingSlash(requestUrl.pathname));
  }

  const customRoute = customRoutes.find(
    (route) => route.pathname === requestUrl.pathname,
  );

  if (customRoute) {
    return customRoute.resolve(request, remixContext);
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
