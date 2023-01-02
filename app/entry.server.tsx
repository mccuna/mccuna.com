import { EntryContext } from '@remix-run/cloudflare';
import { RemixServer } from '@remix-run/react';
import * as Sentry from '@sentry/remix';
import { renderToString } from 'react-dom/server';
import { appConfig } from './constants/app-config';
import { customRoutes } from './custom-routes';
import { removeTrailingSlash } from './utils/meta-utils';
import { permanentRedirect } from './utils/server-response-shorthand';

Sentry.init({
  // Don't send errors to Sentry in development
  dsn: process.env.NODE_ENV === 'production' ? appConfig.sentryDSN : '',
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
